import React from 'react';

const TextInputOverlay = ({ 
  text, 
  handleInputChange, 
  handleBlur, 
  textColor, 
  fontSize, 
  fontFamily, 
  isBold, 
  isItalic, 
  isUnderline, 
  isStrikethrough 
}) => (
  <foreignObject
    x={0}
    y={0}
    width="100%"
    height="100%"
    style={{ pointerEvents: 'none' }} 
  >
    <input
      type="text"
      value={text}
      onChange={handleInputChange}
      onBlur={handleBlur}
      autoFocus
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        color: textColor,
        fontSize: `${fontSize}px`,
        fontFamily: fontFamily,
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal',
        textDecoration: `${isUnderline ? 'underline' : ''} ${isStrikethrough ? 'line-through' : ''}`,
        textAlign: 'center',
        outline: 'none',
        resize: 'none',
        boxSizing: 'border-box',
      }}
      placeholder="Enter text here"
    />
  </foreignObject>
);

export default TextInputOverlay;
