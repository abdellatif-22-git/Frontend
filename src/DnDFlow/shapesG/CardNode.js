import { Handle } from "@xyflow/react";

const CardNode = ({ data }) => (
  <div style={{ backgroundColor: 'red' }}>
    <svg viewBox="0 0 1000 2000">
      <path
        d="M 906 1477 L 956 1477 L 986 1507 L 986 1577 L 906 1577 L 906 1477 Z"
        fill="rgb(255, 255, 255)"
        stroke="rgb(0, 0, 0)"
        strokeMiterlimit="10"
        pointerEvents="all"
      />
    </svg>
    <Handle type="target" position="top" style={{ background: "#555" }} />
  </div>
);

export default CardNode;
