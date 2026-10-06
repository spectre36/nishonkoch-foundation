import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function Workshop() {

  return (
    <main className="project-page">

      {/* Introduction */}
      <section className="project-intro">

        <div className="project-intro-content">

          <h1>Workshops</h1>

          <p>
            Knowledge becomes powerful when it can be shared, practiced, and
            passed on to others. Through our workshops, Nishonkoch Foundation
            creates spaces where young people and community members can learn
            new ideas, develop practical skills, and gain the confidence to
            turn what they learn into action.
          </p>

        </div>

      </section>


      {/* Story Section 1 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788679198/480458712_638751368548489_4523694222055733528_n_j1bvgg.jpg"
            alt="Nishonkoch Foundation workshop"
          />

        </div>

        <div className="story-content">

          <h2>Learning Beyond the Classroom</h2>

          <p>
            Learning does not have to be limited to books, classrooms, or
            examinations. Some of the most valuable lessons come from asking
            questions, sharing experiences, and working through real-world
            challenges together.
          </p>

          <p>
            Our workshops are designed to create that kind of environment —
            one where participants can explore ideas freely, learn from others,
            and leave with something useful they can carry into their everyday
            lives.
          </p>

        </div>

      </section>


      {/* Story Section 2 */}
      <section className="story-section story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/481051994_645304704559822_5453962529682244725_n_oesjdz.jpg"
            alt="Workshop participants"
          />

        </div>

        <div className="story-content">

          <h2>Turning Ideas Into Skills</h2>

          <p>
            A good workshop should leave participants with more than notes.
            It should give them the opportunity to think, participate, solve
            problems, and practice what they have learned.
          </p>

          <p>
            Through interactive activities and discussions, our sessions
            encourage participants to move from simply understanding an idea
            to discovering how they can actually use it.
          </p>

        </div>

      </section>


      {/* Story Section 3 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676348/481023715_645304627893163_3067198149252307175_n_wmdzzn.jpg"
            alt="Community workshop activity"
          />

        </div>

        <div className="story-content">

          <h2>Learning From Each Other</h2>

          <p>
            Every participant brings a different perspective to the room.
            Workshops give people the chance to exchange experiences, listen
            to different viewpoints, and discover solutions together.
          </p>

          <p>
            This shared learning helps create stronger connections while
            encouraging participants to become more confident in expressing
            their ideas and contributing to their communities.
          </p>

        </div>

      </section>


      {/* Impact */}
      <section className="project-impact">

        <div className="impact-content">

          <h2>Creating Confident Changemakers</h2>

          <p>
            The real success of a workshop is not measured when the session
            ends. It is seen when participants take what they learned and use
            it to help themselves, support others, or create positive change
            around them.
          </p>

        </div>

      </section>


      {/* Final Story */}
      <section className="story-section final-story story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676347/481513280_647174637706162_8540305846711169658_n_pojh0j.jpg"
            alt="Nishonkoch Foundation workshop community"
          />

        </div>

        <div className="story-content">

          <h2>Knowledge That Moves Forward</h2>

          <p>
            We believe that knowledge should never stop with the person who
            receives it. When someone learns something valuable and shares it
            with another person, the impact continues to grow.
          </p>

          <p>
            Through our workshops, we hope to build a generation that is not
            only willing to learn, but also willing to lead, teach, and use
            their knowledge to make a difference in the world around them.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Workshop;