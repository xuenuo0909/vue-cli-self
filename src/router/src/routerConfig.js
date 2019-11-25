// 引入Vue
import Vue from 'vue';
// 引入vue路由
import Router from 'vue-router';
// 引入路由配置
import { router } from '../config';
import { developImport, productionImport } from '../dynamicImport';
const develop = process.env.NODE_ENV === 'development';
const _import = develop ? developImport : productionImport;
// 挂载
Vue.use(Router);
// 创建一个函数，对路由配置中组件等进行处理
const baseRouter = (config) => {
  return config.map(item => {
    // 设置默认对象进行保存
    const setting = {};
    // 解构赋值
    const { meta, path, name } = item;
    // 判断 name 和 path 属性
    if (path && name) {// 必填属性
      setting.path = path;
      setting.name = name;
    } else {// 反之抛出错误
      throw Error(`路由配置错误`);
    }
    if (meta) {// 选填属性
      setting.meta = meta;
    }
    // 判断组件
    if (item.component) {
      // 此处为重点，动态引入组件
      setting.component = require(`@/components/${item.component}`).default;
      // setting.component = _import(item.component);
      if (item.children) {
        setting.children = baseRouter(item.children);
      }
    }
    // 判断重定向路由
    if (item.redirect) {
      setting.redirect = item.redirect;
    }
    return setting;
  })
}

// scrollBehavior页面高度，滚动行为钩子函数
const scrollBehavior = (to, from, savePosition) => {
  if (savePosition) {
    return savePosition;
  }
  // 如果是 history 路由的话，以下代码失效
  const position = {};
  // console.log(to, '纯to');
  if (to.hash) {
    position.selector = to.hash
  }
  if (to.matched.some(item => item.meta.scrollToTop)) {
    position.x = 0;
    position.y = 0;
  }
  // console.log(position, '打印position');
  return position;
}

export default new Router({
  mode: 'history',
  scrollBehavior: scrollBehavior,
  routes: baseRouter(router)
})
