import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function Flooddrive() {

  // ==========================================
  // CHANGE YOUR STATS HERE
  // ==========================================

  const FAMILIES_REACHED = 300;


  // ==========================================
  // Animation states
  // ==========================================

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

      setFamilyCount(
        Math.floor(easedProgress * FAMILIES_REACHED)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setFamilyCount(FAMILIES_REACHED);
      }
    };

    requestAnimationFrame(animate);

  }, [started]);


  return (
    <main className="project-page">

      {/* Introduction */}
      <section className="project-intro">

        <div className="project-intro-content">

          <h1>Flood Relief</h1>

          <p>
            When floods disrupt lives, communities are often left facing
            uncertainty, loss, and difficult days ahead. Through our Flood
            Relief initiative, Nishonkoch Foundation brings volunteers and
            supporters together to provide practical assistance and stand
            beside families as they begin rebuilding their lives.
          </p>

        </div>

      </section>


      {/* Story Section 1 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676348/480860823_643654281391531_3541860546283055735_n_frkzzg.jpg"
            alt="Flood Relief"
          />

        </div>

        <div className="story-content">

          <h2>When Help Matters Most</h2>

          <p>
            Floods can change everything within a matter of days. Homes,
            belongings, livelihoods, and daily routines can all be affected,
            leaving families in urgent need of support.
          </p>

          <p>
            Our response began with the understanding that relief is not only
            about delivering supplies. It is about reaching people when they
            need support the most and reminding them that their community has
            not forgotten them.
          </p>

        </div>

      </section>


      {/* Story Section 2 */}
      <section className="story-section story-reverse">

        <div className="">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/481329522_643653561391603_6977730485821282452_n_bjnnwq.jpg"
            alt="Flood relief volunteers"
          />

        </div>

        <div className="story-content">

          <h2>From Volunteers to Relief</h2>

          <p>
            Behind every relief effort are people willing to give their time,
            energy, and resources. Our volunteers work together to collect,
            organise, and distribute essential support to communities affected
            by flooding.
          </p>

          <p>
            From preparing relief materials to reaching affected families,
            every contribution plays a part in turning community solidarity
            into meaningful action.
          </p>

        </div>

      </section>


      {/* Story Section 3 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676347/480533254_643654304724862_7918472615096085517_n_mwfx7j.jpg"
            alt="Flood affected community"
          />

        </div>

        <div className="story-content">

          <h2>Standing Together</h2>

          <p>
            In difficult moments, the strength of a community becomes clear.
            Volunteers, donors, and local supporters come together with one
            purpose: to make sure affected families receive help when they
            need it.
          </p>

          <p>
            These efforts are about more than immediate relief. They create
            connections between people and show how collective action can help
            communities face even the most challenging circumstances.
          </p>

        </div>

      </section>


      {/* Impact */}
      <section
        className="project-impact"
        ref={impactRef}
      >

        <div className="impact-content">

          <h2>Making an Impact</h2>

          <p>
            Every package delivered and every family reached represents a
            community coming together in a time of need. Through the
            dedication of our volunteers and supporters, we continue working
            to bring meaningful relief to flood-affected communities.
          </p>

          <div className="impact-stats">

            <div>

              <strong>
                {familyCount.toLocaleString()}+
              </strong>

              <span>Families Reached</span>

            </div>

          </div>

        </div>

      </section>


      {/* Final Story */}
      <section className="story-section final-story story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/481043692_643654964724796_3036842015833571649_n_e8oqvo.jpg"
            alt="Flood Relief Community"
          />

        </div>

        <div className="story-content">

          <h2>Helping Communities Rise Again</h2>

          <p>
            Relief may begin with an emergency response, but recovery takes
            time. As families begin putting their lives back together, the
            support of their community can make that journey a little less
            difficult.
          </p>

          <p>
            We hope to continue building a culture where people respond to
            hardship not by standing apart, but by standing together and
            helping communities find their way forward.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Flooddrive;