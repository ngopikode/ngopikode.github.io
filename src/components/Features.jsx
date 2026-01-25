import React from 'react';
import featuresImg from '../../assets/img/services.jpg';

export default function Features() {
  return (
    <section id="features" className="features section">

      <div className="container">

        <div className="row gy-4">
          <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={featuresImg} alt="Sinergi Kode Kreatif, PTP Features - Coding and Solutions" />
          </div>
          <div className="col-lg-6">

            <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-mortarboard flex-shrink-0"></i>
              <div>
                <h4>EdTech & Personal Development</h4>
                <p>Membangun platform edukasi dan solusi pengembangan diri berbasis teknologi inovatif.</p>
              </div>
            </div>

            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-shop-window flex-shrink-0"></i>
              <div>
                <h4>Digital Solutions for UMKM</h4>
                <p>Membantu UMKM bertransformasi digital dengan solusi yang efektif dan terjangkau.</p>
              </div>
            </div>

            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-flower1 flex-shrink-0"></i>
              <div>
                <h4>IoT & AgriTech</h4>
                <p>Mengembangkan solusi Internet of Things untuk pertanian cerdas dan efisiensi
                  industri.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}