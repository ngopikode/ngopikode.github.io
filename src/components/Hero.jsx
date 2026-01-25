import React from 'react';
import heroBg from '../../assets/img/20241118_144722.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero section">

      <img src={heroBg} alt="ngopikode creative tech company background" data-aos="fade-in" />

      <div className="container">

        <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-xl-10 col-lg-10">
            <h1 className="display-1 fw-bold mb-4">ngopikode<span>.</span></h1>
            <p className="my-0 mb-3"><strong className="text-bg-danger text-lowercase px-3 py-1 rounded-pill">
              Ngopi Santai, Ngoding Serius, Bikin Solusi!
            </strong></p>
            <p className="lead text-light opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
              kami adalah creative tech company yang hidup dari percikan ide dan secangkir kopi.
            </p>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <i className="bi bi-book"></i>
              <h3><a href="">EdTech & Personal Development</a></h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
              <i className="bi bi-shop"></i>
              <h3><a href="">Digital Solutions for UMKM</a></h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-box">
              <i className="bi bi-cpu"></i>
              <h3><a href="">IoT & AgriTech</a></h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-box">
              <i className="bi bi-code-slash"></i>
              <h3><a href="">Creative Tech Solutions</a></h3>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}