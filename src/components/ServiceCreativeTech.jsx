import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceCreativeTech() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Kita gunakan inline styles yang memanfaatkan CSS Variables dari main.css kamu
    // Agar tidak perlu bikin file CSS baru, tapi tetap konsisten.
    const styles = {
        pageWrapper: {
            backgroundColor: 'var(--background-color)',
            color: 'var(--default-color)',
            fontFamily: 'var(--default-font)',
            minHeight: '100vh'
        },
        techText: {
            fontFamily: 'var(--code-font)',
            color: 'var(--tech-accent-color)'
        },
        gradientText: {
            background: 'linear-gradient(to right, #ffffff, var(--tech-accent-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
        },
        cardGlass: {
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(5px)',
            borderRadius: '16px'
        },
        btnPrimary: {
            backgroundColor: 'var(--accent-color)',
            color: 'var(--contrast-color)',
            border: 'none',
            fontWeight: 600,
            boxShadow: '0 0 15px rgba(255, 196, 81, 0.3)'
        },
        btnOutline: {
            border: '1px solid var(--tech-accent-color)',
            color: 'var(--tech-accent-color)',
            background: 'transparent',
            fontWeight: 600
        },
        glowIcon: {
            color: 'var(--tech-accent-color)',
            textShadow: '0 0 10px rgba(0, 242, 255, 0.5)'
        }
    };

    return (
        <div style={styles.pageWrapper} className="position-relative overflow-hidden">

            {/* Navbar Custom yang menyatu dengan Header Template */}
            <div className="sticky-top border-bottom border-secondary border-opacity-10"
                 style={{
                     backgroundColor: 'rgba(18, 18, 18, 0.8)',
                     backdropFilter: 'blur(10px)',
                     zIndex: 1020
                 }}>
                <div className="container py-3 d-flex justify-content-between align-items-center">
                    <a href="/#services" className="d-flex align-items-center text-decoration-none group-hover">
                        <i className="bi bi-arrow-left me-2" style={{color: 'var(--accent-color)'}}></i>
                        <span style={{color: 'var(--heading-color)', fontWeight: 500}}>Kembali</span>
                    </a>
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-cpu" style={styles.glowIcon}></i>
                        <span style={{fontFamily: 'var(--code-font)', color: '#fff', fontWeight: 'bold'}}>
                            CREATIVE_TECH
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 position-relative">
                {/* Background Glows (Ambient Light) */}
                <div className="position-absolute top-0 end-0 rounded-circle"
                     style={{
                         width: '300px',
                         height: '300px',
                         background: 'var(--tech-accent-color)',
                         opacity: 0.1,
                         filter: 'blur(100px)'
                     }}></div>
                <div className="position-absolute bottom-0 start-0 rounded-circle"
                     style={{
                         width: '400px',
                         height: '400px',
                         background: 'var(--accent-color)',
                         opacity: 0.05,
                         filter: 'blur(100px)'
                     }}></div>

                <div className="container py-lg-5 position-relative z-2">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div
                                className="d-inline-flex align-items-center px-3 py-1 mb-4 rounded-pill border border-secondary border-opacity-25"
                                style={{background: 'rgba(0, 242, 255, 0.05)'}}>
                                <span style={{...styles.techText, fontSize: '0.85rem'}}>
                                    &lt;System.Ready /&gt;
                                </span>
                            </div>

                            <h1 className="display-4 mb-4 lh-sm"
                                style={{fontFamily: 'var(--heading-font)', fontWeight: 800, color: 'white'}}>
                                Ubah Ide Abstrak <br/>
                                Jadi <span style={styles.gradientText}>Realitas Digital</span>
                            </h1>

                            <p className="lead mb-5" style={{color: '#aaa', maxWidth: '90%'}}>
                                Kami merancang pengalaman digital yang tidak hanya berfungsi, tetapi juga menginspirasi.
                                Sinergi antara <span
                                style={{color: 'var(--accent-color)'}}>kreativitas seni</span> dan <span
                                style={{color: 'var(--tech-accent-color)'}}>ketangguhan kode</span>.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="/#contact" className="btn rounded-pill px-4 py-2" style={styles.btnPrimary}>
                                    Mulai Proyek <i className="bi bi-arrow-right ms-2"></i>
                                </a>
                                <a href="/" className="btn rounded-pill px-4 py-2" style={styles.btnOutline}>
                                    Lihat Portfolio
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="position-relative p-2 rounded-4" style={{
                                background: 'linear-gradient(45deg, var(--tech-accent-color), transparent)',
                                padding: '1px'
                            }}>
                                <div className="rounded-4 overflow-hidden position-relative">
                                    <img src={servicesImg1} alt="Creative Tech" className="img-fluid w-100"
                                         style={{filter: 'brightness(0.8) contrast(1.1)'}}/>
                                    {/* Overlay Gradient */}
                                    <div className="position-absolute inset-0 w-100 h-100" style={{
                                        background: 'linear-gradient(to top, rgba(18,18,18,0.8), transparent)',
                                        top: 0,
                                        left: 0
                                    }}></div>
                                </div>

                                {/* Floating Tech Badge */}
                                <div
                                    className="position-absolute bottom-0 start-0 m-4 p-3 rounded-3 border border-secondary border-opacity-25"
                                    style={{background: 'rgba(18, 18, 18, 0.9)', backdropFilter: 'blur(5px)'}}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-shield-check fs-3"
                                           style={{color: 'var(--accent-color)'}}></i>
                                        <div style={{lineHeight: 1.2}}>
                                            <div style={{color: '#fff', fontWeight: 'bold', fontSize: '14px'}}>High
                                                Performance
                                            </div>
                                            <small style={{
                                                fontFamily: 'var(--code-font)',
                                                color: 'var(--tech-accent-color)',
                                                fontSize: '12px'
                                            }}>100% CLEAN CODE</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid - Menggunakan style .service-item / .icon-box vibes */}
            <section className="py-5" style={{backgroundColor: 'var(--surface-color)'}}>
                <div className="container">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="mb-3" style={{
                            fontFamily: 'var(--code-font)',
                            color: 'var(--accent-color)',
                            fontSize: '16px',
                            letterSpacing: '2px'
                        }}>END-TO-END SOLUTIONS</h2>
                        <h3 className="fw-bold text-white fs-2">Ekosistem Teknologi Lengkap</h3>
                    </div>

                    <div className="row g-4">
                        {[
                            {icon: 'bi-phone', title: 'App Development', desc: 'React, Flutter, & Native.'},
                            {icon: 'bi-palette', title: 'UI/UX Design', desc: 'Desain estetis berbasis riset.'},
                            {icon: 'bi-rocket', title: 'MVP Launch', desc: 'Validasi pasar super cepat.'},
                            {icon: 'bi-hdd-network', title: 'Backend Systems', desc: 'Scalable & Secure Architecture.'},
                            {icon: 'bi-terminal', title: 'Tech Consulting', desc: 'Strategi roadmap digital.'},
                            {icon: 'bi-code-slash', title: 'Code Audit', desc: 'Refactoring & Optimasi.'}
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div className="h-100 p-4 rounded-4 transition-all"
                                     style={{
                                         ...styles.cardGlass,
                                         transition: 'transform 0.3s ease, border-color 0.3s ease'
                                     }}
                                     onMouseEnter={(e) => {
                                         e.currentTarget.style.transform = 'translateY(-10px)';
                                         e.currentTarget.style.borderColor = 'var(--tech-accent-color)';
                                     }}
                                     onMouseLeave={(e) => {
                                         e.currentTarget.style.transform = 'translateY(0)';
                                         e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                     }}
                                >
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center mb-4 rounded-3"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            background: 'rgba(0, 242, 255, 0.1)',
                                            border: '1px solid rgba(0, 242, 255, 0.2)'
                                        }}>
                                        <i className={`bi ${item.icon} fs-3`}
                                           style={{color: 'var(--tech-accent-color)'}}></i>
                                    </div>
                                    <h5 className="fw-bold mb-3 text-white">{item.title}</h5>
                                    <p className="small mb-0" style={{color: '#aaa'}}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Dark Tech Vibe */}
            <section className="py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up">
                            <h3 className="display-6 fw-bold mb-4 text-white">Kenapa Memilih <br/>Pendekatan Kami?</h3>
                            <p className="mb-4 text-secondary">
                                Kami bukan sekadar vendor, kami adalah <span className="text-white">mitra teknis</span>.
                                Tim kami terdiri dari desainer yang berpikir logis dan developer yang memiliki rasa
                                seni.
                            </p>

                            <div className="d-flex flex-column gap-3 mb-5">
                                {[
                                    'Time-to-Market lebih cepat dengan Agile',
                                    'Desain unik yang membedakan brand',
                                    'Skalabilitas sistem (Microservices)',
                                    'Dokumentasi kode lengkap & rapi'
                                ].map((benefit, idx) => (
                                    <div key={idx}
                                         className="d-flex align-items-center p-3 rounded-3 border border-secondary border-opacity-10"
                                         style={{background: 'rgba(255,255,255,0.02)'}}>
                                        <i className="bi bi-check-circle-fill me-3"
                                           style={{color: 'var(--accent-color)'}}></i>
                                        <span className="text-white fw-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-4 position-relative overflow-hidden"
                                 style={{
                                     background: 'linear-gradient(135deg, var(--accent-color), #e6b04a)',
                                     color: 'var(--contrast-color)'
                                 }}>
                                <i className="bi bi-quote position-absolute top-0 start-0 opacity-25"
                                   style={{fontSize: '5rem', transform: 'translate(-10px, -20px)'}}></i>
                                <p className="mb-0 fst-italic fw-semibold position-relative z-1">
                                    "Teknologi terbaik adalah yang tidak terlihat; ia hanya bekerja dan membuat hidup
                                    Anda lebih mudah."
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="zoom-in">
                            <div className="position-relative d-inline-block">
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '300px',
                                    height: '300px',
                                    background: 'var(--tech-accent-color)',
                                    filter: 'blur(120px)',
                                    opacity: 0.2
                                }}></div>
                                <i className="bi bi-braces text-secondary opacity-25 position-absolute top-50 start-50 translate-middle"
                                   style={{fontSize: '20rem'}}></i>
                                <div className="position-relative z-1">
                                    <i className="bi bi-lightbulb-fill" style={{
                                        fontSize: '8rem',
                                        color: 'var(--accent-color)',
                                        filter: 'drop-shadow(0 0 20px rgba(255, 196, 81, 0.5))'
                                    }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}