<template>
  <el-dialog
    title="查看详情"
    width="40%"
    style="text-align: left;"
    :visible.sync="applicableOpen"
    :before-close="handleClose">
    <div>
      <div class="detail-wrap">
        <div>学生年级：一年级&nbsp;&nbsp;&nbsp;&nbsp;辅导学段：</div>
        <div>课时包等级：</div>
        <div>课时数：</div>
        <div>购买金额：xxx&nbsp;&nbsp;&nbsp;&nbsp;赠送课时：</div>
        <div>适用老师：</div>
        <div>操作时间：</div>
        <div>操作人：</div>
        <div>订单编号：</div>
      </div>
      <div class="detail-wrap">
        <div>学生年级：一年级&nbsp;&nbsp;&nbsp;&nbsp;辅导学段：</div>
        <div>课时包等级：</div>
        <div>课时数：</div>
        <div>购买金额：xxx&nbsp;&nbsp;&nbsp;&nbsp;赠送课时：</div>
        <div>适用老师：</div>
        <div>操作时间：</div>
        <div>操作人：</div>
        <div>订单编号：</div>
      </div>
      <div class="detail-wrap">
        <div>学生年级：一年级&nbsp;&nbsp;&nbsp;&nbsp;辅导学段：</div>
        <div>课时包等级：</div>
        <div>课时数：</div>
        <div>购买金额：xxx&nbsp;&nbsp;&nbsp;&nbsp;赠送课时：</div>
        <div>适用老师：</div>
        <div>操作时间：</div>
        <div>操作人：</div>
        <div>订单编号：</div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="applicableOpen = false">取 消</el-button>
      <el-button size="mini" type="primary" @click="applicableOpen = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        applicableOpen: true
      };
    },
    methods: {
      handleClose() {
        this.applicableOpen = false;
      }
    }
  };
</script>

<style lang="less" scoped>
.detail-wrap {
  padding: 10px 0;
  box-sizing: border-box;
  
  &:not(:nth-of-type(1)) {
    border-top: thin solid #666;
  }
}

/deep/.el-dialog__body {
  padding: 0 20px;
}
</style>
