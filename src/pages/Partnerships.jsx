import "../styles/partnership.css";

function Partnership() {
  const partnershipOptions = [
    {
      number: "01",
      title: "Sponsor an Initiative",
      description:
        "Support a specific project, campaign, or humanitarian effort and help us reach more communities.",
    },
    {
      number: "02",
      title: "Collaborate With Us",
      description:
        "Work with Nishonkoch on events, campaigns, workshops, and community-focused initiatives.",
    },
    {
      number: "03",
      title: "Promote Your Cause",
      description:
        "Partner with us to raise awareness around your cause while giving your organization meaningful visibility.",
    },
    {
      number: "04",
      title: "Provide Support",
      description:
        "Contribute resources, services, expertise, or other forms of support to strengthen our work.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Create Social Impact",
      description:
        "Support initiatives that directly benefit communities and contribute to meaningful change.",
    },
    {
      number: "02",
      title: "Build Positive Visibility",
      description:
        "Showcase your organization's commitment to social responsibility through our campaigns and initiatives.",
    },
    {
      number: "03",
      title: "Reach New Audiences",
      description:
        "Connect with communities, volunteers, and young people through our activities and outreach.",
    },
    {
      number: "04",
      title: "Grow Through Collaboration",
      description:
        "Bring together your organization's resources and ideas with our youth-driven community network.",
    },
  ];

  return (
    <main className="partnership-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="partnership-hero">

        <div className="partnership-hero-content">

          <span className="partnership-tag">
            PARTNERSHIPS & COLLABORATION
          </span>

          <h1>
            Good work
            <br />
            <span>grows together.</span>
          </h1>

          <p>
            Meaningful initiatives become stronger when organizations
            come together. We welcome businesses, NGOs, institutions,
            and organizations to support, sponsor, or collaborate with
            us on causes that create positive community impact.
          </p>

          <a
            href="#why-partner"
            className="partnership-hero-button"
          >
            Explore Partnership
          </a>

        </div>

      </section>


      {/* ==========================================
          WHY PARTNER
      ========================================== */}

      <section
        className="why-partner"
        id="why-partner"
      >

        <div className="partnership-section-heading">

          <span>
            WHY PARTNER WITH US
          </span>

          <h2>
            Support a cause.
            <br />
            <span>Strengthen your purpose.</span>
          </h2>

          <p>
            A partnership with Nishonkoch can create meaningful
            community impact while helping organizations strengthen
            their social responsibility, visibility, and outreach.
          </p>

        </div>


        <div className="benefits-grid">

          {benefits.map((benefit) => (

            <div
              className="benefit-card"
              key={benefit.number}
            >

              <span className="benefit-number">
                {benefit.number}
              </span>

              <h3>
                {benefit.title}
              </h3>

              <p>
                {benefit.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ==========================================
          GET IN TOUCH
      ========================================== */}

      <section className="partnership-contact">

        <div className="contact-content">

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Let's work
            <br />
            <span>together.</span>
          </h2>

          <p>
            Interested in sponsoring an initiative or exploring a
            partnership with Nishonkoch Foundation? We'd love to
            hear from you.
          </p>

          <div className="email-box">

            <span>
              FOR PARTNERSHIP INQUIRIES
            </span>

            <span>nishonkochfoundation@gmail.com</span>

          </div>

          <p className="email-note">
            Please email us with your organization name, the type
            of partnership you're interested in, and any ideas
            you would like to discuss.
          </p>

        </div>

      </section>


      {/* ==========================================
          PARTNERS COLLAGE / FINAL CTA
      ========================================== */}

      <section className="partners-collage">

        <div className="collage-image">

          <img
            src="https://res.cloudinary.com/seynrxr1/image/upload/v1788716568/MixCollage-06-Sep-2026-11-39-PM-6966_nstag7.jpg"
            alt="Organizations and NGOs we have collaborated with"
          />

          <div className="collage-overlay">

            <span>
              OUR COLLABORATIONS
            </span>

            <h2>
              Together, we can
              <br />
              <span>do more.</span>
            </h2>

            <p>
              Let's create meaningful impact, together.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Partnership;