import React from "react";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/imgs/dosa.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
          <label style={{ fontSize: "14px", fontWeight: "bold" }}>
            indiCafe
          </label>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === "/catalog"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/catalog"
              >
                Browse
              </Link>
            </li>

            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className={
                      window.location.pathname === "/profile"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signout">
                    Signout
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === "/cart"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search ..."
                aria-label="Search"
                size="40"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  style={{
                    background: "var(--primary-green)",
                    color: "var(--primary-white)"
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );

  return <>{renderNavbar()}</>;
};

export default Navbar;
