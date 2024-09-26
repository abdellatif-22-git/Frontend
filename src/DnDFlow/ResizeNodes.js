import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizeNodes = ({ children, width, height, ...props }) => {
  const [size, setSize] = useState({ width, height });

  const onResize = (e, { size }) => {
    setSize(size);
  };

  return (
    <ResizableBox
      width={size.width}
      height={size.height}
      minConstraints={[30, 30]}
      maxConstraints={[300, 300]}
      onResize={onResize}
      style={{ position: 'relative', border: '1px solid black', boxSizing: 'border-box' }} 
      {...props}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizeNodes;
