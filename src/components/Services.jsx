import { services } from "./data.js";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container section-head">
        <p className="eyebrow">What I offer</p>
        <h2>
          Services built for <span>results</span>
        </h2>
        <p className="section-subhead">
          Everything you need to lose fat, gain muscle, and stay consistent.
        </p>
      </div>
      <div className="container service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-icon" aria-hidden="true"></div>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
