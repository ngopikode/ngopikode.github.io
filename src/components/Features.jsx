import React from 'react';
import featuresImg from '../../assets/img/services.jpg';

export default function Features() {
    return (
        <section id="features" className="features section">

            <div className="container">

                <div className="row gy-4 align-items-stretch justify-content-between features-item">
                    <div className="col-lg-5 d-flex align-items-center features-img-bg" data-aos="zoom-out"
                         data-aos-delay="100">
                        <img src={featuresImg} className="img-fluid rounded-4 shadow-lg"
                             alt="Sinergi Kode Kreatif, PTP Features - Coding and Solutions" style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                            minHeight: '400px',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center flex-column" data-aos="fade-up">

                        <h3 className="ps-0 ps-lg-3 pt-4 pt-lg-0 mb-4 fw-bold" data-aos="fade-up"
                            data-aos-delay="150">Apa yang Kami Racik di Dapur Digital Kami?</h3>

                        <div className="features-item d-flex ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-mortarboard flex-shrink-0"></i>
                            <div>
                                <h4>EdTech & Personal Development</h4>
                                <p><strong>Bikin Belajar Jadi Lebih Seru.</strong><br/>Dunia berubah cepat, cara kita
                                    belajar juga harus update. Kami membangun platform edukasi kekinian yang bikin
                                    pengembangan diri jadi proses yang menyenangkan, bukan membosankan.</p>
                            </div>
                        </div>

                        <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-shop-window flex-shrink-0"></i>
                            <div>
                                <h4>Digital Solutions for UMKM</h4>
                                <p><strong>Bantu Usaha Lokal Jadi Juara Digital.</strong><br/>Punya usaha keren tapi
                                    bingung soal digital? Tenang, kami bantu. Kami sediakan solusi digital yang pas di
                                    kantong dan mudah dipakai, biar UMKM kamu makin dikenal dan omzet makin lancar.</p>
                            </div>
                        </div>

                        <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-flower1 flex-shrink-0"></i>
                            <div>
                                <h4>IoT & AgriTech</h4>
                                <p><strong>Teknologi Canggih untuk Hasil Lebih Baik.</strong><br/>Bayangkan pertanian
                                    yang dikelola lewat smartphone atau pabrik yang "bisa ngomong". Lewat solusi IoT,
                                    kami bikin pertanian jadi lebih cerdas dan kerja industri jadi jauh lebih efisien.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}