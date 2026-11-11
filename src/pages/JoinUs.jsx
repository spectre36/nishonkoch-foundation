
import { useState } from "react";
import "../styles/joinUs.css";

function JoinUs() {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx_5ZbeDpg9pT04Xtj39hH4FzXM-IBCk_ZM3i-OvusjCHXNlInDnOD3h2asB9cV4RMl/exec";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    bloodGroup: "",
    tShirtSize: "",
    address: "",
    occupation: "",
    institution: "",
    skills: "",
    organizationExperience: "",
    oneHourImpact: "",
    reason: "",
    bkashTransactionId: "",
    facebook: "",
    instagram: "",
    reference: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        bloodGroup: "",
        tShirtSize: "",
        address: "",
        occupation: "",
        institution: "",
        skills: "",
        organizationExperience: "",
        oneHourImpact: "",
        reason: "",
        bkashTransactionId: "",
        facebook: "",
        instagram: "",
        reference: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <main className="join-page">
      <section className="membership-section">
        <div className="membership-card">

          <div className="membership-header">
            <span className="membership-tag">
              JOIN THE TEAM
            </span>

            <h1>Membership Application</h1>

            <p>
              Want to be part of something meaningful?
              Tell us a little about yourself and let's make
              a difference together.
            </p>
          </div>

          {submitted ? (
            <div className="success-message">

              <div className="success-icon">
                ✓
              </div>

              <h2>You're all set!</h2>

              <p>
                Thanks for applying to join Nishonkoch Foundation.
                We've received your application and our team will
                take a look at it soon.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Application
              </button>

            </div>
          ) : (

            <form
              className="membership-form"
              onSubmit={handleSubmit}
            >

              {/* Personal Information */}

              <div className="form-section-title">
                <span>01</span>

                <div>
                  <h2>Tell us about yourself</h2>
                  <p>The basics first — nothing complicated.</p>
                </div>
              </div>


              <div className="form-grid">

                {/* Full Name */}

                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>


                {/* Email */}

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>


                {/* Phone */}

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number (Preferably Whatsapp)
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    required
                  />
                </div>


                {/* Date of Birth */}

                <div className="form-group">
                  <label htmlFor="dateOfBirth">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Blood Group */}

                <div className="form-group">
                  <label htmlFor="bloodGroup">Blood Group</label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>e.g. O+</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                {/* T-Shirt Size */}

                <div className="form-group">
                  <label htmlFor="tShirtSize">T-Shirt Size</label>
                  <select
                    id="tShirtSize"
                    name="tShirtSize"
                    value={formData.tShirtSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>e.g. M</option>
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                {/* Facebook */}

                <div className="form-group">
                  <label htmlFor="facebook">Facebook Profile</label>
                  <input
                    type="url"
                    id="facebook"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    placeholder="Your Facebook profile link"
                    required
                  />
                </div>

                {/* Instagram */}

                <div className="form-group">
                  <label htmlFor="instagram">Instagram Profile</label>
                  <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="Your Instagram profile link"
                  />
                </div>

                {/* Reference */}

                <div className="form-group">
                  <label htmlFor="reference">Reference</label>
                  <input
                    type="text"
                    id="reference"
                    name="reference"
                    value={formData.reference}
                    onChange={handleChange}
                    placeholder="Who referred you, Where did you find us?"
                  />
                </div>

              </div>


              {/* Address */}

              <div className="form-group full-width">
                <label htmlFor="address">
                  Address
                </label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your area or address"
                  required
                />
              </div>


              {/* Occupation */}

              <div className="form-group full-width">
                <label htmlFor="occupation">
                  Institution
                </label>

                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="School, College, University, Workplace..."
                />
              </div>


              {/* Institution */}

              <div className="form-group full-width">
                <label htmlFor="institution">
                  Current Level of Education
                </label>

                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="SSC/HSC, O/A Levels"
                />
              </div>


              {/* About You */}

              <div className="form-section-title second-section">
                <span>02</span>

                <div>
                  <h2>Let's get to know you</h2>
                  <p>There are no wrong answers here.</p>
                </div>
              </div>


              {/* Skills */}

              <div className="form-group full-width">
                <label htmlFor="skills">
                  What are you good at?
                </label>

                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows="1"
                  placeholder="Photography, writing, organising events, public speaking, design..."
                />
              </div>


              {/* Experience with Other Organizations */}

              <div className="form-group full-width">
                <label htmlFor="organizationExperience">
                  Experience of Working with Any Other Organization
                </label>
                <textarea
                  id="organizationExperience"
                  name="organizationExperience"
                  value={formData.organizationExperience}
                  onChange={handleChange}
                  rows="1"
                  placeholder="Tell us about any organization you've worked or volunteered with..."
                />
              </div>

              {/* One-Hour Impact Question */}

              <div className="form-group full-width">
                <label htmlFor="oneHourImpact">
                  If you had only one hour left to make a positive impact on the world, what would you do and why?
                </label>
                <textarea
                  id="oneHourImpact"
                  name="oneHourImpact"
                  value={formData.oneHourImpact}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Share what you would do and why..."
                  required
                />
              </div>

              {/* Reason */}

              <div className="form-group full-width">
                <label htmlFor="reason">
                  Why do you want to join us?
                </label>

                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us what made you interested in Nishonkoch..."
                  required
                />
              </div>


              {/* Verification */}

              <div className="form-section-title second-section">
                <span>03</span>

                <div>
                  <h2>Almost there!</h2>

                  <p className="registration-description">
                    There's a <strong>300 Taka registration fee</strong> to join
                    Nishonkoch Foundation. This includes your official
                    <strong> T-shirt and ID card</strong>. You need to pay this
                    amount through <strong>bKash Send Money</strong>
                    (<strong>01864051508</strong>) to confirm your registration.
                  </p>
                </div>
              </div>


              {/* bKash Transaction ID */}

              <div className="form-group full-width">
                <label htmlFor="bkashTransactionId">
                  bKash Transaction ID
                </label>

                <input
                  type="text"
                  id="bkashTransactionId"
                  name="bkashTransactionId"
                  value={formData.bkashTransactionId}
                  onChange={handleChange}
                  placeholder="Enter your bKash transaction ID"
                  required
                />

                <small>
                  Please enter the transaction ID from your membership payment.
                </small>
              </div>


              {/* Submit Button */}

              <button
                type="submit"
                className="membership-submit"
                disabled={submitting}
              >
                {submitting
                  ? "Sending your application..."
                  : "Submit My Application →"}
              </button>


              {/* Form Note */}

              <p className="form-note">
                By submitting this application, you confirm that the
                information you've provided is accurate.
              </p>

            </form>

          )}

        </div>
      </section>
    </main>
  );
}

export default JoinUs;
