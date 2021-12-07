/*
 * @Author: your name
 * @Date: 2021-07-05 09:32:00
 * @LastEditTime: 2021-07-12 21:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \purchase-platform-front\src\plugins\CustomPlugin\Validator\index.tsx
 */
// @ts-nocheck
import bssula from 'bssula/es/core';

/* ********************************** 起始时间 - 结束时间校验 ******************************** */
bssula.validatorType('bs-validator-dateRange', (ctx: any) => {
  const {
    name,
    form: { getFieldValue },
  } = ctx;
  if (name.indexOf('*timeRange') > 0) {
    const startTime = getFieldValue(name)[0];
    const endTime = getFieldValue(name)[1];
    if (startTime && endTime && endTime.isBefore(startTime)) {
      return Promise.reject(new Error(`开始时间必须小于结束时间`));
    }
  }

  return Promise.resolve();
});

/* ********************************** 重复项校验（例如重复Name重复name） ******************************** */
bssula.validatorType('bs-validator-repeatItem', (ctx: any) => {
  const { value } = ctx;
  if (value === 'hasItem') {
    return Promise.reject(new Error(`已存在该名称`));
  }

  return Promise.resolve();
});

/* ********************************** 特殊字符校验 ******************************** */
bssula.validatorType('bs-validator-special-characters', (ctx: any) => {
  const { value } = ctx;

  const reg = new RegExp(
    "[`~!%@#$^&*()=|{}':;',\\[\\]<>《》/?~！@#￥……&*（）|{}【】‘；：”“'\"。，、？]",
  );
  if (reg.test(value)) {
    return Promise.reject(new Error(`不允许输入该特殊字符`));
  }

  return Promise.resolve();
});

/* ********************************** emoji表情校验 ******************************** */
// bssula.validatorType('bs-validator-emoji', (ctx: any) => {
//   const { value } = ctx;

//   // @ts-nocheck
//   const pattern = new RegExp(
//     '[^\\u0020-\\u007E\\u00A0-\\u00BE\\u2E80-\\uA4CF\\uF900-\\uFAFF\\uFE30-\\uFE4F\\uFF00-\\uFFEF\\u0080-\\u009F\\u2000-\\u201f\r\n]',
//   );
//   if (pattern.test(value)) {
//     return Promise.reject(new Error(`不允许输入表情`));
//   }

//   return Promise.resolve();
// });

/* ********************************** 手机号校验 ******************************** */
bssula.validatorType('bs-validator-phone', (ctx: any) => {
  const { value } = ctx;

  // eslint-disable-next-line no-control-regex
  const pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (value && !pattern.test(value)) {
    return Promise.reject(new Error(`手机号格式有误`));
  }

  return Promise.resolve();
});

/* ********************************** 数字输入 支持两位小数 校验 ******************************** */
bssula.validatorType('bs-validator-inputNumber', (ctx: any) => {
  const { value } = ctx;

  const pattern = /^(0|[1-9]\d*)(.\d{1,2})?$/;
  if (value && !pattern.test(value)) {
    return Promise.reject(new Error(`格式有误,请输入数字类型，支持两位小数`));
  }

  return Promise.resolve();
});
