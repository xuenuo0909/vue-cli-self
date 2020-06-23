<template>
  <div>
    demo1
    <el-tooltip placement="top" :value="open" manual>
      <div slot="content">
        提示：该学校预计
        <span style="color: red;">【×】</span>
        天后有名称为：<span style="color: red;">XXX</span> 
        的考试，点击
        <el-button size="mini" type="text">「详情」</el-button>
        查看更多考试信息；
        <div>
          <el-button size="mini" type="text">我知道了</el-button>
        </div>
      </div>
      <span
        style="cursor: pointer; color: #009ff5;">
        爱云校
      </span>
    </el-tooltip>
    <span @click="handleClick">点我取消</span>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data() {
    return {
      open: true
    }
  },
  beforeMount() {
    console.log(this.$route);
  },
  methods: {
    handleClick() {
      this.open = false;
    }
  }
}
</script>

<style>

</style>