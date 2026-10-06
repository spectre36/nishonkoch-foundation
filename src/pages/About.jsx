import { aboutData } from "../data/aboutData";
import "../styles/about.css";

function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="about-hero"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/seynrxr1/image/upload/v1786360120/488969876_2146027729151296_6918036416223301943_n_uxbzzs_gw3csk.jpg')",
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <h1>{aboutData.title}</h1>
            <p>{aboutData.description}</p>
          </div>
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

      {/* Core Values */}
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

    </>
  );
}

export default About;