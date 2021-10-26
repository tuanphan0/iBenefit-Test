import { Spin } from 'antd';
import * as React from 'react';


const Loading = () => (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
);

export default Loading;