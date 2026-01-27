import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceCreativeTech from './components/ServiceCreativeTech';
import ServiceEdTech from './components/ServiceEdTech';
import ServiceUMKM from './components/ServiceUMKM';
import ServiceIoT from './components/ServiceIoT';
import Faq from './components/Faq';

// Import libraries
import AOS from 'aos';
import GLightbox from 'glightbox';
import PureCounter from '@srexi/purecounterjs';
import Swiper from 'swiper/bundle';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize GLightbox
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    // Initialize PureCounter
    new PureCounter();
    
    // Initialize Swiper
    const initSwiper = () => {
        document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
          let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
          );
    
          if (swiperElement.classList.contains("swiper-tab")) {
             new Swiper(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        });
      }
      initSwiper();

      // Initialize Isotope
      const initIsotope = () => {
        document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
            let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
            let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
            let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
        
            let iso;
            imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
              iso = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort
              });
            });
        
            isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
              filters.addEventListener('click', function() {
                isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                this.classList.add('filter-active');
                if (iso) {
                    iso.arrange({
                    filter: this.getAttribute('data-filter')
                    });
                }
                AOS.init();
              }, false);
            });
        
          });
      }
      initIsotope();

      // FAQ Toggle Logic
      document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
          faqItem.parentNode.classList.toggle('faq-active');
        });
      });

      // Scroll Top Button Logic
      const scrollTop = document.querySelector('.scroll-top');
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      };
      
      if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }

      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);

      // Preloader Logic
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        const removePreloader = () => {
            preloader.remove();
        };
        window.addEventListener('load', removePreloader);
        // Also remove immediately if already loaded
        if (document.readyState === 'complete') {
            removePreloader();
        }
        // Fallback timeout
        setTimeout(removePreloader, 1000);
      }

      return () => {
        window.removeEventListener('load', toggleScrollTop);
        document.removeEventListener('scroll', toggleScrollTop);
      };

  }, []);

  // Simple routing logic based on window.location.pathname
  const path = window.location.pathname;

  if (path === '/service/creative-tech') {
    return <ServiceCreativeTech />;
  }
  if (path === '/service/edtech') {
    return <ServiceEdTech />;
  }
  if (path === '/service/umkm') {
    return <ServiceUMKM />;
  }
  if (path === '/service/iot') {
    return <ServiceIoT />;
  }

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Features />
        <Services />
        <CallToAction />
        <Faq />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {/* Preloader */}
      <div id="preloader"></div>
    </>
  );
}

export default App;