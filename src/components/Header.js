import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/mindsparklogo.png"; // Adjust the path to your logo image

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="logo-img me-2" />{" "}
          {/* Add your logo here */}
          MindSpark - EduTech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-3" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold custom-hover" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold custom-hover" to="/">
                Progress-Tracking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
