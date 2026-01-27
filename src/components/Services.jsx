import React from 'react';

export default function Services() {
    return (
        <section id="services" className="services section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Layanan Kami</h2>
                <p>Apa yang Bisa Kami Bantu?</p>
            </div>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-lightbulb"></i>
                            </div>
                            <a href="/service/creative-tech" className="stretched-link">
                                <h3>Creative Tech Solutions</h3>
                            </a>
                            <p>Punya ide gila tapi bingung eksekusinya? Kami siap mengubah konsep abstrakmu jadi produk
                                digital yang nyata, fungsional, dan tentu saja, keren.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-book"></i>
                            </div>
                            <a href="/service/edtech" className="stretched-link">
                                <h3>EdTech & Personal Development</h3>
                            </a>
                            <p>Belajar nggak harus ngebosenin. Kami bangun platform edukasi interaktif yang bikin proses
                                belajar dan pengembangan diri jadi pengalaman yang seru dan nagih.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-shop"></i>
                            </div>
                            <a href="/service/umkm" className="stretched-link">
                                <h3>Digital Solutions for UMKM</h3>
                            </a>
                            <p>Siap bawa bisnismu naik kelas? Dari manajemen stok sampai kasir digital, kami punya tools
                                yang pas buat bikin UMKM kamu makin profesional dan cuan.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-cpu"></i>
                            </div>
                            <a href="/service/iot" className="stretched-link">
                                <h3>IoT & AgriTech</h3>
                            </a>
                            <p>Masa depan itu cerdas. Kami hubungkan perangkat fisik dengan internet untuk pertanian
                                presisi dan otomatisasi industri. Efisien, canggih, dan futuristik.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}