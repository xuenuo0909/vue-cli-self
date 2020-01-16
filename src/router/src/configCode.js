// 引入Vue
import Vue from 'vue';
// 引入vue路由
import Router from 'vue-router';
// 引入路由配置
import { router } from '../config';
// 引入组件加载方式
import { developImport, productionImport } from '../dynamicImport';
// 判断当前环境，可使用 process.env.NODE_ENV 字段
const isDevelop = process.env.NODE_ENV === 'development';
const _import = isDevelop ? developImport : productionImport;
// 挂载
Vue.use(Router);
// 操作路由配置
const baseRouter = (routerResult) => {
  // 返回一个新的路由数组
  return routerResult.map(item => {
    // 定义一个对象，拿到需要的对象信息
    const newItem = {};
    // 解构赋值
    const { meta, path, name } = item;
    // 首先判断必填项
    if (path && name) {
      newItem.path = path;
      newItem.name = name;
    } else { // 反之抛出错误
      throw Error('请重新检查路由信息');
    }
    // 判断 meta 属性
    if (meta) {
      newItem.meta = meta;
    }
    // 判断组件，进行动态渲染
    if (item.component) {
      // 动态引入组件
      newItem.component = require(`@/components/${ item.component }`).default;
      // 判断是否有子节点
      if (item.children) {
        // 递归调用
        baseRouter(item.children);
      }
    }
    // 判断路由重定向
    if (item.redirect) {
      newItem.redirect = item.redirect;
    }
    return newItem;
  })
};

const scrollBehavior = (to, from, savedPosition) => {
  // scrollBehavior是vue的滚动行为，如果当前参数中，存在 savedPosition，可直接返回
  if (savedPosition) return savedPosition;
  const position = {};
  // 如果是 history 路由的话，以下代码失效
  if (to.hash) {
    position.selector = to.hash;
  }
  if (to.matched.some(item => item.meta.scrollToTop)) {
    position.x = 0;
    position.y = 0;
  }
  return position;
};

export default new Router({
  mode: 'history',
  scrollBehavior: scrollBehavior,
  routes: baseRouter(router)
})
