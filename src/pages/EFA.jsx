import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function EducationForAll() {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const impactRef = useRef(null);

  // Start animation when Impact section enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  // Count from 0 to 1000
  useEffect(() => {
    if (!started) return;

    let startTime;
    const duration = 1800;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth count animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * 1000));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(1000);
      }
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <main className="project-page">

      {/* Introduction */}
      <section className="project-intro">
        <div className="project-intro-content">
          <h1>Education for All</h1>

          <p>
            Education is one of the most powerful tools for creating lasting
            change. Through Education for All, Nishonkoch Foundation works to
            support children and young people by helping create opportunities
            for learning, growth, and a brighter future.
          </p>
        </div>
      </section>


      {/* Story Section 1 */}
      <section className="story-section">
        <div className="story-image">
          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786366659/481085743_648894297534196_8892568384566288704_n_ldh0qc.jpg"
            alt="Education for All"
          />
        </div>

        <div className="story-content">
          <h2>Where It Began</h2>

          <p>
            Every child deserves the opportunity to learn, regardless of their
            circumstances. Education for All began with the belief that access
            to education can open doors, build confidence, and empower
            communities.
          </p>

          <p>
            Our initiative focuses on reaching children and communities where
            educational opportunities may be limited and providing meaningful
            support where it is needed most.
          </p>
        </div>
      </section>


      {/* Story Section 2 */}
      <section className="story-section story-reverse">
        <div className="story-image">
          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786366659/484555212_657707676652858_3949156875739838229_n_dxwmct.jpg"
            alt="Children participating in educational activities"
          />
        </div>

        <div className="story-content">
          <h2>Creating Opportunities</h2>

          <p>
            Education is more than a classroom. It is about giving young
            people the tools, encouragement, and environment they need to
            discover their potential.
          </p>

          <p>
            Through our activities, volunteers and community members come
            together to support learning and encourage children to continue
            pursuing their education.
          </p>
        </div>
      </section>


      {/* Story Section 3 */}
      <section className="story-section">
        <div className="story-image">
          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786366660/622362543_897011789389111_8077856044082297621_n_i1nb7b.jpg"
            alt="Nishonkoch Foundation education initiative"
          />
        </div>

        <div className="story-content">
          <h2>Working Together</h2>

          <p>
            Real change happens when people work together. Our volunteers,
            supporters, and community partners play an important role in
            making Education for All possible.
          </p>

          <p>
            By bringing people together around a shared purpose, we can create
            stronger communities and help make education more accessible to
            those who need it.
          </p>
        </div>
      </section>


      {/* Impact */}
      <section className="project-impact" ref={impactRef}>
        <div className="impact-content">

          <h2>Making an Impact</h2>

          <p>
            Every lesson, every interaction, and every opportunity can make a
            difference. Our goal is not only to provide immediate support, but
            also to inspire a lasting love for learning.
          </p>

          <div className="impact-stats">

            <div>
              <strong>
                {count.toLocaleString()}+
              </strong>
              <span>Students Reached</span>
            </div>

          </div>
        </div>
      </section>


      {/* Final Story */}
      <section className="story-section final-story story-reverse">
        <div className="story-image">
          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786366660/485151790_660550143035278_417960994605807517_n_q54ec4.jpg"
            alt="Education for All community"
          />
        </div>

        <div className="story-content">
          <h2>Looking Ahead</h2>

          <p>
            Education for All is a continuing journey. We believe that by
            investing in education today, we can help create a more capable,
            confident, and compassionate generation tomorrow.
          </p>

          <p>
            Together, we can continue building opportunities and ensuring that
            every child has the chance to learn, grow, and dream.
          </p>
        </div>
      </section>

    </main>
  );
}

export default EducationForAll;