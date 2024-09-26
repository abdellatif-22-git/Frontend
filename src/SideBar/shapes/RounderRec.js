import onDragStart from "../Node/ondrag";
const RounderRec = () => {
  <onDragStart />;
  return(
  <div
      className="shapes"
      onDragStart={(event) => onDragStart(event, "RRec")}
      draggable
    >
<div
      className="geItem"
      style={{
        overflow: 'hidden',
        width: '34px',
        height: '32px',
        padding: '1px',
        opacity: 1,
      }}
    >
      <svg
        style={{
          left: '1px',
          top: '1px',
          width: '32px',
          height: '30px',
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <g style={{ pointerEvents: 'none' }}>
          <g style={{ pointerEvents: 'none' }}></g>
          <g style={{ pointerEvents: 'none' }}>
            <g
              transform="translate(0.5, 0.5)"
              style={{ visibility: 'visible', pointerEvents: 'none' }}
            >
              <rect
                x="1.6"
                y="7.8"
                width="28.8"
                height="14.4"
                rx="2.16"
                ry="2.16"
                fill="rgb(241, 243, 244)"
                stroke="rgb(0, 0, 0)"
                strokeWidth="1.3"
                style={{ pointerEvents: 'none' }}
              />
            </g>
          </g>
          <g style={{ pointerEvents: 'none' }}></g>
          <g style={{ pointerEvents: 'none' }}></g>
        </g>
      </svg>
    </div></div>)
};
export default RounderRec;