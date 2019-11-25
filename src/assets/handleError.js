export default {
  install(Vue) {
    if (Vue.prototype.$handleError) {
      return;
    }

    function handleError(err, msg) {
      if (typeof arguments[0] === 'string') {
        err = {
          config: {},
          code: '',
          data: {
            msg: arguments[0]
          }
        };
      }
      const message = err && (err.msg || err.message || msg || '请求失败');
      Vue.prototype.$message({ type: 'error', message: message });
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
    }
    Vue.handleError = handleError;
    Object.defineProperty(Vue.prototype, '$handleError', { value: handleError });
  }
};
