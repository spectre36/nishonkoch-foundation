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
    address: "",
    occupation: "",
    institution: "",
    skills: "",
    reason: "",
    bkashTransactionId: "",
    facebook: "",
    instagram: "",
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
        address: "",
        occupation: "",
        institution: "",
        skills: "",
        reason: "",
        bkashTransactionId: "",
        facebook: "",
        instagram: "",
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
                    Phone Number 
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

              </div>


              {/* Address */}

              <div className="form-group full-width">
                <label htmlFor="address">
                  Where are you based? 
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us your area or address"
                  required
                />
              </div>


              {/* Occupation */}

              <div className="form-group full-width">
                <label htmlFor="occupation">
                  What do you do?
                </label>

                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Student, professional, entrepreneur..."
                />
              </div>


              {/* Institution */}

              <div className="form-group full-width">
                <label htmlFor="institution">
                  Institution
                </label>

                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="School, college, university, workplace..."
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
                  rows="4"
                  placeholder="Photography, writing, organising events, public speaking, design..."
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

                  <p>
                    Theres a 300 Taka registration fee to join Nishonkoch Foundation this includes your official T-shirt and id-card, you need to pay this amount through Bkash send money (01864051508) to confirm your registration.
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


              {/* Social Media */}

              <div className="form-grid">

                {/* Facebook */}

                <div className="form-group">
                  <label htmlFor="facebook">
                    Facebook Profile 
                  </label>

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
                  <label htmlFor="instagram">
                    Instagram Profile
                  </label>

                  <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="Your Instagram profile link"
                  />
                </div>

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