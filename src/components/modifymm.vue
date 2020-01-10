<template>
  <el-dialog
    :visible.sync="modifyDialog"
    width="476px"
    style="text-align: left;"
    :before-close="handleClose">
    <template slot="title">
      <span class="title">重置密码</span>
    </template>
    <div class="wrap">
      <div class="wrap-zh">
        <div class="bt-title">账号</div>：
        <div style="display: inline-block;">
          <el-radio v-model="radio" label="1">重置学生账号</el-radio>
          <el-radio v-model="radio" label="2">重置家长账号</el-radio>
        </div>
      </div>
      <div class="wrap-pswd">
        <div class="bt-title">新密码</div>：
        <el-input v-model="input" style="width: 380px; height: 36px;" placeholder="请输入密码"></el-input>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      modifyDialog: true,
      radio: '1',
      input: ''
    };
  },
  methods: {
    handleClose() {
      this.modifyDialog = false;
      this.$emit('handleSmsDialog', '', false);
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  font-size: 18px;
  line-height: 25px;
  color: #303133;
}

.bt-title {
  display: inline-block;
  width: 46px;
  height: 36px;
  line-height: 36px;
  text-align: justify;

  &:after {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    content: '';
  }
}

.wrap {
  &-zh {
    display: flex;
    align-items: center;
  }

  &-pswd {
    display: flex;
    margin-top: 22px;
    align-items: center;
  }
}

/deep/.el-dialog__footer {
  margin-top: 20px;
}

/deep/.el-input {
  height: 36px;
}

/deep/.el-dialog__body {
  padding: 0 20px;
}
</style>
