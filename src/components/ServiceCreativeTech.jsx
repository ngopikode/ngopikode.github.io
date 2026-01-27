import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceCreativeTech() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom CSS untuk efek tambahan yang tidak ada di Bootstrap standar
    const customStyles = `
        .text-gradient {
            background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-10px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important;
        }
        .icon-box-modern {
            background: linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(13, 202, 240, 0.1) 100%);
            border-radius: 1rem;
        }
        .blob-bg {
            position: absolute;
            background: radial-gradient(circle, rgba(13,110,253,0.08) 0%, rgba(255,255,255,0) 70%);
            width: 500px;
            height: 500px;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `;

    return (
        <div className="service-detail-page position-relative overflow-hidden">
            <style>{customStyles}</style>

            {/* Navigation Bar - Sticky & Modern */}
            <div className="bg-opacity-75 backdrop-blur border-bottom sticky-top"
                 style={{zIndex: 1020, backdropFilter: 'blur(10px)'}}>
                <div className="container py-3 d-flex justify-content-between align-items-center">
                    <a href="/"
                       className="btn btn-dark rounded-pill btn-sm px-4 fw-bold border hover-lift">
                        <i className="bi bi-arrow-left me-2"></i> Kembali
                    </a>
                    <span className="fw-bold d-flex align-items-center gap-2">
                        <i className="bi bi-cpu text-primary"></i> Creative Tech
                    </span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 position-relative">
                {/* Background Decoration */}
                <div className="position-absolute top-0 end-0 mt-5 me-n5 rounded-circle bg-primary opacity-10"
                     style={{width: '300px', height: '300px', filter: 'blur(80px)'}}></div>
                <div className="position-absolute bottom-0 start-0 mb-n5 ms-n5 rounded-circle bg-info opacity-10"
                     style={{width: '400px', height: '400px', filter: 'blur(80px)'}}></div>

                <div className="container py-lg-5 position-relative z-1">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div
                                className="d-inline-block px-3 py-1 mb-3 rounded-pill bg-primary bg-opacity-10 text-primary fw-bold small border border-primary border-opacity-10">
                                <i className="bi bi-stars me-1"></i> Future Ready Tech
                            </div>
                            <h1 className="display-4 fw-bolder mb-3 lh-sm">
                                Ubah Ide Abstrak <br/>
                                Jadi <span className="text-gradient">Realitas Digital</span>
                            </h1>
                            <p className="lead text-secondary mb-5" style={{maxWidth: '90%'}}>
                                Kami merancang pengalaman digital yang tidak hanya berfungsi, tetapi juga menginspirasi.
                                Sinergi antara kreativitas seni dan ketangguhan kode.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <a href="/#contact"
                                   className="btn btn-primary rounded-pill px-5 py-3 shadow-lg hover-lift fw-bold">
                                    Mulai Proyek <i className="bi bi-arrow-right ms-2"></i>
                                </a>
                                <a href="/" className="btn btn-outline-dark rounded-pill px-4 py-3 fw-bold">
                                    Lihat Portfolio
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="position-relative">
                                <img src={servicesImg1} alt="Creative Tech"
                                     className="img-fluid rounded-5 shadow-lg position-relative z-2"/>
                                {/* Floating decorative card */}
                                <div
                                    className="card border-0 shadow-lg position-absolute bottom-0 start-0 translate-middle-x mb-4 ms-4 p-3 rounded-4 z-3 d-none d-md-block"
                                    data-aos="zoom-in" data-aos-delay="300">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success">
                                            <i className="bi bi-code-slash fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">Clean Code</h6>
                                            <small className="text-muted">High Performance</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-6 bg-light bg-opacity-50">
                <div className="container py-5">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="fw-bold mb-3">Solusi <span className="text-primary">End-to-End</span></h2>
                        <p className="text-muted fs-5">Kami menyediakan ekosistem teknologi lengkap untuk memastikan
                            produk digital Anda siap bersaing.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-phone',
                                title: 'App Development',
                                desc: 'Pengembangan Aplikasi Web & Mobile Kustom dengan teknologi terkini (React, Flutter, Native).',
                                color: 'text-primary'
                            },
                            {
                                icon: 'bi-palette',
                                title: 'UI/UX Design',
                                desc: 'Desain antarmuka yang estetis dengan riset pengalaman pengguna (UX) yang mendalam.',
                                color: 'text-danger'
                            },
                            {
                                icon: 'bi-rocket',
                                title: 'MVP Development',
                                desc: 'Peluncuran produk versi awal (MVP) super cepat untuk validasi pasar dan investor.',
                                color: 'text-success'
                            },
                            {
                                icon: 'bi-hdd-network',
                                title: 'Backend Systems',
                                desc: 'Arsitektur server yang tangguh, aman, dan scalable menangani jutaan request.',
                                color: 'text-info'
                            },
                            {
                                icon: 'bi-chat-dots',
                                title: 'Tech Consulting',
                                desc: 'Konsultasi roadmap digital dan pemilihan teknologi yang tepat untuk bisnis Anda.',
                                color: 'text-warning'
                            },
                            {
                                icon: 'bi-code-square',
                                title: 'Code Audit',
                                desc: 'Refactoring dan optimasi kode yang ada agar lebih cepat, bersih, dan mudah dikelola.',
                                color: 'text-dark'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div
                                    className="card h-100 border-0 shadow-sm hover-lift rounded-4 overflow-hidden">
                                    <div className="card-body p-4">
                                        <div
                                            className={`icon-box-modern d-inline-flex align-items-center justify-content-center mb-4 ${item.color}`}
                                            style={{width: '60px', height: '60px'}}>
                                            <i className={`bi ${item.icon} fs-3`}></i>
                                        </div>
                                        <h5 className="card-title fw-bold mb-3">{item.title}</h5>
                                        <p className="card-text text-secondary">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 position-relative">
                <div className="blob-bg"></div>
                <div className="container py-lg-5">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up">
                            <h3 className="display-6 fw-bold mb-4">Kenapa Memilih <br/>Pendekatan Kami?</h3>
                            <p className="text-secondary mb-4 lead fs-6">
                                Kami bukan sekadar vendor, kami adalah mitra teknis. Tim kami terdiri dari desainer yang
                                berpikir logis dan developer yang memiliki rasa seni.
                            </p>

                            <div className="vstack gap-3 mb-5">
                                {[
                                    'Time-to-Market lebih cepat dengan Agile',
                                    'Desain unik yang membedakan brand Anda',
                                    'Skalabilitas sistem untuk masa depan',
                                    'Dokumentasi kode yang lengkap & rapi'
                                ].map((benefit, idx) => (
                                    <div key={idx}
                                         className="d-flex align-items-center p-3 border shadow-sm rounded-3 transition-all hover-lift">
                                        <div className="flex-shrink-0 me-3 text-primary">
                                            <i className="bi bi-check-circle-fill fs-5"></i>
                                        </div>
                                        <span className="fw-medium text-dark">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="p-4 bg-gradient text-white rounded-4 position-relative overflow-hidden shadow"
                                style={{background: 'linear-gradient(45deg, #0d6efd, #0dcaf0)'}}>
                                <i className="bi bi-quote position-absolute top-0 start-0 opacity-25"
                                   style={{fontSize: '6rem', transform: 'translate(-10px, -30px)'}}></i>
                                <figure className="mb-0 position-relative z-1">
                                    <blockquote className="blockquote mb-0">
                                        <p className="fst-italic fs-6">
                                            "Teknologi terbaik adalah yang tidak terlihat; ia hanya bekerja dan membuat
                                            hidup Anda lebih mudah."
                                        </p>
                                    </blockquote>
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="zoom-in">
                            <div className="position-relative d-inline-block">
                                {/* Abstract Visual Representation using Icons */}
                                <div className="position-relative">
                                    <i className="bi bi-layers text-primary opacity-25" style={{fontSize: '15rem'}}></i>
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <i className="bi bi-lightbulb-fill text-gradient"
                                           style={{fontSize: '8rem'}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}