import "../styles/awardsRecognitions.css";

function AwardsRecognitions() {
  const award = {
    title: "Desh Sheba Leadership Award",
    organizers: "Public Speaking Officials (PSO) & H&H Foundation",
    description:
      "The Desh Sheba Leadership Award recognizes distinguished individuals, youth icons, entrepreneurs, and organizations that make meaningful contributions to national life and social development in Bangladesh.",
  };

  const mediaArticles = [
    {
      publication: "The Daily Star",
      title: "Ensuring youth involvement in community development",
      description:
        "A feature highlighting youth involvement in community development and Nishonkoch Foundation's work toward creating positive change.",
      url: "https://www.thedailystar.net/star-youth/news/ensuring-youth-involvement-community-development-1955617",
      type: "FEATURE",
    },
    {
      publication: "The Business Standard",
      title: "Nishonkoch Foundation",
      description:
        "Explore coverage and stories featuring the work and activities of Nishonkoch Foundation.",
      url: "https://www.tbsnews.net/tags/nishonkoch-foundation",
      type: "COVERAGE",
    },
    {
      publication: "BVNews24",
      title: "Nishonkoch Foundation's Community Initiative",
      description:
        "Coverage of Nishonkoch Foundation's humanitarian and community-focused activities.",
      url: "https://www.bvnews24.com/sohor-nogor/news/198025",
      type: "NEWS",
    },
    {
      publication: "BVNews24",
      title: "Nishonkoch Foundation's Humanitarian Work",
      description:
        "News coverage highlighting Nishonkoch Foundation's efforts to support communities.",
      url: "https://www.bvnews24.com/sohor-nogor/news/198417",
      type: "NEWS",
    },
    {
      publication: "Protidiner Bangladesh",
      title: "ব্যস্ত রাজপথে ইফতারের স্বস্তি পৌঁছে দিচ্ছে একদল তরুণ",
      description:
        "A feature covering Nishonkoch Foundation's Ramadan initiative and its efforts to bring iftar to people on busy roads.",
      url: "https://protidinerbangladesh.com/feature/162549/%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%B8%E0%A7%8D%E0%A6%A4-%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%AA%E0%A6%A5%E0%A7%87-%E0%A6%87%E0%A6%AB%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%AA%E0%A7%8C%E0%A6%81%E0%A6%9B%E0%A7%87-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%8F%E0%A6%95%E0%A6%A6%E0%A6%B2-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3",
      type: "FEATURE",
    },
  ];

  return (
    <main className="awards-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="awards-hero">

        <div className="awards-hero-content">

          <span className="awards-tag">
            AWARDS & RECOGNITIONS
          </span>

          <h1>
            Recognizing the
            <br />
            <span>Impact.</span>
          </h1>

          <p>
            Every recognition reflects the dedication of our volunteers,
            partners, and communities who continue to make meaningful
            change possible.
          </p>

          <a
            href="#our-award"
            className="awards-hero-button"
          >
            Explore Our Recognition
          </a>

        </div>

      </section>


      {/* ==========================================
          OUR AWARD
      ========================================== */}

      <section
        className="featured-award"
        id="our-award"
      >

        <div className="awards-section-heading">

          <span>
            OUR RECOGNITION
          </span>

          <h2>
            A recognition of
            <br />
            <span>meaningful service.</span>
          </h2>

          <p>
            We are honored to have our work and commitment to community
            development recognized through the Desh Sheba Leadership Award.
          </p>

        </div>


        <div className="award-card">

          {/* ==========================================
              AWARD IMAGE
          ========================================== */}

          <div className="award-image-area">

            <img
              src="https://res.cloudinary.com/seynrxr1/image/upload/v1788510701/600ac8c4-f247-4c21-bd55-ae0b675ea1ea_fdraqr.jpg"
              alt="Desh Sheba Leadership Award"
            />

          </div>


          {/* ==========================================
              AWARD INFORMATION
          ========================================== */}

          <div className="award-information">

            <span className="award-label">
              FEATURED AWARD
            </span>

            <div className="award-number">
              01
            </div>

            <h3>
              {award.title}
            </h3>

            <div className="award-divider"></div>

            <p className="award-presented">
              Presented by
            </p>

            <strong className="award-organizers">
              {award.organizers}
            </strong>

            <p className="award-description">
              {award.description}
            </p>

            <div className="award-highlight">

              <span className="award-highlight-icon">
                ✦
              </span>

              <p>
                Honoring organizations and individuals making a
                positive impact on society and national development.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          MEDIA INTRO
      ========================================== */}

      <section className="media-section">

        <div className="media-heading">

          <div>

            <span className="awards-tag">
              IN THE MEDIA
            </span>

            <h2>
              Featured in
              <br />
              <span>the news.</span>
            </h2>

          </div>

          <p>
            Our initiatives and community work have been featured by
            various news organizations and publications, helping bring
            greater attention to the causes we support.
          </p>

        </div>


        {/* ==========================================
            MEDIA GRID
        ========================================== */}

        <div className="media-grid">

          {mediaArticles.map((article, index) => (

            <article
              className="media-card"
              key={index}
            >

              <div className="media-card-top">

                <span className="media-type">
                  {article.type}
                </span>

                <span className="media-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              <div className="media-publication">
                {article.publication}
              </div>


              <h3>
                {article.title}
              </h3>


              <p>
                {article.description}
              </p>


              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="media-read-more"
              >
                Read Article
                <span>↗</span>
              </a>

            </article>

          ))}

        </div>

      </section>


      {/* ==========================================
          BOTTOM CTA
      ========================================== */}

      <section className="recognition-cta">

        <div className="recognition-cta-content">

          <span>
            MORE TO COME
          </span>

          <h2>
            The work continues.
          </h2>

          <p>
            Recognition is meaningful, but the communities we serve
            remain at the heart of everything we do.
          </p>

        </div>

      </section>

    </main>
  );
}

export default AwardsRecognitions;