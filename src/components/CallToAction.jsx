import React from 'react';
import ctaBg from '../../assets/img/testimonials-bg.jpg';

export default function CallToAction() {
  return (
    <section id="call-to-action" className="call-to-action section">

      <img src={ctaBg} alt="Call To Action Background" />

      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Siap Berkolaborasi untuk Solusi Digital Anda?</h3>
              <p>
                Di Sinergi Kode Kreatif, PTP, kami siap mewujudkan ide-ide besar Anda menjadi solusi digital
                yang impactful. Mari "Ngopi Santai, Ngoding Serius, Bikin Solusi" bersama!
              </p>
              <a className="cta-btn" href="#contact">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}