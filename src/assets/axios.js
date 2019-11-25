// 引入vue
import Vue from 'vue';
// 引入axios
import Axios from 'axios';
// 创建axios实例
const instance = Axios.create({
  // withCredentials: true, // 简单理解为是否需要请求携带cookie
  timeout: 20000
});

// 设置请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';// 也可以不在这里封装

// 拦截器
instance.interceptors.request.use(config => {
  // 登录流程控制中，根据本地是否存在 token 判断用户的登录情况
  // 但是即使 token 存在，也不能保证当前 token 是最新的
  // 所以每次在请求头携带 token 进行数据请求
  // 后台根据携带的 token 判断用户的登录情况，并返回给我们对应的状态码
  // 可以在相应拦截器中，根据状态码进行一些统一的操作
  const token = 'token';// 此处仅仅是随便输入了一个字段，因为不涉及后端服务
  token && (config.headers.Authorization = token);
  return config;
}, error => {
  Promise.reject(error || '内部错误');
});
// 相应拦截器
instance.interceptors.response.use(res => {
  return res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
}, error => {
  const { response } = error;
  if (response) {
    // 请求已发出，但是范围不在 2xx 内
    errorHandle(response.status, response.data.massage);
    return Promise.reject(response);
  } else {
    // 处理断网的情况
    // eg：请求超时或断网时，更新 state 的 network 状态
    // network 状态在 app.vue 中控制着一个全局的断网提示组件的显示隐藏
    // your code
    return Promise.reject(error);
  }
});

/**
* 请求失败后的错误统一处理
* @param {Number} status 请求失败的状态码
*/
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401：未登录
    case 401:
      // your code，可以跳转回登录页
    break;
    // 403 token 过期
    case 403:
    break;
    // 404 请求不存在
    case 404:
    break;
    default:
    console.log(other);
  }
}

function plugin(Vue) {
  if (plugin.installed || Vue.prototype.$http) {
    return;
  }
  plugin.installed = true;

  Vue.http = instance;
  Vue.axios = Axios;

  Object.defineProperty(Vue.prototype, '$http', { value: instance });
  Object.defineProperty(Vue.prototype, '$axios', { value: Axios });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
export default plugin;
