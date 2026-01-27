import React from 'react';
import aboutImg from '../../assets/img/about.jpg';

export default function About() {
    return (
        <section id="about" className="about section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">
                    <div className="row gy-4 align-items-center">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="200">
                            <div className="position-relative">
                                <img src={aboutImg} className="img-fluid rounded-4 shadow-lg"
                                     alt="About Sinergi Kode Kreatif, PTP - Ngopi Santai, Ngoding Serius"
                                     style={{transition: 'transform 0.3s ease-in-out'}}
                                     onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                     onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div
                                    className="position-absolute bottom-0 start-0 bg-white p-3 m-3 rounded-3 shadow-sm d-none d-md-block"
                                    style={{maxWidth: '200px'}}>
                                    <p className="mb-0 small fw-bold text-primary">"Ngopi Santai, Ngoding Serius"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-1 content">
                            <h3>Kenalan sama ngopikode</h3>
                            <p className="fst-italic">
                                ngopikode, atau sering juga disebut <strong>ngopi kode</strong>, adalah creative tech
                                company yang percaya kalau ide besar itu sering lahir pas lagi nongkrong
                                sambil ngopi. Kita bikin solusi digital yang ringan tapi <em>impactful</em> — dari
                                edukasi,
                                pengembangan diri, digitalisasi UMKM, sampai IoT.
                            </p>
                            <p>
                                Filosofi kita simpel: <strong>“Ngopi Santai, Ngoding Serius, Bikin
                                Solusi.”</strong> Karena
                                masa depan itu bukan cuma dibangun sama kode, tapi juga sama obrolan, ide, dan
                                kolaborasi.
                                🔥
                            </p>
                            <ul>
                                <li><i className="bi bi-check2-all"></i>
                                    <span><strong>EdTech & Personal Development:</strong> Bikin belajar jadi lebih seru dan pengembangan diri jadi asik.</span>
                                </li>
                                <li><i className="bi bi-check2-all"></i>
                                    <span><strong>Digital Solutions for UMKM:</strong> Bantu usaha lokal jadi juara digital dan makin dikenal.</span>
                                </li>
                                <li><i className="bi bi-check2-all"></i> <span><strong>IoT & AgriTech:</strong> Teknologi canggih buat pertanian cerdas dan industri yang efisien.</span>
                                </li>
                            </ul>
                            <p>
                                Di Sinergi Kode Kreatif, PTP, kami nggak cuma sekadar coding. Kami meracik solusi
                                digital
                                yang nggak cuma jalan, tapi juga bawa dampak positif. Yuk, ngopi bareng dan wujudkan
                                idemu!
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}