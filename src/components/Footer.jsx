import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">ngopikode</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Cemara Street, Cemara Asri, Sampali</p>
                <p>North Sumatra 20371, ID</p>

                <p><em>ngopikode dikenal juga sebagai "ngopi kode"</em></p>

                <p className="mt-3"><strong>Phone:</strong> <span>+62 851-7244-1544</span></p>
                <p><strong>Email:</strong> <span>ngopikode01@gmail.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href=""><i className="bi bi-twitter-x"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/ngopikode/"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/ngopikode"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> Home</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> About us</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> Services</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> Terms of service</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> Creative Tech Solutions</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> EdTech & Personal Development</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> Digital Solutions for UMKM</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#"> IoT & AgriTech</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container text-center">
          <p>© <span>All Rights Reserved</span><strong className="px-1 sitename">SINERGI KODE KREATIF, PTP</strong></p>
          <div className="credits">
            Powered by
            <a href="https://www.ngopikode.my.id/">
              <strong>ngopikode</strong>
              <img src="https://avatars.githubusercontent.com/u/182346406?s=400&u=40c038c350b2df3658b189025cb1c4bb43a85bfa&v=4"
                alt="Sinergi Kode Kreatif, PTP Logo" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}