import React from 'react';
import styled from 'styled-components';
import { Spin, Space } from 'antd';

const FullPageLoaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const FullPageLoader = () => {
  return (
    <div>
      <Spin size="large" />
    </div>
  );
};

export default FullPageLoader;