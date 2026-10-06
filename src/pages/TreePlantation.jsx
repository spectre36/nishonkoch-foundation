import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function TreePlantation() {

  // ==========================================
  // CHANGE YOUR STATS HERE
  // ==========================================

  const TREES_PLANTED = 200;


  // ==========================================
  // Animation states
  // ==========================================

  const [treeCount, setTreeCount] = useState(0);
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
  // Count animation
  // ==========================================

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

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setTreeCount(
        Math.floor(easedProgress * TREES_PLANTED)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTreeCount(TREES_PLANTED);
      }
    };

    requestAnimationFrame(animate);

  }, [started]);


  return (
    <main className="project-page">

      {/* Introduction */}
      <section className="project-intro">

        <div className="project-intro-content">

          <h1>Tree Plantation</h1>

          <p>
            A greener future does not begin with grand promises. It begins
            with a single seed, a pair of hands, and the decision to care.
            Through our Tree Plantation initiative, Nishonkoch Foundation
            brings volunteers together to turn empty spaces into living
            reminders of hope, responsibility, and community.
          </p>

        </div>

      </section>


      {/* Story Section 1 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/480424333_639960671760892_7332167558739401205_n_cje4xi.jpg"
            alt="Tree Plantation"
          />

        </div>

        <div className="story-content">

          <h2>A Small Beginning</h2>

          <p>
            Every forest begins somewhere. For us, it begins with people
            willing to step outside, get their hands in the soil, and plant
            something they may not live long enough to see fully grown.
          </p>

          <p>
            Our tree plantation activities were created to turn environmental
            awareness into action. Instead of simply talking about the need
            for greener communities, we chose to put that belief into the
            ground — one tree at a time.
          </p>

        </div>

      </section>


      {/* Story Section 2 */}
      <section className="story-section story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676348/545528302_787043180385973_7758701690030059553_n_qkzdyg.jpg"
            alt="Volunteers planting trees"
          />

        </div>

        <div className="story-content">

          <h2>Hands in the Soil</h2>

          <p>
            Planting a tree may seem like a simple act, but it brings people
            together in a meaningful way. Volunteers share the work, learn
            about the environment, and leave knowing that something living
            has been added to their community.
          </p>

          <p>
            More importantly, these moments help young people see that
            protecting the environment is not someone else's responsibility.
            It is something each of us can contribute to, wherever we are.
          </p>

        </div>

      </section>


      {/* Story Section 3 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676348/751720051_1036417895448499_9000236962761106500_n_oag5cf.jpg"
            alt="Community Tree Plantation"
          />

        </div>

        <div className="story-content">

          <h2>More Than Just Trees</h2>

          <p>
            The impact of this initiative reaches beyond the number of trees
            planted. Each activity creates an opportunity to talk about
            climate, clean air, biodiversity, and the kind of environment we
            want to leave behind.
          </p>

          <p>
            When volunteers plant together, they also plant a sense of
            responsibility. A shared patch of green can become a shared
            commitment to taking better care of the world around us.
          </p>

        </div>

      </section>


      {/* Impact */}
      <section
        className="project-impact"
        ref={impactRef}
      >

        <div className="impact-content">

          <h2>Growing Our Impact</h2>

          <p>
            What starts with one tree can grow into something much larger.
            With every plantation activity, our volunteers help create
            greener surroundings while encouraging others to become part of
            the movement for a healthier environment.
          </p>

          <div className="impact-stats">

            <div>

              <strong>
                {treeCount.toLocaleString()}+
              </strong>

              <span>Trees Planted</span>

            </div>

          </div>

        </div>

      </section>


      {/* Final Story */}
      <section className="story-section final-story story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676348/761627613_1044980637925558_6850185248778922878_n_vpzyaw.jpg"
            alt="Tree Plantation Community"
          />

        </div>

        <div className="story-content">

          <h2>What We Leave Behind</h2>

          <p>
            A tree planted today may provide shade to someone years from now.
            That is what makes this work special. We are not only improving
            the environment we live in today; we are making a contribution to
            the world that others will inherit.
          </p>

          <p>
            Our journey does not end at 200 trees. It continues with every
            volunteer who joins us, every community that chooses to grow
            greener, and every new tree given the chance to take root.
          </p>

        </div>

      </section>

    </main>
  );
}

export default TreePlantation;