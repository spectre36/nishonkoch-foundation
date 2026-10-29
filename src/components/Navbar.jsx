
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" onClick={closeMenu}>
        <img
          src={logo}
          alt="Nishonkoch Foundation Logo"
          className="logo"
        />
        <span className="foundation-name">
          NISHONKOCH FOUNDATION
        </span>
      </Link>

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <ul
        id="main-navigation"
        className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
      >
        <li className={`dropdown ${openDropdown === "about" ? "dropdown-open" : ""}`}>
          <div className="nav-item-row">
            <Link to="/about" onClick={closeMenu}>
              About us
            </Link>
            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle About Us submenu"
              aria-expanded={openDropdown === "about"}
              onClick={() => toggleDropdown("about")}
            >
              <FiChevronDown />
            </button>
          </div>

          <ul className="dropdown-menu">
            <li>
              <Link to="/about" onClick={closeMenu}>Who We Are</Link>
            </li>
            <li>
              <Link to="/team" onClick={closeMenu}>Our Team</Link>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${openDropdown === "projects" ? "dropdown-open" : ""}`}>
          <div className="nav-item-row">
            <Link
              to={{ pathname: "/", hash: "#projects" }}
              onClick={closeMenu}
            >
              Our Projects
            </Link>
            <button
              type="button"
              className="dropdown-toggle"
              aria-label="Toggle Our Projects submenu"
              aria-expanded={openDropdown === "projects"}
              onClick={() => toggleDropdown("projects")}
            >
              <FiChevronDown />
            </button>
          </div>

          <ul className="dropdown-menu">
            <li><Link to="/projects/education-for-all" onClick={closeMenu}>Education for All</Link></li>
            <li><Link to="/projects/spirit-of-ramadan" onClick={closeMenu}>Spirit of Ramadan</Link></li>
            <li><Link to="/projects/attonirbhor" onClick={closeMenu}>Attonirbhor</Link></li>
            <li><Link to="/projects/tree-plantation" onClick={closeMenu}>Tree Plantation</Link></li>
            <li><Link to="/projects/flood-drive" onClick={closeMenu}>Flood Relief</Link></li>
            <li><Link to="/projects/ushnota" onClick={closeMenu}>Ushnota</Link></li>
            <li><Link to="/projects/clean-up" onClick={closeMenu}>Clean-up Campaign</Link></li>
            <li><Link to="/projects/workshop" onClick={closeMenu}>Workshop</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/awards" onClick={closeMenu}>Awards &amp; Recognitions</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "#join-us" }} onClick={closeMenu}>Join Us</Link>
        </li>
        <li>
          <Link to="/donate" onClick={closeMenu}>Donate</Link>
        </li>
        <li>
          <Link to="/partnerships" onClick={closeMenu}>Partnerships</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
