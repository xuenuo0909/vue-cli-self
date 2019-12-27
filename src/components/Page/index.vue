<template>
  <div style="text-align: left;">
    <el-dialog :visible.sync="isSeeMoreDialog" title="学生档案" width="80%">
      <div>
        <div class="column">
          <div class="column-title">学生账号</div>
          <div class="column-warp column-warp-account">
            <div>
              <label>可登陆账号:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>绑定家长账号:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>联系方式:</label>
              <div>
                内容
                <p class="tx-text">用于接收上课/作业提醒</p>
              </div>
            </div>
            <div>
              <label>外呼手机号:</label>
              <div>
                内容
                <p class="tx-text">用于自动外呼</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-title">基础信息</div>
          <div class="column-warp column-warp-basics">
            <div>
              <label>姓名:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>性别:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>所在地区:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>所在学校:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>年级:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>性格特点:</label>
              <div>
                内容
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-title">家庭情况</div>
          <div class="column-warp column-warp-account">
            <div>
              <label>消费能力:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>主管学习:</label>
              <div>
                内容
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-title">学习情况</div>
          <div class="column-warp column-warp-account">
            <div>
              <label>学习存在问题:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>试听课表现:</label>
              <div>
                内容
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-title">特殊要求</div>
          <div class="column-warp column-warp-account">
            <div>
              <label>课后答题:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label style="width: 60px;">折扣:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>可上课时间:</label>
              <div>
                内容
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-title">联系方式</div>
          <div class="column-warp column-warp-account">
            <div>
              <label>父亲姓名:</label>
              <div>
                内容
              </div>
            </div>
            <div></div>
            <div>
              <label style="width: 60px;">父亲手机:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>父亲微信:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>母亲姓名:</label>
              <div>
                内容
              </div>
            </div>
            <div></div>
            <div>
              <label style="width: 60px;">母亲手机:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>母亲微信:</label>
              <div>
                内容
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-title">教材版本</div>
          <div class="column-warp column-warp-basics">
            <div>
              <label>数学:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>语文:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>英语:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>物理:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>化学:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>生物:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>政治:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>历史:</label>
              <div>
                内容
              </div>
            </div>
            <div>
              <label>地理:</label>
              <div>
                内容
              </div>
            </div>
          </div>
        </div>
        <div class="qr-code">
          <div class="qr-code-warp">
            <span class="qr-code-warp-title">VIP群二维码（机构）</span>
            <div class="qr-code-warp-content">
              <span>+<p>上传</p></span>
            </div>
          </div>
          <div class="qr-code-warp">
            <span class="qr-code-warp-title">VIP群二维码（辅导）</span>
            <div class="qr-code-warp-content">
              <span>+<p>上传</p></span>
            </div>
          </div>
          <div class="qr-code-warp">
            <span class="qr-code-warp-title">VIP群二维码（确认服务协议）</span>
            <div class="qr-code-warp-content">
              <span>+<p>上传</p></span>
            </div>
          </div>
          <div class="qr-code-warp">
            <span class="qr-code-warp-title">VIP群二维码（邀请新生训练营）</span>
            <div class="qr-code-warp-content">
              <span>+<p>上传</p></span>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="isSeeMoreDialog = false">取 消</el-button>
        <el-button size="small" type="primary" @click="isSeeMoreDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isSeeMoreDialog: true
    };
  }
};
</script>

<style lang="less" scoped>
label {
  display: inline-block;
  margin-right: 10px;
  text-align: justify;
  line-height: 32px;

  &:after {
    content:'';
    width: 100%;
    display: inline-block;
    overflow: hidden;
  }
}

.column-warp-account label {
  width: 100px;
}

.column-warp-basics label {
  width: 60px;
}

.column {
  width: 100%;

  &-title {
    font-size: 15px;
    font-weight: bold;
  }

  &-warp {
    display: flex;
    flex-wrap: wrap;

    &>div {
      width: 50%;
      margin: 10px 0;
      display: flex;
    }
  }
}

.tx-text{
  color: #f4b557;
  font-size: 12px;
}

.qr-code {
  display: flex;

  &-warp {
    text-align: center;
    
    &-title {
      font-size: 14px;
    }

    &-content {
      display: inline-block;
      width: 100px;
      height: 100px;
      margin-top: 20px;
      border: thin dashed #beccdb;
      border-radius: 3px;
      background: #fbfdff;
      text-align: center;
      cursor: pointer;
    }
  }
}

.qr-code-warp-content {
  span {
    position: relative;
    font-size: 30px;
    line-height: 100px;

    p {
      font-size: 14px;
      position: absolute;
      left: -5px;
      top: -25px;
      width: 30px;
    }
  }
}

/deep/.el-dialog__body {
  padding: 5px 20px;
}
</style>
