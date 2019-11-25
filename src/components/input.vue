<template>
  <el-input
    :min="1"
    type="number"
    placeholder="请输入正整数"
    v-model="value"
    @mousewheel.native="handlerMouseWheel"
    @keyup.native="replaceValue(value)">
  </el-input>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handlerMouseWheel() {
      const { target } = event;
      if (target.type === 'number') {
        event.preventDefault();
      }
    },
    replaceValue(value) {
      value = value.replace(/(^0)|(-)|\./g, '');
    },
  }
}
</script>
