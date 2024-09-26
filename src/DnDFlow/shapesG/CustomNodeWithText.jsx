import React, { useState } from "react";

const CustomNodeWithText = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(data.label || "");

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    data.label = text;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{ position: "relative", width: "120px", height: "70px" }}
    >
      <svg width="120" height="70"></svg>
      {isEditing ? (
        <textarea
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "100px",
            height: "50px",
            background: "transparent",
            border: "1px solid #000",
            resize: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "100px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {text || "Text"}
        </div>
      )}
    </div>
  );
};
export default CustomNodeWithText;
