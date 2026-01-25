import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe style={{ border: 0, width: '100%', height: '270px' }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2084.6765633429072!2d98.69340822461838!3d3.6289713578031333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031322fc2108117%3A0x5e19f2d0b8eed322!2sMasjid%20Al-Musannif!5e0!3m2!1sid!2sid!4v1733669019932!5m2!1sid!2sid"
            frameBorder="0" allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Cemara Street, Cemara Asri, Sampali, North Sumatra 20371</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+6285172441544">+62 851-7244-1544</a>
                </p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:ngopikode01@gmail.com">ngopikode01@gmail.com</a>
                </p>
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            <form className="php-email-form" data-aos="fade-up" id="contactForm"
              data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" id="name" className="form-control" placeholder="Your Name"
                    required="" />
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" id="email"
                    placeholder="Your Email"
                    required="" />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" id="message" rows="6"
                    placeholder="Message"
                    required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
  );
}