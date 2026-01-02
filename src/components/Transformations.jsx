import { useMemo } from "react";
import { transformations } from "./data.js";

export default function Transformations() {
  const baseUrl = import.meta.env.BASE_URL;
  const trackItems = useMemo(
    () => [...transformations, ...transformations],
    []
  );

  return (
    <section className="transformations" id="transformations">
      <div className="container section-head">
        <p className="eyebrow">Real results</p>
        <h2>
          300+ lives <span>transformed</span>
        </h2>
        <p className="section-subhead">
          These are real people who trusted the process. Swap the images in
          <code>public/assets</code> anytime.
        </p>
      </div>
      <div className="transform-strip" aria-label="Transformation gallery">
        <div className="transform-track">
          {trackItems.map((item, index) => (
            <article className="transform-card" key={`${item.id}-${index}`}>
              <img
                src={`${baseUrl}assets/${item.image}`}
                alt={item.title}
                loading="lazy"
              />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
