<template>
  <div id="app">
    <div>
      <button @click="handleClickGet">点我发送请求</button>
      <button @click="handleClickCancel">点我取消</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      cancel: null
    }
  },
  methods: {
    // 请求
    handleClickGet() {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      // axios.get('/static/data.json')
      //   .then(res => {
      //     console.log(res);
      //   })
      const _this = this;
      axios.get('/iyunxiao/v1/planners/configs/planner-info', {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          _this.cancel = c;
        })
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err, 'err');
        })
    },
    // 撤销
    handleClickCancel() {
      this.cancel('取消请求');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
