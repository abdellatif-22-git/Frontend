import { Handle } from "@xyflow/react";

const EllipseNode = ({ data }) => (
  <div style={{ width: "125px", height: "82px" }}>
    <svg style={{ width: "125px", height: "82px" }}>
      <ellipse
        cx="62.5"
        cy="42"
        rx="60"
        ry="40"
        fill="rgb(255, 255, 255)"
        stroke="rgb(0, 0, 0)"
        pointerEvents="all"
      />
    </svg>

    <Handle type="target" position="top" style={{ background: "#555" }} />
    <Handle type="source" position="bottom" style={{ background: "#555" }} />
  </div>
);

export default EllipseNode;
