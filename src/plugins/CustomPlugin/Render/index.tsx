/*
 * @Description:
 * @Author: minghuiXiao
 * @Date: 2021-06-27 15:58:26
 * @LastEditTime: 2021-09-23 09:18:21
 * @LastEditors: Please set LastEditors
 */
import { registerRenderPlugin } from 'bssula';
import { Space, Switch } from 'antd';
import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

/** render插件 */

// 注册方式一
/* ***************************** 选中提示及清除 ************************************************* */
registerRenderPlugin('bs-selectButton')(({ ctx }: any) => {
  const selectedRows = ctx.table.getSelectedRows() || [];
  return (
    <div className="bssula-table-row-selects">
      <span>已选 {selectedRows.length} 项,&nbsp;</span>
      <span onClick={() => ctx.table.clearRowSelection()} className="customAdomStyle">
        清除
      </span>
    </div>
  );
}, true);

registerRenderPlugin('bs-orderTransfer')(({ ctx }: any) => {
  return (
    <Space>
      <span style={{ display: 'flex', justifyItems: 'center' }}>
        传送
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
      </span>
      <span style={{ display: 'flex', justifyItems: 'center' }}>
        传送JDE
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}></Switch>
      </span>
    </Space>
  );
}, true);

// 注册方式二
/* ***************************** 上传文件按钮 ************************************** */
