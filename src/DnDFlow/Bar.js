import React, { useState } from 'react';
import './Bar.css'; 

import logo3 from "../barIcon/icon3.png";
import logo5 from "../barIcon/icon5.png";
import logo6 from "../barIcon/icon6.png";
import logo7 from "../barIcon/icon7.png";
import logo8 from "../barIcon/icon8.png";

const Toolbar = ({ 
  bgColor, 
  setBgColor, 
  borderColor, 
  setBorderColor, 
  textColor, 
  setTextColor,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  isBold,
  setIsBold,
  isItalic,
  setIsItalic,
  isUnderline,
  setIsUnderline,
  isStrikethrough,
  setIsStrikethrough
}) => {
  const [showSecondBar, setShowSecondBar] = useState(false);

  const handleToggle = (setter, value) => {
    setter(prev => !prev);
  };

  return (
    <div>
      {/* First Toolbar */}
      <div className="toolbar-container">
        <div className="toolbar-section">
          <label className="toolbar-item">
            <img src={logo3} alt="Background Color" className="logo" height={18}/>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </label>
          
          <label className="toolbar-item">
            <img src={logo5} alt="Border Color" className="logo" height={18}/>
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </label>
          
          <span
            className="toggle-button" 
            onClick={() => setShowSecondBar(prev => !prev)}
          >
            T
          </span>
        </div>
      </div>

      {showSecondBar && (
        <div className="toolbar-container second-toolbar">
          <div className="toolbar-section">
            <label className="toolbar-item">
              <img src={logo6} alt="Text Color" className="logo" />
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </label>
            <label className="toolbar-item">
              <img src={logo7} alt="Font Family" className="logo" />
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
            </label>
            <label className="toolbar-item">
              <img src={logo8} alt="Font Size" className="logo" />
              <input
                type="text"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value) || 16)}
                min="8"
                className="small-input"
              />
            </label>
            <div className="text-styling-icons">
              <span 
                onClick={() => handleToggle(setIsBold, isBold)}
                style={{ fontWeight: isBold ? 'bold' : 'normal' }}
              >
                {isBold ? '🅑' : 'B'}
              </span>
              <span 
                onClick={() => handleToggle(setIsItalic, isItalic)}
                style={{ fontStyle: isItalic ? 'italic' : 'normal' }}
              >
                {isItalic ? '🅘' : 'I'}
              </span>
              <span 
                onClick={() => handleToggle(setIsUnderline, isUnderline)}
                style={{ textDecoration: isUnderline ? 'underline' : 'none' }}
              >
                {isUnderline ? '🅤' : 'U'}
              </span>
              <span 
                onClick={() => handleToggle(setIsStrikethrough, isStrikethrough)}
                style={{ textDecoration: isStrikethrough ? 'line-through' : 'none' }}
              >
                {isStrikethrough ? '🅢' : 'S'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
