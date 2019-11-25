import Vue from 'vue';
import Axios from 'axios';

const env = process.env.NODE_ENV;

const instance = Axios.create({
  withCredentials: true,
  timeout: 20000
});

instance.interceptors.request.use(config => {
  let baseAPI = '';
  let toPath = '';

  const paths = config.url.split('/');
  const rpc = feConfig.proxy.find(rpc => rpc.name === paths[1]);

  if (rpc) {
    baseAPI = rpc.host;
  } else {
    Vue.prototype.$message.error(`${ path[1] } 对应的转发 HOST未设置，请在 feConfig 目录下设置`);
  }

  if (env === 'development') {
    toPath = [].concat([''], paths.slice(1)).join('/');
  } else {
    toPath = [].concat([''], path.slice(2)).join('/');
    config.url = baseAPI + toPath;
  }
  return config;
});

instance.interceptors.response.use(response => {
  if (
    response && response.data &&
    Enums.ErrorCode.CookieInvalid === response.data.code &&
    evn !== 'development'
  ) {
    location.href = `${ feConfig.LOGOUT_URL }${ location.origin }`;
  }
  return response.data;
}, err => {
  
});
