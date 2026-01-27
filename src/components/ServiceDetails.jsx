import React, { useEffect } from 'react';

export default function ServiceDetails({ service, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return null;

  return (
    <section id="service-details" className="service-details section">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="service-box">
              <h4>Daftar Layanan</h4>
              <div className="services-list">
                <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="active">
                  <i className="bi bi-arrow-left-circle me-2"></i> Kembali ke Layanan
                </a>
                <div className="mt-3 text-muted small">
                  <p><i className="bi bi-check-circle-fill text-primary me-2"></i>Creative Tech Solutions</p>
                  <p><i className="bi bi-check-circle-fill text-primary me-2"></i>EdTech & Personal Development</p>
                  <p><i className="bi bi-check-circle-fill text-primary me-2"></i>Digital Solutions for UMKM</p>
                  <p><i className="bi bi-check-circle-fill text-primary me-2"></i>IoT & AgriTech</p>
                </div>
              </div>
            </div>

            <div className="help-box d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-headset help-icon"></i>
              <h4>Butuh Bantuan?</h4>
              <p className="d-flex align-items-center mt-2 mb-0">
                <i className="bi bi-telephone me-2"></i> <span>+62 812 3456 7890</span>
              </p>
              <p className="d-flex align-items-center mt-1 mb-0">
                <i className="bi bi-envelope me-2"></i> <span>hello@ngopikode.com</span>
              </p>
            </div>
          </div>

          <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
            <img src={service.image} alt={service.title} className="img-fluid services-img mb-4 rounded shadow" />
            
            <h3>{service.title}</h3>
            <p className="fst-italic text-muted mb-4">
              {service.tagline}
            </p>
            
            <div className="content">
              <p className="lead mb-4">
                {service.description}
              </p>

              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-primary"><i className="bi bi-gear-fill me-2"></i>Fitur Utama</h5>
                      <ul className="list-unstyled mt-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-primary"><i className="bi bi-graph-up-arrow me-2"></i>Manfaat</h5>
                      <ul className="list-unstyled mt-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <i className="bi bi-star-fill text-warning me-2 mt-1"></i>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="mb-3">Mengapa Memilih Layanan Ini?</h4>
              <p>
                {service.whyChooseUs}
              </p>
              
              <div className="mt-4 p-4 bg-light rounded border-start border-4 border-primary">
                <p className="mb-0 fst-italic">
                  "{service.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}