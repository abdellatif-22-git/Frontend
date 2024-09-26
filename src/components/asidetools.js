import React, { useState } from "react";
import "./asidetools.css";
import logo1 from "../icons/icon11.png";
import logo2 from "../icons/icon12.png";
import logo3 from "../icons/icon13.png";
import Sidebar from "../SideBar/Sidebar"; 

const AsideToolbar = () => {
  const [isSidebarVitsible, setSidebarVisible] = useState(false);

  const handleLogo1Click = () => {
    setSidebarVisible(!isSidebarVitsible); 
  };

  return (
    <div className="aside-toolbar">
      <button onClick={handleLogo1Click}>
        <img src={logo1} alt="Diagrammes Logo" className="logo2" />
      </button>
      <button>
        <img src={logo2} alt="Logo" className="logo2" />
      </button>
      <button>
        <img src={logo3} alt="Logo" className="logo2" />
      </button>
      <button>⬛</button>
      <button>A</button>
      <button>A</button>
      <button>📏</button>
      <button>🖍</button>
      <button>⬛</button>
      
      {isSidebarVitsible && <Sidebar />}
    </div>
  );
};

export default AsideToolbar;
