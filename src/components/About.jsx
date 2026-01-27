import React from 'react';
import aboutImg from '../../assets/img/about.jpg';

export default function About() {
    return (
        <section id="about" className="about section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={aboutImg} className="img-fluid"
                             alt="About Sinergi Kode Kreatif, PTP - Ngopi Santai, Ngoding Serius"/>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-1 content">
                        <h3>About ngopikode</h3>
                        <p className="fst-italic">
                            ngopikode, atau sering juga disebut <strong>ngopi kode</strong>, adalah creative tech
                            company yang percaya, ide besar sering lahir pas lagi nongkrong
                            sambil ngopi. Kita bikin solusi digital yang ringan tapi impactful — dari edukasi,
                            pengembangan
                            diri, digitalisasi UMKM, sampai IoT. Filosofi kita simpel: “Ngopi Santai, Ngoding Serius,
                            Bikin
                            Solusi.” Karena masa depan itu bukan cuma dibangun sama kode, tapi juga sama obrolan, ide,
                            dan
                            kolaborasi. 🔥
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i> <span>EdTech & Personal Development: Solusi edukasi dan pengembangan diri berbasis teknologi.</span>
                            </li>
                            <li><i className="bi bi-check2-all"></i>
                                <span>Digital Solutions for UMKM: Digitalisasi untuk UMKM agar lebih kompetitif.</span>
                            </li>
                            <li><i className="bi bi-check2-all"></i> <span>IoT & AgriTech: Inovasi teknologi untuk pertanian dan kehidupan cerdas.</span>
                            </li>
                        </ul>
                        <p>
                            Kami di Sinergi Kode Kreatif, PTP berkomitmen untuk memberikan solusi digital yang tidak
                            hanya
                            fungsional, tetapi juga membawa dampak positif dan berkelanjutan bagi klien kami.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}