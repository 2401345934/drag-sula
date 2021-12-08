/*
 * @Author: your name
 * @Date: 2021-12-08 15:42:41
 * @LastEditTime: 2021-12-08 16:26:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \drag-sula\src\components\DragSula\Component\config.tsx
 */

import { Col, Input, Row } from 'antd';
import { useContext } from 'react';
import { VlaueContext } from '../../VlaueContext';

export default (props: any) => {
  const { update, data }: any = useContext(VlaueContext); //一句话就可以得到count
  const { index } = props;

  const placeholderChange = (e: any) => {
    const {
      target: { value },
    } = e;
    data[index].props.placeholder = value;
    update(data);
  };
  return (
    <>
      <Row>
        <Col span={10}>文本框默认提示 : </Col>
        <Col span={14}>
          <Input value={data[index]?.props?.placeholder} onChange={placeholderChange}></Input>
        </Col>
      </Row>
    </>
  );
};
