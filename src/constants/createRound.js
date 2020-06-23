function createRound(methodName) {
  // 首先传入一个方法属性，Math.round
  const func = Math[methodName]
  // 暴露一个函数，这个函数才是真正lodash的round方法使用
  /**
   * number 传入值
   * precision 取几位小数
   */
  return (number, precision) => {
    precision = precision == null ?
      0 :
      (precision >= 0 ?
        Math.min(precision, 292) :
        Math.max(precision, -292))
    console.log(precision, 'precision');
    if (precision) {
      let pair = `${number}e`.split('e')
      // console.log(pair, 'pair');
      console.log(`${pair[0]}e`);
      console.log(`${+pair[1] + precision}`, '忽略的');
      console.log(`${pair[0]}e${+pair[1] + precision}`, '德玛西亚');
      const value = func(`${pair[0]}e${+pair[1] + precision}`)
      console.log(value, 'value');

      pair = `${value}e`.split('e')
      console.log(pair, 'pair2');
      console.log(`${pair[0]}e${pair[1] - precision}`, '结果');
      console.log(+`${pair[0]}e${+pair[1] - precision}`, '结果+');
      return +`${pair[0]}e${+pair[1] - precision}`
    }
    return func(number)
  }
};

export default createRound;
