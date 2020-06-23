<template>
  <div id="app">
    <div>
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <button @click="handleDaochuImg">点我生成尝试1</button>
      <div id="my-node">
        德玛西亚！！！！
        <img src="./assets/logo.png" alt="">
      </div>
      <div class="invited-group-posters-high">
        <img src="./assets/logo.png" alt="">
      </div>
      <div class="dialog-img"></div>
      <button @click="handleCanvasImg">点我下载canvas</button>
      <button @click="handleTGD">调高度</button>
      <button @click="handleClickGet">点我发送请求</button>
      <button @click="handleClickCancel">点我取消</button>
      {{
        ceshiData
      }}12
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      1221
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import Enums from '../src/assets/enums';
// import Html2canvas from 'html2canvas';
import Jquery from 'jquery';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
console.log(domtoimage, 'domtoimage');

export default {
  name: 'App',
  data() {
    return {
      Enums,
      cancel: null,
      ceshiData: Enums.newData,
      input: '',
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    // console.log(window)
    // console.log(Math);
    // console.log(this.$http, 'daadad');
    // this.$message.success('欢迎！');
    // console.log(this.ceshiData, 'ceshiData');
  },
  methods: {
    handleDaochuImg() {
      var node = document.getElementById('my-node');
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
      domtoimage.toBlob(document.getElementById('my-node'))
        .then(function (blob) {
          window.saveAs(blob, 'my-node.png');
        });
    },
    handleCanvasImg() {
      this.$router.push({
        name: 'Demo1',
        query: {
          id: 123
        }
      });
      let div = null;
			let name = '';
      name = '嘉文四世' + '家长专属海报.jpeg';
      div = document.querySelector('.invited-group-posters-high');
      // this.exportImg(div, name);
    },
    // 导出图片
    exportImg(reportWrap, name) {
      const that = this;
      var w = reportWrap.offsetWidth;
      var h = reportWrap.offsetheight;
      var canvas = document.createElement('canvas');
      canvas.width = w * 8;
      canvas.height = h * 8;
      canvas.style.width = w + 'rpx';
      canvas.style.height = h + 'rpx';
      var context = canvas.getContext('2d');
      // 然后将画布缩放，将图像放大两倍画到画布上
      context.scale(8, 8);
      Html2canvas(reportWrap).then(canvas => {
        let link = document.createElement('a');
        link.innerHTML = ' ';
        link.href = canvas
          .toDataURL('image/jpeg', 0.8)
          .replace('image/jpeg', 'image/octet-stream');
        link.download = name;
        link.innerHTML = ' ';
        reportWrap.appendChild(link);
        link.click();
      });
      // let imgObj = new Image();
//       Html2canvas(reportWrap).then(canvas => {
//         let u = navigator.userAgent;
//         // let app = navigator.appVersion;
//   　　　 let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
//   　　　 let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//   　　　 if (isAndroid) {
//           imgObj.src = canvas
//             .toDataURL('image/jpeg', 0.8)
//             .replace('image/jpeg', 'image/octet-stream');
//   　　　 }
//   　　　 if (isIOS) {
// 　　　　　　//这个是ios操作系统
// 　　　　　　imgObj.src = canvas.toDataURL().replace('data:image/png;base64,', '');
//   　　　 }
//         imgObj.src = canvas
//           .toDataURL('image/jpeg', 0.8)
//           .replace('image/jpeg', 'image/octet-stream');
//         imgObj.style.width = '100px';
//         imgObj.style.height = '200px';
//         console.log(imgObj, 'imgObj');
//         imgObj.onload = function() {
//           let ctx = canvas.getContext('2d');
//           ctx.drawImage(this, 0, 0);
//           console.log(that.$refs.popupImg, 'popupImg');
//           // that.$refs.popupImg.open();
//           setTimeout(() => {
//             document.querySelector('.dialog-img').appendChild(this);
//             // console.log(document.querySelector('.uni-popup__wrapper-box'), 'document.querySelector');
//           }, 1000);
//         };
//       });
    },
    handleTGD(e) {
      console.log(e.y);
      window.scrollTo(0, 50);
    },
    // 请求
    handleClickGet() {
      // 请求本地json文件
      axios.get('/static/datas.json')
        .then(res => {
          console.log(JSON.parse(JSON.stringify(res)));
        })
        return;
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      const _this = this;
      this.$http.get('/iyunxiao/v1/planners/configs/planner-info', {
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
