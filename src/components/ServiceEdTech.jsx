import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceEdTech() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Style Configuration (Strictly Dark Mode based on main.css)
    const styles = {
        pageWrapper: {
            backgroundColor: 'var(--background-color)',
            color: 'var(--default-color)',
            fontFamily: 'var(--default-font)',
            minHeight: '100vh'
        },
        codeFont: {
            fontFamily: 'var(--code-font)'
        },
        gradientText: {
            background: 'linear-gradient(to right, #fff, var(--accent-color))', // White to Amber
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
            backgroundColor: 'var(--accent-color)', // Amber
            color: 'var(--contrast-color)', // Dark Text
            border: 'none',
            fontWeight: 600,
            boxShadow: '0 0 20px rgba(255, 196, 81, 0.4)'
        },
        btnOutline: {
            border: '1px solid var(--accent-color)',
            color: 'var(--accent-color)',
            background: 'transparent',
            fontWeight: 600
        },
        iconBox: {
            background: 'linear-gradient(135deg, rgba(255, 196, 81, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
            border: '1px solid rgba(255, 196, 81, 0.2)',
            width: '60px',
            height: '60px',
            borderRadius: '12px'
        }
    };

    return (
        <div style={styles.pageWrapper} className="position-relative overflow-hidden">

            {/* Navbar Custom */}
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
                        <i className="bi bi-mortarboard-fill" style={{color: 'var(--accent-color)'}}></i>
                        <span style={{...styles.codeFont, color: '#fff', fontWeight: 'bold'}}>
                            ED_TECH<span style={{color: 'var(--accent-color)'}}>.JS</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 position-relative">
                {/* Background Glows */}
                <div className="position-absolute top-0 end-0 rounded-circle"
                     style={{
                         width: '400px',
                         height: '400px',
                         background: 'var(--accent-color)',
                         opacity: 0.08,
                         filter: 'blur(120px)'
                     }}></div>
                <div className="position-absolute bottom-0 start-0 rounded-circle"
                     style={{
                         width: '300px',
                         height: '300px',
                         background: 'var(--tech-accent-color)',
                         opacity: 0.05,
                         filter: 'blur(100px)'
                     }}></div>

                {/* Floating Icons Background */}
                <div className="position-absolute top-50 start-0 translate-middle-y opacity-25 d-none d-lg-block"
                     style={{left: '5%'}}>
                    <i className="bi bi-puzzle text-secondary" style={{fontSize: '8rem', opacity: 0.1}}></i>
                </div>

                <div className="container py-lg-5 position-relative z-2">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                            <div
                                className="d-inline-flex align-items-center px-3 py-1 mb-4 rounded-pill border border-warning border-opacity-25"
                                style={{background: 'rgba(255, 196, 81, 0.05)'}}>
                                <i className="bi bi-controller me-2" style={{color: 'var(--accent-color)'}}></i>
                                <span style={{...styles.codeFont, fontSize: '0.85rem', color: 'var(--accent-color)'}}>
                                    Gamified Learning Systems
                                </span>
                            </div>

                            <h1 className="display-4 mb-4 lh-sm"
                                style={{fontFamily: 'var(--heading-font)', fontWeight: 800, color: 'white'}}>
                                Revolusi <br/>
                                <span style={styles.gradientText}>Cara Belajar</span>
                            </h1>

                            <p className="lead mb-5" style={{color: '#aaa', maxWidth: '90%'}}>
                                Pendidikan tidak boleh kaku. Kami menciptakan platform belajar yang <span
                                className="text-white">interaktif</span>, <span
                                className="text-white">seru (gamified)</span>, dan berbasis data untuk masa depan yang
                                lebih cerdas.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="/#contact" className="btn rounded-pill px-4 py-2 hover-lift"
                                   style={styles.btnPrimary}>
                                    Konsultasi Gratis
                                </a>
                                <a href="/" className="btn rounded-pill px-4 py-2" style={styles.btnOutline}>
                                    Demo Platform
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                            <div className="position-relative p-2 rounded-4" style={{
                                background: 'linear-gradient(135deg, var(--accent-color), transparent)',
                                padding: '1px'
                            }}>
                                <div className="rounded-4 overflow-hidden position-relative">
                                    <img src={servicesImg1} alt="EdTech" className="img-fluid w-100"
                                         style={{filter: 'brightness(0.7) contrast(1.2)'}}/>
                                    {/* Glass Overlay */}
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4"
                                         style={{background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'}}>
                                    </div>
                                </div>

                                {/* Floating Achievement Badge */}
                                <div
                                    className="position-absolute top-0 end-0 m-4 p-3 rounded-3 border border-secondary border-opacity-25 animate-float"
                                    style={{
                                        background: 'rgba(18, 18, 18, 0.9)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                    }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-warning bg-opacity-25 p-2 rounded-circle text-warning">
                                            <i className="bi bi-trophy-fill fs-4"></i>
                                        </div>
                                        <div style={{lineHeight: 1.2}}>
                                            <div style={{
                                                color: 'var(--accent-color)',
                                                fontWeight: 'bold',
                                                fontSize: '14px'
                                            }}>Level Up!
                                            </div>
                                            <small style={{...styles.codeFont, color: '#aaa', fontSize: '11px'}}>ENGAGEMENT
                                                +200%</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-5" style={{backgroundColor: 'var(--surface-color)'}}>
                <div className="container">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="mb-3" style={{
                            ...styles.codeFont,
                            color: 'var(--accent-color)',
                            fontSize: '16px',
                            letterSpacing: '2px'
                        }}>// NEXT_GEN_FEATURES</h2>
                        <h3 className="fw-bold text-white fs-2">Teknologi Pedagogi Modern</h3>
                    </div>

                    <div className="row g-4">
                        {[
                            {icon: 'bi-laptop', title: 'Custom LMS', desc: 'Learning Management System yang adaptif.'},
                            {icon: 'bi-joystick', title: 'Gamifikasi', desc: 'Badges, leaderboard, & XP systems.'},
                            {
                                icon: 'bi-phone',
                                title: 'Mobile Learning',
                                desc: 'Akses materi via Android & iOS Native.'
                            },
                            {
                                icon: 'bi-shield-lock',
                                title: 'Secure Exams',
                                desc: 'Sistem ujian aman dengan AI proctoring.'
                            },
                            {
                                icon: 'bi-graph-up-arrow',
                                title: 'Student Analytics',
                                desc: 'Data progress siswa real-time.'
                            },
                            {
                                icon: 'bi-people',
                                title: 'Interactive Class',
                                desc: 'Live streaming & whiteboard kolaboratif.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div className="h-100 p-4 rounded-4"
                                     style={{
                                         ...styles.cardGlass,
                                         transition: 'all 0.3s ease'
                                     }}
                                     onMouseEnter={(e) => {
                                         e.currentTarget.style.transform = 'translateY(-10px)';
                                         e.currentTarget.style.borderColor = 'var(--accent-color)';
                                     }}
                                     onMouseLeave={(e) => {
                                         e.currentTarget.style.transform = 'translateY(0)';
                                         e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                     }}
                                >
                                    <div className="d-flex align-items-center justify-content-center mb-4"
                                         style={styles.iconBox}>
                                        <i className={`bi ${item.icon} fs-3`}
                                           style={{color: 'var(--accent-color)'}}></i>
                                    </div>
                                    <h5 className="fw-bold mb-2 text-white">{item.title}</h5>
                                    <p className="small mb-0" style={{color: '#888'}}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 position-relative overflow-hidden">
                {/* Tech Grid Background */}
                <div className="position-absolute w-100 h-100 top-0 start-0 opacity-10"
                     style={{
                         backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                         backgroundSize: '40px 40px'
                     }}></div>

                <div className="container position-relative z-1 py-4">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h3 className="display-6 fw-bold mb-4 text-white">Why EdTech?</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Kami memahami bahwa setiap pembelajar itu unik. Solusi kami dirancang untuk
                                memfasilitasi gaya belajar yang beragam.
                            </p>

                            <div className="vstack gap-3">
                                {[
                                    'Keterlibatan siswa meningkat hingga 200%',
                                    'Akses pendidikan tanpa batas geografis',
                                    'Efisiensi biaya operasional pendidikan',
                                    'Data akurat untuk evaluasi kurikulum'
                                ].map((benefit, idx) => (
                                    <div key={idx} className="d-flex align-items-center">
                                        <i className="bi bi-check-lg me-3 fs-5"
                                           style={{color: 'var(--tech-accent-color)'}}></i>
                                        <span className="text-white-50">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 text-center" data-aos="zoom-in">
                            <div className="p-5 rounded-circle d-inline-block position-relative"
                                 style={{background: 'radial-gradient(circle, rgba(255,196,81,0.1) 0%, rgba(0,0,0,0) 70%)'}}>
                                <i className="bi bi-lightbulb-fill position-relative z-1"
                                   style={{
                                       fontSize: '8rem',
                                       color: 'var(--accent-color)',
                                       textShadow: '0 0 50px rgba(255, 196, 81, 0.6)'
                                   }}></i>

                                <div className="mt-4 position-relative z-2">
                                    <div className="p-3 rounded-3 d-inline-block" style={{
                                        background: 'rgba(0,0,0,0.8)',
                                        border: '1px solid var(--accent-color)'
                                    }}>
                                        <p className="mb-0 fst-italic text-white small"
                                           style={{fontFamily: 'var(--code-font)'}}>
                                            "Investasi dalam pengetahuan <br/>selalu membayar bunga terbaik."
                                        </p>
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