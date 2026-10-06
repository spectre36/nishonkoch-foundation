import { Link } from "react-router-dom";
import { homeData } from "../data/homeData";
import "../styles/home.css";

function CTASection() {
  const { title, buttonText } = homeData.cta;

  return (
    <section
      id="join-us"
      className="cta"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/seynrxr1/image/upload/v1785857437/627041072_902466565510300_162624557794726881_n_w0jir1.jpg')",
      }}
    >
      <div className="container">
        <h2>{title}</h2>

        <Link to="/join-us" className="btn">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export default CTASection;