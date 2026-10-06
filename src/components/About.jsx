import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { aboutData } from "../data/aboutData";
import "../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>{aboutData.title}</h1>
          <p>{aboutData.description}</p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>{aboutData.story}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container mission-grid">
          <div className="mission-card">
            <h2>Our Mission</h2>
            <p>{aboutData.mission}</p>
          </div>

          <div className="mission-card">
            <h2>Our Vision</h2>
            <p>{aboutData.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>

          <div className="values-grid">
            {aboutData.values.map((value, index) => (
              <div className="value-card" key={index}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Together We Can Make a Difference</h2>
          <p>
            Join Nishonkoch Foundation in creating a brighter, greener, and more
            compassionate future for everyone.
          </p>

          <a href="/volunteer" className="btn">
            Become a Volunteer
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;