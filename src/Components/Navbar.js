import React, { useState } from "react";

export default function Navbar(props) {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#121212";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <i
                className="bi bi-brightness-high-fill"
                style={{ marginRight: "5px", marginTop: "15px" }}
              >
                {" "}
                Dark Mode
              </i>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={isDarkMode}
                onChange={handleToggle}
              />
            </div>
            {/* <label
              style={{ marginTop: "0px" }}
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
