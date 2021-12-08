/*
 * @Author: your name
 * @Date: 2021-12-07 15:56:59
 * @LastEditTime: 2021-12-08 16:24:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \drag-sula\src\pages\Component\index.tsx
 */

import { useContext } from 'react';
import { VlaueContext } from '../VlaueContext';
import './index.less';
import InputConfig from '../components/Input/config';

export default () => {
  const { add, data, current }: any = useContext(VlaueContext); //一句话就可以得到count
  console.log(data, current);

  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };
  const onDrop = (e: any) => {
    e.preventDefault();
    const data: any = e.dataTransfer.getData('Text');
    add(JSON.parse(data));
  };

  return (
    <div onDragOver={allowDrop} onDrop={onDrop} className="content">
      {data[current]?.type === 'input' && (
        <InputConfig {...data[current]} index={current}></InputConfig>
      )}
    </div>
  );
};
