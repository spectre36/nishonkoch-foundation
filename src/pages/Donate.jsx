import { useState } from "react";
import "../styles/donate.css";

function Donate() {
  // ==========================================
  // PAYMENT DETAILS
  // ==========================================

  const PAYMENT_DETAILS = {
    bkash: {
      name: "bKash",
      number: "01864051508",

      // Add your bKash Cloudinary URL here later
      qr: "",

      instruction:
        "Send your donation using bKash Send Money to the number above.",
    },

    zelle: {
      name: "Zelle",
      email: "9173022728",
      qr: "https://res.cloudinary.com/seynrxr1/image/upload/v1788411856/zelle_q9dotc.jpg",
      instruction:
        "Send your donation through Zelle using the number above.",
    },

    paypal: {
      name: "PayPal",
      email: "mnb7067@nyu.edu",
      qr: "https://res.cloudinary.com/seynrxr1/image/upload/v1788411852/paypal_adrixd.jpg",
      instruction:
        "Use the email address above when sending your donation.",
    },
  };


  // ==========================================
  // GOOGLE APPS SCRIPT URL
  // ==========================================

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwkDJt9eApUsSCbK9Ajn_CvADhlreSwoeUVYo7sLPGaxD6xTiNuJaiBhj59EfXyMOs/exec";


  // ==========================================
  // FORM STATE
  // ==========================================

  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    amount: "",
    paymentMethod: "bKash",
    transactionId: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  // ==========================================
  // PRESET AMOUNTS
  // ==========================================

  const donationAmounts = [500, 1000, 2500, 5000];


  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // ==========================================
  // SELECT AMOUNT
  // ==========================================

  const selectAmount = (amount) => {
    setFormData({
      ...formData,
      amount: amount.toString(),
    });
  };


  // ==========================================
  // SELECT PAYMENT METHOD
  // ==========================================

  const selectPaymentMethod = (method) => {
    setFormData({
      ...formData,
      paymentMethod: method,
      transactionId: "",
    });
  };


  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check donation amount
    if (!formData.amount || Number(formData.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Check transaction ID
    if (!formData.transactionId.trim()) {
      alert(
        "Please enter your transaction ID after completing your payment."
      );
      return;
    }

    setSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          formType: "Donation",
          ...formData,
          status: "Pending Verification",
        }),
      });

      setSubmitted(true);

      setFormData({
        donorName: "",
        email: "",
        amount: "",
        paymentMethod: "bKash",
        transactionId: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };


  // ==========================================
  // GET PAYMENT INFORMATION
  // ==========================================

  const getPaymentInfo = () => {
    if (formData.paymentMethod === "bKash") {
      return PAYMENT_DETAILS.bkash;
    }

    if (formData.paymentMethod === "Zelle") {
      return PAYMENT_DETAILS.zelle;
    }

    return PAYMENT_DETAILS.paypal;
  };

  const paymentInfo = getPaymentInfo();


  // ==========================================
  // PAGE
  // ==========================================

  return (
    <main className="donate-page">


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="donate-hero">

        <div className="donate-hero-content">

          <span className="donate-tag">
            SUPPORT OUR MISSION
          </span>

          <h1>
            Make a Difference
            <br />
            <span>Today.</span>
          </h1>

          <p>
            Your contribution helps Nishonkoch Foundation support
            communities, respond to humanitarian needs, and create
            meaningful opportunities for people who need them most.
          </p>

          <a
            href="#donation-form"
            className="donate-hero-button"
          >
            Donate Now
          </a>

        </div>

      </section>


      {/* ==========================================
          WHY DONATE
      ========================================== */}

      <section className="why-donate">

        <div className="section-heading">

          <span>
            WHY YOUR SUPPORT MATTERS
          </span>

          <h2>
            Every contribution
            <br />
            can create an impact.
          </h2>

          <p>
            Whether it's a small contribution or a larger donation,
            your support helps us continue our work with communities
            and humanitarian initiatives.
          </p>

        </div>


        <div className="impact-cards">

          <div className="impact-card">

            <div className="impact-number">
              01
            </div>

            <h3>
              Disaster Relief
            </h3>

            <p>
              Support emergency response and relief efforts for
              communities affected by disasters.
            </p>

          </div>


          <div className="impact-card">

            <div className="impact-number">
              02
            </div>

            <h3>
              Education
            </h3>

            <p>
              Help create opportunities for children and young
              people through education-focused initiatives.
            </p>

          </div>


          <div className="impact-card">

            <div className="impact-number">
              03
            </div>

            <h3>
              Community Support
            </h3>

            <p>
              Contribute to projects designed to strengthen
              and support local communities.
            </p>

          </div>

        </div>

      </section>


      {/* ==========================================
          DONATION SECTION
      ========================================== */}

      <section
        className="donation-section"
        id="donation-form"
      >

        <div className="donation-container">


          {/* ==========================================
              DONATION INTRO
          ========================================== */}

          <div className="donation-intro">

            <span className="donate-tag">
              MAKE A CONTRIBUTION
            </span>

            <h2>
              Your support
              <br />
              starts here.
            </h2>

            <p>
              Choose an amount, select your preferred payment method,
              complete the payment, and submit your transaction details.
            </p>

            <div className="donation-note">

              <strong>
                Thank you for supporting Nishonkoch Foundation.
              </strong>

              <span>
                Your contribution helps us continue serving communities
                and carrying out humanitarian initiatives.
              </span>

            </div>

          </div>


          {/* ==========================================
              DONATION CARD
          ========================================== */}

          <div className="donation-card">

            {submitted ? (

              <div className="donation-success">

                <div className="success-icon">
                  ✓
                </div>

                <h2>
                  Donation Submitted
                </h2>

                <p>
                  Your donation information has been received and is
                  pending verification. Thank you for supporting
                  Nishonkoch Foundation.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Make Another Donation
                </button>

              </div>

            ) : (

              <form
                className="donation-form"
                onSubmit={handleSubmit}
              >


                {/* ==========================================
                    STEP 1 — INFORMATION
                ========================================== */}

                <div className="donation-section-title">

                  <span>
                    01
                  </span>

                  <div>

                    <h3>
                      Your Information
                    </h3>

                    <p>
                      Tell us who is making the contribution.
                    </p>

                  </div>

                </div>


                <div className="donation-form-grid">


                  {/* NAME */}

                  <div className="donation-form-group">

                    <label htmlFor="donorName">
                      Full Name 
                    </label>

                    <input
                      type="text"
                      id="donorName"
                      name="donorName"
                      value={formData.donorName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="donation-form-group">

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

                </div>


                {/* ==========================================
                    STEP 2 — AMOUNT
                ========================================== */}

                <div className="donation-section-title">

                  <span>
                    02
                  </span>

                  <div>

                    <h3>
                      Choose an Amount
                    </h3>

                    <p>
                      Every contribution makes a difference.
                    </p>

                  </div>

                </div>


                <div className="amount-options">

                  {donationAmounts.map((amount) => (

                    <button
                      type="button"
                      key={amount}
                      className={
                        formData.amount === amount.toString()
                          ? "amount-button active"
                          : "amount-button"
                      }
                      onClick={() => selectAmount(amount)}
                    >
                      ৳{amount.toLocaleString()}
                    </button>

                  ))}

                </div>


                <div className="donation-form-group custom-amount">

                  <label htmlFor="amount">
                    Custom Amount 
                  </label>

                  <div className="amount-input-wrapper">

                    <span>
                      ৳
                    </span>

                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      min="1"
                      required
                    />

                  </div>

                </div>


                {/* ==========================================
                    STEP 3 — PAYMENT METHOD
                ========================================== */}

                <div className="donation-section-title">

                  <span>
                    03
                  </span>

                  <div>

                    <h3>
                      Payment Method
                    </h3>

                    <p>
                      Select how you would like to donate.
                    </p>

                  </div>

                </div>


                {/* ==========================================
                    PAYMENT BUTTONS
                ========================================== */}

                <div className="payment-methods">


                  {/* bKASH */}

                  <button
                    type="button"
                    className={
                      formData.paymentMethod === "bKash"
                        ? "payment-method active"
                        : "payment-method"
                    }
                    onClick={() =>
                      selectPaymentMethod("bKash")
                    }
                  >

                    <span className="payment-logo bkash-logo">
                      bK
                    </span>

                    <span>

                      <strong>
                        bKash
                      </strong>

                      <small>
                        Bangladesh
                      </small>

                    </span>

                  </button>


                  {/* ZELLE */}

                  <button
                    type="button"
                    className={
                      formData.paymentMethod === "Zelle"
                        ? "payment-method active"
                        : "payment-method"
                    }
                    onClick={() =>
                      selectPaymentMethod("Zelle")
                    }
                  >

                    <span className="payment-logo zelle-logo">
                      Z
                    </span>

                    <span>

                      <strong>
                        Zelle
                      </strong>

                      <small>
                        United States
                      </small>

                    </span>

                  </button>


                  {/* PAYPAL */}

                  <button
                    type="button"
                    className={
                      formData.paymentMethod === "PayPal"
                        ? "payment-method active"
                        : "payment-method"
                    }
                    onClick={() =>
                      selectPaymentMethod("PayPal")
                    }
                  >

                    <span className="payment-logo paypal-logo">
                      P
                    </span>

                    <span>

                      <strong>
                        PayPal
                      </strong>

                      <small>
                        Online payment
                      </small>

                    </span>

                  </button>

                </div>


                {/* ==========================================
                    PAYMENT INSTRUCTIONS
                ========================================== */}

                <div className="payment-instructions">


                  {/* PAYMENT HEADER */}

                  <div className="payment-instruction-header">

                    <h4>
                      {paymentInfo.name} Payment
                    </h4>

                    <span>
                      STEP 1
                    </span>

                  </div>


                  {/* ==========================================
                      BKASH
                  ========================================== */}

                  {formData.paymentMethod === "bKash" && (

                    <div className="payment-method-content">

                      <div className="payment-with-qr">

                        <div className="payment-detail">

                          <p>
                            Send your donation to:
                          </p>

                          <strong className="payment-value">
                            {paymentInfo.number}
                          </strong>

                          <p className="payment-help">
                            {paymentInfo.instruction}
                          </p>

                        </div>


                        {/* QR */}

                        {paymentInfo.qr ? (

                          <div className="payment-qr">

                            <img
                              src={paymentInfo.qr}
                              alt="bKash donation QR code"
                            />

                            <span>
                              Scan to pay
                            </span>

                          </div>

                        ) : (

                          <div className="payment-qr qr-placeholder">

                            <span>
                              QR
                            </span>

                            <small>
                              Coming soon
                            </small>

                          </div>

                        )}

                      </div>


                      {/* TRANSACTION */}

                      <div className="transaction-box">

                        <div className="transaction-box-header">

                          <span>
                            STEP 2
                          </span>

                          <strong>
                            Confirm Your Payment
                          </strong>

                        </div>

                        <p>
                          Enter the Transaction ID you received
                          after completing your payment.
                        </p>

                        <input
                          type="text"
                          id="transactionId"
                          name="transactionId"
                          value={formData.transactionId}
                          onChange={handleChange}
                          placeholder="Transaction ID"
                          required
                        />

                      </div>

                    </div>

                  )}


                  {/* ==========================================
                      ZELLE
                  ========================================== */}

                  {formData.paymentMethod === "Zelle" && (

                    <div className="payment-method-content">

                      <div className="payment-with-qr">

                        <div className="payment-detail">

                          <p>
                            Send your donation to:
                          </p>

                          <strong className="payment-value">
                            {paymentInfo.email}
                          </strong>

                          <p className="payment-help">
                            {paymentInfo.instruction}
                          </p>

                        </div>


                        {/* ZELLE QR */}

                        {paymentInfo.qr && (

                          <div className="payment-qr">

                            <img
                              src={paymentInfo.qr}
                              alt="Zelle donation QR code"
                            />

                            <span>
                              Scan to pay
                            </span>

                          </div>

                        )}

                      </div>


                      {/* TRANSACTION */}

                      <div className="transaction-box">

                        <div className="transaction-box-header">

                          <span>
                            STEP 2
                          </span>

                          <strong>
                            Confirm Your Payment
                          </strong>

                        </div>

                        <p>
                          Enter your Zelle confirmation or
                          transaction ID after completing your payment.
                        </p>

                        <input
                          type="text"
                          id="transactionId"
                          name="transactionId"
                          value={formData.transactionId}
                          onChange={handleChange}
                          placeholder="Transaction / Confirmation ID"
                          required
                        />

                      </div>

                    </div>

                  )}


                  {/* ==========================================
                      PAYPAL
                  ========================================== */}

                  {formData.paymentMethod === "PayPal" && (

                    <div className="payment-method-content">

                      <div className="payment-with-qr">

                        <div className="payment-detail">

                          <p>
                            Send your donation through PayPal to:
                          </p>

                          <strong className="payment-value">
                            {paymentInfo.email}
                          </strong>


                          <a
                            href="https://www.paypal.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paypal-button"
                          >
                            Pay with PayPal
                          </a>


                          <p className="payment-help">
                            {paymentInfo.instruction}
                          </p>

                        </div>


                        {/* PAYPAL QR */}

                        {paymentInfo.qr && (

                          <div className="payment-qr">

                            <img
                              src={paymentInfo.qr}
                              alt="PayPal donation QR code"
                            />

                            <span>
                              Scan to pay
                            </span>

                          </div>

                        )}

                      </div>


                      {/* TRANSACTION */}

                      <div className="transaction-box">

                        <div className="transaction-box-header">

                          <span>
                            STEP 2
                          </span>

                          <strong>
                            Confirm Your Payment
                          </strong>

                        </div>

                        <p>
                          Enter the PayPal transaction ID after
                          completing your payment.
                        </p>

                        <input
                          type="text"
                          id="transactionId"
                          name="transactionId"
                          value={formData.transactionId}
                          onChange={handleChange}
                          placeholder="Transaction ID"
                          required
                        />

                      </div>

                    </div>

                  )}

                </div>


                {/* ==========================================
                    SUBMIT
                ========================================== */}

                <button
                  type="submit"
                  className="donation-submit"
                  disabled={submitting}
                >

                  {submitting
                    ? "Submitting Donation..."
                    : "Submit Donation →"}

                </button>


                <p className="donation-form-note">
                  Your donation will be verified before it is recorded
                  as a confirmed contribution.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Donate;