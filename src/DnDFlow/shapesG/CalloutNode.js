import { Handle } from "@xyflow/react";

const CalloutNode = ({ data }) => (
  <div style={{  width:'108px', height:'44px' }}>
    <svg viewBox="1084 1176 130 1200" >
      <g style={{ visibility: 'visible', cursor: 'move' }}>
        <g transform="translate(0.5,0.5)">
          <path
            d="M 1086 1177 L 1206 1177 L 1206 1227 L 1166 1227 L 1146 1257 L 1146 1227 L 1086 1227 Z"
            fill="rgb(255, 255, 255)"
            stroke="rgb(0, 0, 0)"
            strokeMiterlimit="10"
            pointerEvents="all"
          />
        </g>
      </g>
    </svg>
    <Handle type="target" position="top" style={{ background: "#555" }} />
  </div>
);

export default CalloutNode;
