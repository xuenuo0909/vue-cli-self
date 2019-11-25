<template>
  <div id="app">
    <div>
      <button @click="handleClickGet">点我发送请求</button>
      <button @click="handleClickCancel">点我取消</button>
      {{
        ceshiData
      }}12
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      1221
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import Enums from '../src/assets/enums';
export default {
  name: 'App',
  data() {
    return {
      Enums,
      cancel: null,
      ceshiData: Enums.newData,
      input: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  created() {
    this.$message.success('欢迎！');
    console.log(this.ceshiData, 'ceshiData');
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

<style lang="less">
@import '../node_modules/element-ui/lib/theme-chalk/index.css';
@import './assets/styles/main.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-input {
  width: 130px;
}
</style>
