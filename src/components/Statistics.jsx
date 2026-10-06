import { useEffect, useRef, useState } from "react";
import "../styles/statistics.css";

function Statistics() {
  const statisticsData = [
    {
      number: 20,
      title: "Projects Completed",
      description: "Successful initiatives across different sectors",
    },
    {
      number: 5000,
      title: "Lives Impacted",
      description: "Supporting communities through humanitarian work",
    },
    {
      number: 100,
      title: "Active Volunteers",
      description: "Young leaders working for positive change",
    },
    {
      number: 200,
      title: "Trees Planted",
      description: "Creating a greener and healthier environment",
    },
  ];

  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statistics" ref={sectionRef}>
      <h2>Our Impact</h2>

      <p className="statistics-intro">
        Together, we are making a difference through humanitarian action,
        environmental initiatives, and youth leadership.
      </p>

      <div className="statistics-container">
        {statisticsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>
              {startCounting ? (
                <Counter target={stat.number} />
              ) : (
                0
              )}
              +
            </h3>

            <h4>{stat.title}</h4>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 2000;
    const intervalTime = 30;
    const increment = target / (duration / intervalTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  return count;
}

export default Statistics;