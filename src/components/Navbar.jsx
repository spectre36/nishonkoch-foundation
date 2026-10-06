import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/" className="logo-container">
          <img
            src={logo}
            alt="Nishonkoch Foundation Logo"
            className="logo"
          />

          <span className="foundation-name">
            NISHONKOCH FOUNDATION
          </span>
        </Link>
      </div>

      <ul>
        <li className="dropdown">
          <Link to="/about" className="dropdown-toggle">
            About us ▾
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link to="/about">Who We Are</Link>
            </li>

            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link
            to={{ pathname: "/", hash: "#projects" }}
            className="dropdown-toggle"
          >
            Our Projects ▾
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link to="/projects/education-for-all">
                Education for All
              </Link>
            </li>

            <li>
              <Link to="/projects/spirit-of-ramadan">
                Spirit of Ramadan
              </Link>
            </li>

            <li>
              <Link to="/projects/attonirbhor">
                Attonirbhor
              </Link>
            </li>

            <li>
              <Link to="/projects/tree-plantation">
                Tree Plantation
              </Link>
            </li>

            <li>
              <Link to="/projects/flood-drive">
                Flood Relief
              </Link>
            </li>

            <li>
              <Link to="/projects/ushnota">
                Ushnota
              </Link>
            </li>

            <li>
              <Link to="/projects/clean-up">
                Clean-up Campaign
              </Link>
            </li>

            <li>
              <Link to="/projects/workshop">
                Workshop
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/awards">Awards & Recognitions</Link>
        </li>

        <li>
          <Link
            to={{ pathname: "/", hash: "#join-us" }}
          >
            Join Us
          </Link>
        </li>

        <li>
          <Link to="/donate">Donate</Link>
        </li>

        {/* Partnerships */}
        <li>
          <Link to="/partnerships">Partnerships</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;