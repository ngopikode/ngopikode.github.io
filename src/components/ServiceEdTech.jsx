import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceEdTech() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page bg-white">
            {/* Navigation Bar */}
            <div className="bg-white py-3 border-bottom sticky-top" style={{zIndex: 1020}}>
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="/" className="btn btn-outline-primary rounded-pill btn-sm px-3">
                        <i className="bi bi-arrow-left me-2"></i> Kembali
                    </a>
                    <span className="fw-bold text-dark">EdTech & Personal Development</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 bg-light">
                <div className="container py-lg-5">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                            <span className="badge bg-success bg-opacity-10 text-success mb-3 px-3 py-2 rounded-pill">Education Technology</span>
                            <h1 className="display-4 fw-bold mb-3 text-dark">Revolusi Cara Belajar</h1>
                            <p className="lead text-muted mb-4">
                                Pendidikan tidak boleh kaku. Kami menciptakan platform belajar yang interaktif, seru,
                                dan bermakna untuk masa depan yang lebih cerdas.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="/#contact" className="btn btn-success rounded-pill px-4 py-2">Konsultasi
                                    Gratis</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-left">
                            <div className="position-relative d-inline-block">
                                <div
                                    className="position-absolute top-50 start-50 translate-middle bg-success rounded-circle opacity-10"
                                    style={{width: '350px', height: '350px', zIndex: -1}}></div>
                                <i className="bi bi-book-half text-success" style={{fontSize: '12rem'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="fw-bold mb-3">Fitur Unggulan</h2>
                        <p className="text-muted">Teknologi yang mendukung pedagogi modern untuk hasil belajar
                            maksimal.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-laptop',
                                title: 'Custom LMS',
                                desc: 'Learning Management System yang disesuaikan dengan kebutuhan institusi.'
                            },
                            {
                                icon: 'bi-controller',
                                title: 'Gamifikasi',
                                desc: 'Sistem badges, leaderboard, dan rewards untuk motivasi siswa.'
                            },
                            {
                                icon: 'bi-phone-vibrate',
                                title: 'Mobile Learning',
                                desc: 'Akses materi pelajaran kapan saja, di mana saja lewat aplikasi.'
                            },
                            {
                                icon: 'bi-pencil-square',
                                title: 'Online Exams',
                                desc: 'Sistem ujian aman dengan penilaian otomatis dan analisis butir soal.'
                            },
                            {
                                icon: 'bi-bar-chart-line',
                                title: 'Student Analytics',
                                desc: 'Pantau perkembangan siswa dengan data real-time.'
                            },
                            {
                                icon: 'bi-people',
                                title: 'Interactive Class',
                                desc: 'Fitur diskusi dan kolaborasi langsung dalam platform.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div className="card h-100 border border-light shadow-sm hover-shadow transition-all">
                                    <div className="card-body p-4 text-center">
                                        <div
                                            className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-3"
                                            style={{width: '60px', height: '60px'}}>
                                            <i className={`bi ${item.icon} fs-3`}></i>
                                        </div>
                                        <h5 className="card-title fw-bold mb-2">{item.title}</h5>
                                        <p className="card-text text-muted small">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={servicesImg1} alt="EdTech" className="img-fluid rounded-4 opacity-75"/>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h3 className="fw-bold mb-4 text-white">Mengapa EdTech Penting?</h3>
                            <p className="text-white-50 mb-4">
                                Kami memahami bahwa setiap pembelajar itu unik. Solusi kami dirancang untuk
                                memfasilitasi gaya belajar yang beragam dan meningkatkan retensi pengetahuan.
                            </p>

                            <ul className="list-unstyled">
                                {[
                                    'Keterlibatan siswa meningkat hingga 200%',
                                    'Akses pendidikan tanpa batas geografis',
                                    'Efisiensi biaya operasional pendidikan',
                                    'Data akurat untuk evaluasi kurikulum'
                                ].map((benefit, idx) => (
                                    <li key={idx} className="mb-3 d-flex align-items-center">
                                        <i className="bi bi-check2-circle text-success me-3 fs-5"></i>
                                        <span className="fw-light">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 pt-4 border-top border-secondary">
                                <p className="mb-0 fst-italic text-white-50">
                                    "Investasi dalam pengetahuan selalu membayar bunga terbaik. Kami menyediakan
                                    banknya."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}