/*
 * @Author: your name
 * @Date: 2021-12-07 15:36:48
 * @LastEditTime: 2021-12-08 16:40:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \drag-sula\src\pages\Welcome.tsx
 */
import { Button } from 'antd';
import React, { createContext, useState } from 'react';
import './Welcome.less';
import Component from '@/components/DragSula/Component';
import Config from '@/components/DragSula//Config';
import Content from '@/components/DragSula/Content';
import { VlaueContext } from '@/components/DragSula/VlaueContext';
import { guid } from '@/components/DragSula/utils';

const Welcome: React.FC = () => {
  const [data, setdata]: any = useState([]);
  const [current, setCurrent]: any = useState({});
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
    data.push({ ...params, id: guid(), props: {} });
    setdata([...data]);
  };

  const update = (data: any) => {
    setdata([...data]);
  };

  return (
    <>
      <div className="top">
        <Button type="primary" onClick={() => {}}>
          获取源码
        </Button>
        x``
      </div>
      <VlaueContext.Provider
        value={{
          leftConfig,
          add,
          data,
          update,
          current,
          setCurrent,
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
