import React, { memo, useState, useCallback, useEffect } from "react";
import { Handle, NodeResizer } from "@xyflow/react";
import Toolbar from "../Bar";
import TextInputOverlay from "./Text";
import debounce from "lodash/debounce";

const CircleNode = ({ id, data, selected }) => {
  const getUniqueKey = (id) => `${id}`;

  console.log("kol e data ", data);
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [bgColor, setBgColor] = useState("#ffffff");
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderColor, setBorderColor] = useState("#ff0071");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [text, setText] = useState(data.label);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [position, setPosition] = useState(data.position);
  const [edges, setEdges] = useState(null);

  const type = "circle";
  useEffect(() => {
    const uniqueKey = getUniqueKey(id);
    const storedData = localStorage.getItem(uniqueKey);
    console.log("awah", storedData);

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Setting values based on stored data or defaulting to provided `data`
      setSize(data.size || parsedData.size);
      setBgColor(data.bgcolor || parsedData.bgColor);
      setBorderWidth(data.borderWidth || parsedData.borderWidth);
      setBorderColor(data.borderColor || parsedData.borderColor);
      setTextColor(data.textColor || parsedData.textColor);
      setFontSize(data.fontSize || parsedData.fontSize);
      setFontFamily(data.fontFamily || parsedData.fontFamily);
      setIsBold(data.isBold || parsedData.isBold);
      setIsItalic(data.isItalic || parsedData.isItalic);
      setIsUnderline(data.isUnderline || parsedData.isUnderline);
      setIsStrikethrough(data.isStrikethrough || parsedData.isStrikethrough);
      setText(data.label || parsedData.text);
      setPosition(data.position || parsedData.position); // Default position if not available

      // Set the handle if it's present
      if (data.edges) {
        setEdges(data.edges); // <-- Save the handle to a state variable
      }
    }
  }, [data, id]);

  useEffect(() => {
    const uniqueKey = getUniqueKey(id);
    const shapeData = {
      size,
      bgColor,
      borderWidth,
      borderColor,
      textColor,
      fontSize,
      fontFamily,
      isBold,
      isItalic,
      isUnderline,
      isStrikethrough,
      text,
      position,
      type,
      edges,
    };
    localStorage.setItem(uniqueKey, JSON.stringify(shapeData));
  }, [
    size,
    bgColor,
    borderWidth,
    borderColor,
    textColor,
    fontSize,
    fontFamily,
    isBold,
    isItalic,
    isUnderline,
    isStrikethrough,
    text,
    id,
    position,
    type,
    edges,
  ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = useCallback(
    debounce((event, { width, height }) => {
      const minSize = 50;
      const newSize = Math.max(width, height);
      setSize((prevSize) => ({
        width: Math.max(newSize, minSize),
        height: Math.max(newSize, minSize),
      }));
    }, 10),
    []
  );
  const handleDoubleClick = () => {
    setIsInputVisible(true);
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleBlur = () => {
    setIsInputVisible(false);
  };
  // Update position in localStorage
  useEffect(() => {
    const uniqueKey = getUniqueKey(id);
    localStorage.setItem(
      uniqueKey,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(uniqueKey)),
        position,
      })
    );
  }, [position, id]);
  return (
    <div style={{ position: "relative", display: "inline-block", zIndex: 1 }}>
      {isEditing && selected && (
        <div style={{ position: "absolute", top: "-50px", left: 0, zIndex: 2 }}>
          <Toolbar
            dimensions={size}
            setDimensions={setSize}
            bgColor={bgColor}
            setBgColor={setBgColor}
            borderWidth={borderWidth}
            setBorderWidth={setBorderWidth}
            borderColor={borderColor}
            setBorderColor={setBorderColor}
            textColor={textColor}
            setTextColor={setTextColor}
            fontSize={fontSize}
            setFontSize={setFontSize}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            isBold={isBold}
            setIsBold={setIsBold}
            isItalic={isItalic}
            setIsItalic={setIsItalic}
            isUnderline={isUnderline}
            setIsUnderline={setIsUnderline}
            isStrikethrough={isStrikethrough}
            setIsStrikethrough={setIsStrikethrough}
          />
        </div>
      )}
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={50}
        minHeight={50}
        onResize={handleResize}
        width={size.width}
        height={size.height}
        handleSize={10}
        handles={{
          topLeft: false,
          topRight: false,
          bottomLeft: false,
          bottomRight: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          pointerEvents: "none",
        }}
      />
      <Handle type="target" position="top" style={{ background: "#555" }} />
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
      <svg
        width={size.width}
        height={size.height}
        viewBox="990 1281 103 100"
        onClick={() => setIsEditing(!isEditing)}
        onDoubleClick={handleDoubleClick}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        <g
          transform="translate(0.5,0.5)"
          style={{ visibility: "visible", cursor: "move" }}
        >
          <path
            d="M 1011 1287 L 1091 1287 Q 1051 1327 1091 1367 L 1011 1367 Q 971 1327 1011 1287 Z"
            fill={bgColor}
            stroke={borderColor}
            strokeMiterlimit="10"
            pointerEvents="all"
          />
        </g>


        {isInputVisible ? (
          <TextInputOverlay
            text={text}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            textColor={textColor}
            fontSize={fontSize}
            fontFamily={fontFamily}
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            isStrikethrough={isStrikethrough}
          />
        ) : (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize={fontSize}
            fill={textColor}
            fontFamily={fontFamily}
            fontWeight={isBold ? "bold" : "normal"}
            fontStyle={isItalic ? "italic" : "normal"}
            textDecoration={`${isUnderline ? "underline" : ""} ${
              isStrikethrough ? "line-through" : ""
            }`}
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
};
export default memo(CircleNode);
