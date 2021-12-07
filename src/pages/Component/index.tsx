/*
 * @Author: your name
 * @Date: 2021-12-07 15:56:59
 * @LastEditTime: 2021-12-07 17:31:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \drag-sula\src\pages\Component\index.tsx
 */

import { useContext } from 'react';
import { VlaueContext } from '../VlaueContext';
import './index.less';

export default () => {
  const { leftConfig }: any = useContext(VlaueContext); //一句话就可以得到count
  const ondragstart = (event: any, text: any) => {
    event.dataTransfer.setData('Text', JSON.stringify(text));
  };

  return (
    <div className="left">
      <div className="component_warp">
        {leftConfig.map((d: any) => (
          <div
            draggable={true}
            onDragStart={(event) => {
              ondragstart(event, d);
            }}
            className="content"
            key={d.type}
          >
            {d.title}
          </div>
        ))}
      </div>
    </div>
  );
};
