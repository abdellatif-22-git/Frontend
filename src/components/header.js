import React from "react";
import "./Header.css";
import logo from "../icons/logo.png";

function Header() {
  return (
    <header className="site-header">
      <nav className="navigation-menu">
        <img src={logo} alt="Diagrammes Logo" className="logo" />
        <div className="logo-container">
          <h1>Diagrammes</h1>
        </div>

        {/*File*/}
        <div className="dropdown">
          <a href="#a">Files</a>
          <div className="dropdown-menu">
            <a href="#a">New File</a>
            <a href="#a">New Folder</a>
            <hr />
            <a href="#a">Save As</a>
          </div>
        </div>

        {/*Edit*/}
        <div className="dropdown">
          <a href="#a">Edit</a>
          <div className="dropdown-menu">
            <a href="#a">
              Undo<span className="shortcut">Ctrl+Z</span>
            </a>
            <a href="#a">
              Redo<span className="shortcut">Ctrl+Y</span>
            </a>
            <hr />
            <a href="#a">
              Cut<span className="shortcut">Ctrl+X</span>
            </a>
            <a href="#a">
              Copy<span className="shortcut">Ctrl+C</span>
            </a>
            <a href="#a">
              Paste<span className="shortcut">Ctrl+V</span>
            </a>
          </div>
        </div>

        {/*select*/}
        <div className="dropdown">
          <a href="#a">Select</a>
          <div className="dropdown-menu">
            <a href="#a">ALL</a>
            <a href="#a">ALL shapes</a>
            <hr />
            <a href="#a">ALL lines</a>
          </div>
        </div>

        {/*view*/}
        <div className="dropdown">
          <a href="#a">View</a>
          <div className="dropdown-menu">
            <a href="#a">Zoom in</a>
            <a href="#a">Zoom out</a>
            <hr />
            <a href="#a">Reset zoom </a>
          </div>
        </div>

        {/*Help*/}
        <div className="dropdown">
          <a href="#a">Help</a>
          <div className="dropdown-menu">
            <a href="#a">num1</a>
            <a href="#a">num2</a>
            <hr />
            <a href="#a">num3 </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
