<template>
  <el-input
    :min="1"
    type="number"
    style="width: 500px;"
    placeholder="请输入正整数"
    v-model="value"
    @mousewheel.native="handlerMouseWheel"
    @keyup.native="replaceValue(value)">
  </el-input>
</template>

<script>
import createRound from '@/constants/createRound';

export default {
  data() {
    return {
      value: ''
    }
  },
  beforeMount() {
    
    
  },
  methods: {
    handlerMouseWheel() {
      const { target } = event;
      if (target.type === 'number') {
        event.preventDefault();
      }
    },
    replaceValue(value) {
      // console.log(value)
      const round = createRound('round');
      // this.value = Math.round(value);
      this.value = round(value, 21);
      // this.value = value.replace(/(^0)|(-)|\./g, '');
    },
  }
}
</script>
