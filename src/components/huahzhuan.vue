<template>
  <el-dialog
    :visible.sync="modifyDialog"
    width="434px"
    style="text-align: left;"
    :before-close="handleClose">
    <template slot="title">
      <span class="title">划转学生</span>
    </template>
    <div class="wrap">
      <div class="wrap-zh">
        <div class="bt-title">学生</div>：
        <div style="display: inline-block;">
          王贝贝
        </div>
      </div>
      <div class="wrap-pswd">
        <div class="bt-title">划转角色</div>：
        <el-checkbox-group 
          v-model="checkedCities">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="wrap-pswd">
        <div class="bt-title">选择规划师</div>：
        <input type="text" />
      </div>
      <div class="wrap-pswd">
        <div class="bt-title">选择学管师</div>：
        <input type="text" />
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
      checkedCities: ['规划师'],
      cities: ['规划师', '学管师']
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
  width: 74px;
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
