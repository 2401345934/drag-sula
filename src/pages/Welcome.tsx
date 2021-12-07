/*
 * @Author: your name
 * @Date: 2021-12-07 15:36:48
 * @LastEditTime: 2021-12-07 17:37:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \drag-sula\src\pages\Welcome.tsx
 */
import { Button } from 'antd';
import React, { createContext, useState } from 'react';
import './Welcome.less';
import Component from './Component';
import Config from './Config';
import Content from './Content';
import { VlaueContext } from './VlaueContext';
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const Welcome: React.FC = () => {
  const [data, setdata]: any = useState([]);
  const leftConfig = [
    {
      title: '输入框',
      type: 'input',
    },
    {
      title: '下拉框',
      type: 'select',
    },
  ];

  const add = (params: any) => {
    data.unshift({ ...params, id: guid() });
    setdata([...data]);
  };

  return (
    <>
      <div className="top">
        <Button type="primary" onClick={() => {}}>
          获取源码
        </Button>
      </div>
      <VlaueContext.Provider
        value={{
          leftConfig,
          add,
          data,
        }}
      >
        <div className="warp">
          <Component></Component>
          <Content></Content>
          <div className="right">
            <Config></Config>
          </div>
        </div>
      </VlaueContext.Provider>
    </>
  );
};

export default Welcome;
