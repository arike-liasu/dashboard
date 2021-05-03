import React from "react";

const Latest = () => {
  return (
    <div className="latest">
      <section className="latest-item">
        <img src="" alt="HeadPhones" className="lastest__img" />
        <article className="latest__details">
          <p className="latest__text">Sony 1000Xm3</p>
          <p className="latest__date">Sep 12, 2021</p>
        </article>

        <p className="latest__cost">-$ 160</p>
      </section>
      <section className="latest-item">
        <img src="" alt="IPhone 11 Pro" className="lastest__img" />
        <article className="latest__details">
          <p className="latest__text">IPhone 11 Pro</p>
          <p className="latest__date">Feb 16, 2021</p>
        </article>
        <p className="latest__cost">+$ 160</p>
      </section>
      <button className="see-more-btn">See All Activities</button>
    </div>
  );
};

export default Latest;
