/*
 * @Author: your name
 * @Date: 2021-12-07 15:56:59
 * @LastEditTime: 2021-12-07 17:38:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \drag-sula\src\pages\Component\index.tsx
 */

import { useContext } from 'react';
import { VlaueContext } from '../VlaueContext';
import './index.less';

export default () => {
  const { add, data }: any = useContext(VlaueContext); //一句话就可以得到count
  console.log(data);

  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };
  const onDrop = (e: any) => {
    e.preventDefault();
    const data: any = e.dataTransfer.getData('Text');
    add(JSON.parse(data));
  };

  return <div onDragOver={allowDrop} onDrop={onDrop} className="content"></div>;
};
