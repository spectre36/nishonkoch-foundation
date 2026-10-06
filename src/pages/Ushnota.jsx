import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function Ushnota() {

  return (
    <main className="project-page">

      {/* Introduction */}
      <section className="project-intro">

        <div className="project-intro-content">

          <h1>Ushnota</h1>

          <p>
            Ushnota is a humanitarian initiative built around one simple
            idea: no one should be left struggling alone in difficult times.
            Through this project, Nishonkoch Foundation works to bring warmth,
            care, and practical support to people and communities facing
            hardship.
          </p>

        </div>

      </section>


      {/* Story Section 1 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676345/46919823_587541988333219_6337513365266497536_n_qbuar4.jpg"
            alt="Ushnota initiative"
          />

        </div>

        <div className="story-content">

          <h2>The Meaning Behind Ushnota</h2>

          <p>
            Ushnota means warmth, but the warmth we hope to create goes beyond
            the physical. It is the feeling of knowing that someone cares,
            especially during moments when circumstances can make people feel
            forgotten.
          </p>

          <p>
            The initiative was created to turn that feeling into action by
            bringing volunteers together to support people who need a helping
            hand.
          </p>

        </div>

      </section>


      {/* Story Section 2 */}
      <section className="story-section story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676347/491612022_2151641805256555_8669363738051799196_n_qcanoe.jpg"
            alt="Ushnota volunteers"
          />

        </div>

        <div className="story-content">

          <h2>Warmth Through Action</h2>

          <p>
            True compassion is measured by what we are willing to do for
            others. Through Ushnota, volunteers come together to prepare and
            provide meaningful support while creating moments of comfort for
            those facing difficult circumstances.
          </p>

          <p>
            Each contribution, whether large or small, becomes part of
            something greater when people choose to work together for the
            wellbeing of others.
          </p>

        </div>

      </section>


      {/* Story Section 3 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676347/480669252_638194248604201_6531656611379418423_n_ltdrhn.jpg"
            alt="Ushnota community support"
          />

        </div>

        <div className="story-content">

          <h2>Compassion Creates Connection</h2>

          <p>
            Ushnota is not only about providing support. It is about creating
            human connections. A conversation, a helping hand, or simply
            showing up can remind someone that they are part of a community
            that cares about them.
          </p>

          <p>
            By encouraging young people to participate in acts of kindness,
            the initiative also helps build a culture where compassion becomes
            something we practice rather than simply talk about.
          </p>

        </div>

      </section>


      {/* Impact */}
      <section className="project-impact">

        <div className="impact-content">

          <h2>Creating Moments of Warmth</h2>

          <p>
            The impact of Ushnota can be found in the moments that may seem
            small but mean a great deal to someone going through hardship.
            Every volunteer, supporter, and act of kindness adds another
            layer to a stronger and more compassionate community.
          </p>

        </div>

      </section>


      {/* Final Story */}
      <section className="story-section final-story story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676348/599753849_864352119321745_7379101852501562767_n_frugrr.jpg"
            alt="Ushnota community"
          />

        </div>

        <div className="story-content">

          <h2>Keeping the Warmth Alive</h2>

          <p>
            Ushnota is a reminder that kindness does not have to be
            complicated. Sometimes, making a difference begins simply with
            noticing that someone needs help and choosing to be there.
          </p>

          <p>
            We hope to carry this spirit forward by inspiring more people to
            look beyond themselves, care for their communities, and become a
            source of warmth for others.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Ushnota;