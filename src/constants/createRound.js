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
    if (precision) {
      let pair = `${number}e`.split('e')
      const value = func(`${pair[0]}e${+pair[1] + precision}`)
      pair = `${value}e`.split('e')
      return +`${pair[0]}e${+pair[1] - precision}`
    }
    return func(number)
  }
};

export default createRound;
