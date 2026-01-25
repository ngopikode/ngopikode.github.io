import React from 'react';

export default function Services() {
  return (
    <section id="services" className="services section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Check our Services</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Creative Tech Solutions</h3>
              </a>
              <ul className="text-start list-group">
                <li className="list-group-item bg-dark text-light">
                  <p>Menciptakan solusi digital inovatif yang ringan namun berdampak besar.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-book"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>EdTech & Personal Development</h3>
              </a>
              <ul className="text-start list-group">
                <li className="list-group-item bg-dark text-light">
                  <p>Pengembangan platform edukasi dan aplikasi untuk peningkatan diri.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-shop"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Digital Solutions for UMKM</h3>
              </a>
              <ul className="text-start list-group">
                <li className="list-group-item bg-dark text-light">
                  <p>Solusi digitalisasi untuk UMKM agar lebih efisien dan kompetitif.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-cpu"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>IoT & AgriTech</h3>
              </a>
              <ul className="text-start list-group">
                <li className="list-group-item bg-dark text-light">
                  <p>Inovasi teknologi IoT untuk pertanian cerdas dan solusi industri.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}