/*
 * @Author: your name
 * @Date: 2021-09-06 09:03:30
 * @LastEditTime: 2021-11-24 17:31:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oms-ops-front\src\plugins\CustomPlugin\Converter\index.tsx
 */
// @ts-ignore
import sula from 'bssula/es/core';
import { message } from 'antd';

// 分页
sula.converterType('tableConvertType', (ctx: any) => {
  const { response, data } = ctx;
  // 处理错误
  if (!response || !response.status || response.status !== '0') {
    message.error(response.message || response.msg || response.success);
    return false;
  }

  const res = data.items || data.list;
  return {
    list:
      (res.length &&
        res.map((item: any, index: number) => {
          return {
            ...item,
            keyIndex: `${index + 1}`,
          };
        })) ||
      [],
    total: (data.total && Number(data.total)) || (data.totalCount && Number(data.totalCount)) || 0,
    // total: data.total || data.totalCount,
  };
});

// 不分页
sula.converterType('tableConvertNoPage', (ctx: any) => {
  return ctx?.data || [];
});
