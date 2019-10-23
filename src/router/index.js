import Vue from 'vue';// 引入 vue
import Router from 'vue-router';// 引入 路由
import { router } from './config';// 引入 路由对象
import { developImport, productionImport } from './dynamicImport';
const develop = process.env.NODE_ENV === 'development';
const _import = develop ? developImport : productionImport;
Vue.use(Router);// 挂载

const loadRouter = configs => {
  return configs.map((item, index) => {
    const route = {};
    const { path, name, meta } = item;
    if (path && name) {
      route.path = path;
      route.name = name;
    } else {
      throw Error(`路由配置第${index + 1}个路由的 path 或 name 属性没有配置`);
    }

    if (meta) {
      route.meta = meta;
    }

    if (item.component) {
      route.component = _import(item.component);
      console.log(_import(item.component));
      if (item.children) {
        route.children = loadRouter(item.children);
      }
    }

    if (item.redirect) {
      route.redirect = item.redirect;
    }
    return route;
  })
};

const scrollBehavior = (to, from, savePosition) => {
  if (savePosition) {
    return savePosition;
  }
  // 如果是 histore 路由的话，以下代码失效
  const position = {};
  if (to.hash) {
    position.selector = to.hash;
  }
  if (to.matched.some(m => m.meta.scrollToTop)) {
    position.x = 0;
    position.y = 0;
  }
  return position;
}
console.log(loadRouter(router));
export default new Router({
  mode: 'history',
  scrollBehavior: scrollBehavior,
  routes: loadRouter(router)
})
