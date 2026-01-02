export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Transform your body, transform your life</p>
          <h1>
            Your transformation starts with <span>trainedbyvivek</span>
          </h1>
          <p className="subhead">
            Vivek went from fat to toned and muscular. Now he helps 300–400+
            clients build strength, lose fat, and keep it off with structured
            training and nutrition.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">
              Start Your Journey
            </a>
            <a className="btn btn-ghost" href="#transformations">
              See Results
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <span className="stat">300–400+</span>
              <span className="label">Clients transformed</span>
            </div>
            <div>
              <span className="stat">12-week</span>
              <span className="label">Focused programs</span>
            </div>
            <div>
              <span className="stat">1:1</span>
              <span className="label">Coach support</span>
            </div>
          </div>
        </div>
        <div className="hero-media" aria-label="Coach Vivek">
          <img src={`${baseUrl}assets/hero.jpg`} alt="Coach Vivek" />
        </div>
      </div>
    </section>
  );
}
