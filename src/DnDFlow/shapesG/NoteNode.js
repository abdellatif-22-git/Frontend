import { memo, useState } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';

const ResizableNodeSelected = ({ data, selected }) => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleResize = (event, { width, height }) => {
    setSize({ width, height });
  };

  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={50}
        minHeight={50}
        onResize={handleResize}
        width={size.width}
        height={size.height}
      />
      <Handle type="target" position={Position.Left} />
      <svg
        width={size.width}
        height={size.height}
        viewBox="1130 1410 100 110" 
      >
        <path
          d="M 1166 1417 L 1216 1417 L 1216 1517 L 1136 1517 L 1136 1447 Z"
          fill="white" 
          stroke="#ff0071" 
          strokeWidth="2"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="14" 
          fill="black" 
        >
          {data.label}
        </text>
      </svg>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(ResizableNodeSelected);
