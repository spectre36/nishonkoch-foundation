import { useState, useEffect } from "react";
import { homeData } from "../data/homeData";
import "../styles/home.css";

const slides = [
  "https://res.cloudinary.com/seynrxr1/image/upload/v1785840842/484502768_657710246652601_7241348732472307263_n_tkf6bu.jpg",

  "https://res.cloudinary.com/seynrxr1/image/upload/v1785841342/481681581_643656038058022_5957276067271432613_n_ftnp4l.jpg",

  "https://res.cloudinary.com/seynrxr1/image/upload/v1785840842/480526642_639950231761936_4735781091828695169_n_djaidw.jpg",

  "https://res.cloudinary.com/seynrxr1/image/upload/v1785840978/480911120_639960538427572_8682568401396913117_n_by2plt.jpg",

  "https://res.cloudinary.com/seynrxr1/image/upload/v1785858508/484310736_657710369985922_575079127589637331_n_l4uxft.jpg",

  "https://res.cloudinary.com/seynrxr1/image/upload/v1785840842/482272936_664076969349262_4157304727395948899_n_bt5zub.jpg",
];

function Hero() {
  const { title, subtitle } = homeData.hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <a href="/about" className="btn">
          Who We Are
        </a>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;