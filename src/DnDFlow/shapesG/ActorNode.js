import { Handle } from "@xyflow/react";

const ActorNode = ({ data }) => (
  <div
    style={{
      
      width: '16px', 
      height: '65px', 
      display: 'inline-block'
    }}
  >
    <svg  width="100%" height="100%">
      <g transform="translate(0.5,0.5)" style={{ visibility: 'visible', cursor: 'move' }}>
        <ellipse
          cx="7.5"
          cy="7.5" 
          rx="7.5"
          ry="7.5"
          fill="rgb(255, 255, 255)"
          stroke="rgb(0, 0, 0)"
          pointerEvents="all"
        />
        <path
          d="M 7.5 15 L 7.5 40 M 7.5 20 L 0 20 M 7.5 20 L 15 20 M 7.5 40 L 0 60 M 7.5 40 L 15 60"
          fill="none"
          stroke="rgb(0, 0, 0)"
          strokeMiterlimit="10"
          pointerEvents="all"
        />
      </g>
    </svg>
    <Handle type="target" position="top" style={{ background: "#555" }} />
  </div>
);

export default ActorNode;
