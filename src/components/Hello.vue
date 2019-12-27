<template>
  <div class="student-detail-header">
    <div class="header-portrait">
      <span>头像</span>
    </div>
    <div class="header-wrap">
      <div class="student-id">
        <span class="student-id-name">周杰伦</span>
        <span class="student-id-code">asdqwqdwadadsadwqdqqdwqd</span>
        <span class="student-id-copy">复制</span>
        <!-- <button class="bg-color">意向生档案</button>
        <button class="bg-color">意向生档案</button>
        <button class="bg-write">意向生档案</button>
        <button class="bg-write">意向生档案</button>
        <button class="bg-write">意向生档案</button> -->
        <el-button size="mini" type="primary">主要按钮</el-button>
        <el-button size="mini" type="primary">主要按钮</el-button>
        <el-button size="mini" type="primary" plain>主要按钮</el-button>
        <el-button size="mini" type="primary" plain>主要按钮</el-button>
        <el-button size="mini" type="primary" plain>主要按钮</el-button>
      </div>
      <div class="content">
        <div class="content-login">
          <span>末次登陆时间2019-12-23-10:30 爱疯8plus</span>
          <strong>状态：上课中</strong>
        </div>
        <ul class="content-information">
          <li>
            <label>年级：</label>
            <span>初三</span>
          </li>
          <li>
            <label>联系方式：</label>
            <span>18935091000</span>
          </li>
          <li>
            <label>学校：</label>
            <router-link>外国语学校</router-link>
          </li>
          <li>
            <label>母亲手机：</label>
            <span>18935091000</span>
          </li>
          <li>
            <label>学区：</label>
            <router-link>学区</router-link>
          </li>
          <li>
            <label>父亲手机：</label>
            <span>18935091000</span>
          </li>
          <li>
            <label>跟进人：</label>
            <span>张三（咨询师）李白（学管）</span>
          </li>
        </ul>
        <div class="content-button">
          <el-button type="text">好分数报告</el-button>
          <el-button type="text">考试分析</el-button>
          <el-button type="text">分析报告</el-button>
          <el-button type="text">规划小程序</el-button>
          <el-button type="text">试听报告</el-button>
          <el-button type="text">服务小程序</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        input: ''
      };
    }
  };
</script>

<style scoped lang="less">
  .student-detail-header {
    display: flex;
    width: 959.98px;
    height: 350px;
    background: #efefef;
  }

  .header-portrait {
    width: 60px;
    height: 100%;

    span {
      display: block;
      width: 60px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      text-align: center;
      background: lime;
      border-radius: 50%;
    }
  }

  .header-wrap {
    flex: 1;
    margin-left: 25px;
    margin-top: 20px;
  }

  .student-id {
    &-name {
      font-size: 16px;
      letter-spacing: 0;
      color: #333;
    }

    &-code {
      margin: 0 11 0 6px;
      font-size: 12px;
      color: #4a4a4a;
    }

    &-copy {
      font-size: 12px;
      color: #1a90ff;
      cursor: pointer;
    }

    button {
      margin: 0 19px;
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .content {
    &-login {
      display: flex;
      margin-top: 17px;
      padding-right: 60px;
      justify-content: space-between;

      span {
        font-size: 11px;
        color: #939393;
      }

      strong {
        font-size: 11px;
        color: #666;
      }
    }

    &-information {
      width: 70%;
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        width: 50%;
        justify-content: flex-start;
        font-size: 12px;
        color: #333;
        line-height: 24px;
      }
    }

    &-button {
      text-align: left;
      letter-spacing: 0;
    }
  }

  label {
    color: #666;
    letter-spacing: 6px;
  }
</style>
