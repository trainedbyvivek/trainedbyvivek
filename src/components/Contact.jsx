import { useState } from "react";

const FALLBACK_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL || FALLBACK_SCRIPT_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (scriptUrl.includes("YOUR_SCRIPT_ID")) {
      setStatus("error");
      setMessage("Add your Apps Script URL in VITE_APPS_SCRIPT_URL.");
      return;
    }

    setStatus("loading");
    setMessage("Sending your request...");

    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: new FormData(event.currentTarget),
        mode: "no-cors",
      });
      event.currentTarget.reset();
      setStatus("success");
      setMessage("Thanks! Vivek will reach out within 24 hours.");
    } catch (error) {
      setStatus("error");
      setMessage("Unable to send right now. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Ready to start?</p>
          <h2>
            Let’s build your <span>best self</span>
          </h2>
          <p className="section-subhead">
            Fill out the form and Vivek will personally reach out to discuss
            your goals.
          </p>
          <ul className="contact-list">
            <li>Fat loss or muscle gain</li>
            <li>Home or gym-based training</li>
            <li>Flexible plans for busy schedules</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" name="name" placeholder="John Doe" required />
          </label>
          <label>
            Email address
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </label>
          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              required
            />
          </label>
          <label>
            Tell us about your goals (optional)
            <textarea
              name="message"
              rows="4"
              placeholder="I want to lose 10 kg and build muscle..."
            ></textarea>
          </label>
          <button className="btn" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
          {message ? <p className={`form-note ${status}`}>{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
