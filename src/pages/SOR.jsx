import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function SpiritOfRamadan() {

  // ==========================================
  // CHANGE YOUR STATS HERE
  // ==========================================

  const IFTAR_MEALS = 1500;
  const FAMILIES_REACHED = 2000;


  // ==========================================
  // Animation states
  // ==========================================

  const [iftarCount, setIftarCount] = useState(0);
  const [familyCount, setFamilyCount] = useState(0);
  const [started, setStarted] = useState(false);

  const impactRef = useRef(null);


  // ==========================================
  // Start animation when Impact section appears
  // ==========================================

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


  // ==========================================
  // Animate both statistics
  // ==========================================

  useEffect(() => {
    if (!started) return;

    let startTime;
    const duration = 1800;

    const animate = (currentTime) => {

      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth easing
      const easedProgress =
        1 - Math.pow(1 - progress, 3);


      // Iftar meals counter
      setIftarCount(
        Math.floor(easedProgress * IFTAR_MEALS)
      );


      // Families counter
      setFamilyCount(
        Math.floor(easedProgress * FAMILIES_REACHED)
      );


      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIftarCount(IFTAR_MEALS);
        setFamilyCount(FAMILIES_REACHED);
      }
    };

    requestAnimationFrame(animate);

  }, [started]);


  return (
    <main className="project-page">


      {/* ==========================================
          Introduction
      ========================================== */}

      <section className="project-intro">

        <div className="project-intro-content">

          <h1>Spirit of Ramadan</h1>

          <p>
            Spirit of Ramadan is a community initiative by Nishonkoch
            Foundation dedicated to bringing people together through
            compassion, generosity, and the spirit of giving. Throughout
            Ramadan, the initiative focuses on supporting communities and
            making the blessed month more meaningful through shared meals,
            community engagement, and acts of kindness.
          </p>

        </div>

      </section>


      {/* ==========================================
          Story Section 1
      ========================================== */}

      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786368938/480682337_658181393272153_2044211802609771194_n_lox3wm.jpg"
            alt="Spirit of Ramadan initiative"
          />

        </div>


        <div className="story-content">

          <h2>The Spirit of Giving</h2>

          <p>
            Ramadan is a time of reflection, compassion, and generosity.
            Spirit of Ramadan was created to bring those values into action
            by creating opportunities for people to support one another
            and share the blessings of the month.
          </p>

          <p>
            The initiative brings together volunteers, donors, and members
            of the community with a shared purpose: to spread kindness and
            ensure that the spirit of Ramadan reaches as many people as
            possible.
          </p>

        </div>

      </section>


      {/* ==========================================
          Story Section 2
      ========================================== */}

      <section className="story-section story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786368938/636638075_915886294168327_4183509987573351353_n_dmuj2v.jpg"
            alt="Daily Iftar distribution during Ramadan"
          />

        </div>


        <div className="story-content">

          <h2>Daily Iftar Throughout Ramadan</h2>

          <p>
            One of the central parts of Spirit of Ramadan is our daily
            Iftar initiative. Throughout the month of Ramadan, Nishonkoch
            Foundation works to provide Iftar meals for people in the
            community, creating an opportunity to break the fast together.
          </p>

          <p>
            Each day brings another opportunity to serve. From preparing
            and organizing meals to distributing them before Iftar,
            volunteers work together to make sure the initiative continues
            throughout the month.
          </p>

        </div>

      </section>


      {/* ==========================================
          Story Section 3
      ========================================== */}

      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786368938/652676624_935386428884980_4494305048161462653_n_qomkwt.jpg"
            alt="Spirit of Ramadan main event"
          />

        </div>


        <div className="story-content">

          <h2>The Spirit of Ramadan Event</h2>

          <p>
            Alongside the daily Iftar initiative, the Spirit of Ramadan
            event brings the wider community together for a shared
            experience of generosity, compassion, and connection.
          </p>

          <p>
            The event creates a space where volunteers, supporters, and
            community members can come together, share an Iftar, and
            celebrate the values that make Ramadan a month of compassion
            and togetherness.
          </p>

        </div>

      </section>


      {/* ==========================================
          Impact
      ========================================== */}

      <section
        className="project-impact"
        ref={impactRef}
      >

        <div className="impact-content">

          <h2>Making an Impact</h2>

          <p>
            From daily Iftar distributions to our main Ramadan event,
            every contribution helps turn generosity into meaningful
            action. Through the collective efforts of volunteers,
            supporters, and donors, Spirit of Ramadan aims to reach
            communities throughout the entire month.
          </p>


          <div className="impact-stats">


            {/* Iftar Meals */}

            <div>

              <strong>
                {iftarCount.toLocaleString()}+
              </strong>

              <span>
                Iftar Meals Distributed
              </span>

            </div>


            {/* Families Reached */}

            <div>

              <strong>
                {familyCount.toLocaleString()}+
              </strong>

              <span>
                Families Reached
              </span>

            </div>


          </div>

        </div>

      </section>


      {/* ==========================================
          Final Story
      ========================================== */}

      <section className="story-section final-story story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1786368938/653960343_935377218885901_4311034730482683475_n_g4kp71.jpg"
            alt="Spirit of Ramadan community"
          />

        </div>


        <div className="story-content">

          <h2>Beyond Ramadan</h2>

          <p>
            Spirit of Ramadan is more than a month-long initiative. It is
            a reminder that compassion, generosity, and community should
            continue throughout the year.
          </p>

          <p>
            By bringing people together during Ramadan, we hope to inspire
            a lasting culture of giving and encourage everyone to continue
            supporting their communities long after the month has ended.
          </p>

        </div>

      </section>


    </main>
  );
}

export default SpiritOfRamadan;