import { useEffect, useRef, useState } from "react";
import "../styles/projectPage.css";

function Cleanup() {

  return (
    <main className="project-page">

      {/* Introduction */}
      <section className="project-intro">

        <div className="project-intro-content">

          <h1>Cleanup Campaign</h1>

          <p>
            A clean community begins with people who care enough to take
            action. Through our Cleanup Campaign, Nishonkoch Foundation brings
            volunteers together to restore shared spaces, encourage
            responsible waste disposal, and inspire a stronger sense of
            responsibility towards the environment.
          </p>

        </div>

      </section>


      {/* Story Section 1 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/53886936_646281812459236_2045377045420048384_n_wfdn5p.jpg"
            alt="Cleanup Campaign"
          />

        </div>

        <div className="story-content">

          <h2>Starting With Our Surroundings</h2>

          <p>
            The places we share reflect the way we care for our communities.
            Streets, parks, public spaces, and neighbourhoods can quickly
            become neglected when waste is left behind.
          </p>

          <p>
            Our campaign turns that problem into an opportunity for action.
            Volunteers come together to clean public spaces and show that
            keeping our surroundings clean is a responsibility we all share.
          </p>

        </div>

      </section>


      {/* Story Section 2 */}
      <section className="story-section story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/480393676_639960778427548_6051932639054955262_n_zlcoz9.jpg"
            alt="Cleanup volunteers"
          />

        </div>

        <div className="story-content">

          <h2>Many Hands, One Purpose</h2>

          <p>
            A cleanup campaign is more than collecting waste. It is about
            people giving their time for something that benefits everyone.
            Volunteers work side by side, turning an ordinary day of service
            into a shared experience.
          </p>

          <p>
            Working together also reminds us that positive change does not
            always require complicated solutions. Sometimes, it starts with
            simply picking something up and encouraging someone else to do the
            same.
          </p>

        </div>

      </section>


      {/* Story Section 3 */}
      <section className="story-section">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676347/480738546_643639674726325_6681954630871042385_n_kngghn.jpg"
            alt="Community cleanup activity"
          />

        </div>

        <div className="story-content">

          <h2>Changing Habits, Not Just Places</h2>

          <p>
            A cleaner space is important, but lasting change comes from
            changing the habits that make those spaces dirty in the first
            place. Our campaign encourages people to think about where their
            waste goes and how everyday choices affect the environment.
          </p>

          <p>
            By combining community action with environmental awareness, we
            hope to inspire people to carry the same responsibility into their
            daily lives.
          </p>

        </div>

      </section>


      {/* Impact */}
      <section className="project-impact">

        <div className="impact-content">

          <h2>Making a Difference Together</h2>

          <p>
            Every cleaned space creates a more welcoming environment, but the
            real impact lies in the people who take part. Each volunteer
            becomes an example of what can happen when a community chooses to
            care for the place it calls home.
          </p>

        </div>

      </section>


      {/* Final Story */}
      <section className="story-section final-story story-reverse">

        <div className="story-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788676346/481186055_639960721760887_5621205851643261440_n_vumpsr.jpg"
            alt="Cleanup Campaign community"
          />

        </div>

        <div className="story-content">

          <h2>A Cleaner Future Starts With Us</h2>

          <p>
            We cannot change every part of our environment in a single day.
            But every cleaned street, every responsible choice, and every
            person inspired to care brings us one step closer.
          </p>

          <p>
            Our Cleanup Campaign is a reminder that the environment belongs to
            all of us. When we take care of our surroundings together, we help
            build communities that are cleaner, healthier, and more proud of
            the places they call home.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Cleanup;