import "../styles/team.css";

const teamData = {
  ceo: {
    name: "Mohammad Fahim",
    role: "Chief Executive Officer",
    image: "https://res.cloudinary.com/seynrxr1/image/upload/v1788718087/WhatsApp_Image_2026-09-06_at_11.30.27_PM_igdlc0_1_s8qvw2.jpg", // Add CEO image URL here
    description:
      "Leading Nishonkoch Foundation with a vision for meaningful community impact and collective action.",
  },

  departments: [
    {
      name: "Project",
      image: "https://res.cloudinary.com/seynrxr1/image/upload/v1788612465/615416490_885189227238034_2482494673145637644_n_efwgde.jpg", // Add Project department image URL here
      description:
        "Turning ideas into meaningful initiatives that serve our communities.",
    },
    {
      name: "Administration",
      image: "https://res.cloudinary.com/seynrxr1/image/upload/v1788612465/614594461_885189347238022_7024949113189626177_n_xtclgq.jpg", // Add Administration department image URL here
      description:
        "Supporting the foundation’s operations and keeping our work organized.",
    },
    {
      name: "Finance",
      image: "https://res.cloudinary.com/seynrxr1/image/upload/v1788612465/614541800_885189380571352_7503071139836156920_n_lvdryi.jpg", // Add Finance department image URL here
      description:
        "Managing financial responsibilities with care and accountability.",
    },
    {
      name: "Media",
      image: "https://res.cloudinary.com/seynrxr1/image/upload/v1788612465/616381220_885189310571359_1521137468617772567_n_du9qsd.jpg", // Add Media department image URL here
      description:
        "Sharing our work and telling stories that inspire action.",
    },
    {
      name: "Public Relations",
      image: "https://res.cloudinary.com/seynrxr1/image/upload/v1788612465/615432534_885189277238029_7709201630401772975_n_oyb9kb.jpg", // Add PR department image URL here
      description:
        "Building connections with communities, partners, and supporters.",
    },
    {
      name: "Research & Development",
      image: "", // Add R&D department image URL here
      description:
        "Exploring ideas and developing solutions for meaningful change.",
    },
  ],
};

function Team() {
  return (
    <main className="team-page">
      {/* Hero */}
      
      {/* CEO */}
      <section className="team-leadership">
        <div className="team-section-heading">
          <span>OUR LEADERSHIP</span>

          <h2>
            The people <span>behind</span> our purpose.
          </h2>

          <p>
            A shared commitment to service, responsibility, and positive
            change.
          </p>
        </div>

        <div className="ceo-card">
          <div className="ceo-image-area">
            {teamData.ceo.image ? (
              <img
                src={teamData.ceo.image}
                alt={teamData.ceo.name}
              />
            ) : (
              <div className="team-placeholder">
                <span>CEO PHOTO</span>
                <small>Image will be added here</small>
              </div>
            )}
          </div>

          <div className="ceo-information">
            <span className="team-label">LEADERSHIP</span>

            <h3>{teamData.ceo.name}</h3>

            <div className="team-divider"></div>

            <p className="ceo-role">{teamData.ceo.role}</p>

            <p className="ceo-description">
              {teamData.ceo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section">
        <div className="team-section-heading">
          <span>OUR DEPARTMENTS</span>

          <h2>
            Different teams. <span>One purpose.</span>
          </h2>

          <p>
            Each department plays a unique role in building a stronger,
            more connected community.
          </p>
        </div>

        <div className="departments-grid">
          {teamData.departments.map((department, index) => (
            <div className="department-card" key={department.name}>
              <div className="department-image-area">
                {department.image ? (
                  <img
                    src={department.image}
                    alt={`${department.name} department`}
                  />
                ) : (
                  <div className="team-placeholder">
                    <span>DEPARTMENT PHOTO</span>
                    <small>Image will be added here</small>
                  </div>
                )}
              </div>

              <div className="department-information">
                <div className="department-top">
                  <span className="team-label">DEPARTMENT</span>

                  <span className="department-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{department.name}</h3>

                <div className="team-divider"></div>

                <p>{department.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Team;