import React, { useState } from "react";
import "./Node/sidebar.css";

// Shapes
import Rectangle from "./shapes/Rectangle";
import RounderRec from "./shapes/RounderRec";
import Square from "./shapes/Square";
import Circle from "./shapes/Circle";
import Diamond from "./shapes/Diamong";
import Para from "./shapes/Para";
import Hexa from "./shapes/Hexa";
import Cloud from "./shapes/Cloud";
import Star from "./shapes/Star";
import Triangle from "./shapes/Triangle";
import Cylinder from "./shapes/Cylinder";
import Step from "./shapes/Step";
import Trapezoid from "./shapes/Trapezoid";

const Sidebar = () => {
  const [isNodeOpen, setNodeOpen] = useState(false);
  const [isBasicOpen, setBasicOpen] = useState(false);
  const [isAdvancedOpen, setAdvancedOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleNode = () => setNodeOpen(!isNodeOpen);
  const toggleBasic = () => setBasicOpen(!isBasicOpen);
  const toggleAdvanced = () => setAdvancedOpen(!isAdvancedOpen);

  return (
    <aside className="sidebar">
      {/* Group 2: Basic Shapes */}
      <div className="group">
        <h5 onClick={toggleBasic} className="group-header">
          Basic Shapes
        </h5>
        {isBasicOpen && (
          <div className="group-content">
            <Rectangle />
            <RounderRec />
            <Square />
            <Circle />
            <Diamond />
            <Para />
            <Hexa />
          </div>
        )}
      </div>

      {/* Group 3: Advanced Shapes */}
      <div className="group">
        <h5 onClick={toggleAdvanced} className="group-header">
          Advanced Shapes
        </h5>
        {isAdvancedOpen && (
          <div className="group-content">
            <Cloud />
            <Star />
            <Triangle />
            <Cylinder />
            <Step />
            <Trapezoid />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
