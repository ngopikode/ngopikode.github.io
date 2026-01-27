import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceIoT() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Configuration based on main.css & IoT Theme
    const styles = {
        pageWrapper: {
            backgroundColor: 'var(--background-color)',
            color: 'var(--default-color)',
            fontFamily: 'var(--default-font)',
            minHeight: '100vh'
        },
        headingFont: {
            fontFamily: 'var(--heading-font)'
        },
        codeFont: {
            fontFamily: 'var(--code-font)'
        },
        // Gradient from Tech Cyan to Agri Green
        gradientText: {
            background: 'linear-gradient(to right, var(--tech-accent-color), #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
        },
        cardGlass: {
            background: 'rgba(20, 20, 20, 0.8)',
            border: '1px solid rgba(0, 242, 255, 0.1)', // Cyan border faint
            backdropFilter: 'blur(5px)',
            borderRadius: '4px' // More angular for industrial look
        },
        btnPrimary: {
            background: 'linear-gradient(90deg, var(--tech-accent-color) 0%, #00d2ff 100%)',
            color: '#000',
            border: 'none',
            fontWeight: 700,
            boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)',
            borderRadius: '2px' // Boxy tech button
        },
        btnOutline: {
            border: '1px solid var(--tech-accent-color)',
            color: 'var(--tech-accent-color)',
            background: 'transparent',
            fontWeight: 600,
            borderRadius: '2px'
        },
        gridBackground: {
            backgroundImage: `
                linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
        }
    };

    // CSS Animation injection
    const customCss = `
        .scanner-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: var(--tech-accent-color);
            box-shadow: 0 0 15px var(--tech-accent-color);
            animation: scan 3s linear infinite;
            z-index: 10;
        }
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .tech-card-hover:hover {
            border-color: var(--tech-accent-color) !important;
            box-shadow: 0 0 30px rgba(0, 242, 255, 0.15) inset;
        }
        .corner-accent {
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2px solid var(--tech-accent-color);
            transition: all 0.3s;
        }
        .corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .corner-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
        .corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }
        .corner-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
        
        .tech-card-hover:hover .corner-accent {
            width: 100%;
            height: 100%;
            opacity: 0.1;
        }
    `;

    return (
        <div style={styles.pageWrapper} className="position-relative overflow-hidden">
            <style>{customCss}</style>

            {/* Navbar Custom */}
            <div className="sticky-top border-bottom border-secondary border-opacity-10"
                 style={{
                     backgroundColor: 'rgba(18, 18, 18, 0.9)',
                     backdropFilter: 'blur(10px)',
                     zIndex: 1020
                 }}>
                <div className="container py-3 d-flex justify-content-between align-items-center">
                    <a href="/#services" className="d-flex align-items-center text-decoration-none group-hover">
                        <i className="bi bi-arrow-left me-2" style={{color: 'var(--tech-accent-color)'}}></i>
                        <span style={{color: 'var(--heading-color)', fontWeight: 500}}>Kembali</span>
                    </a>
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-cpu-fill" style={{color: 'var(--tech-accent-color)'}}></i>
                        <span style={{...styles.codeFont, color: '#fff', fontWeight: 'bold'}}>
                            IOT_SYSTEM<span style={{color: '#00ff88'}}>::AGRI_TECH</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 position-relative" style={styles.gridBackground}>
                <div className="container py-lg-5 position-relative z-1">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div
                                className="d-inline-flex align-items-center px-3 py-1 mb-4 border border-info border-opacity-25"
                                style={{
                                    background: 'rgba(0, 242, 255, 0.05)',
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 50%)'
                                }}>
                                <i className="bi bi-wifi me-2" style={{color: 'var(--tech-accent-color)'}}></i>
                                <span
                                    style={{...styles.codeFont, fontSize: '0.8rem', color: 'var(--tech-accent-color)'}}>
                                    SENSOR_STATUS: ONLINE
                                </span>
                            </div>

                            <h1 className="display-4 mb-4 lh-sm"
                                style={{...styles.headingFont, fontWeight: 800, color: 'white'}}>
                                Hubungkan Dunia Fisik<br/>
                                <span style={styles.gradientText}>Dengan Digital</span>
                            </h1>

                            <p className="lead mb-5" style={{color: '#aaa', maxWidth: '90%'}}>
                                Dari pertanian presisi hingga pabrik cerdas. Kami membangun ekosistem IoT untuk
                                efisiensi maksimal menggunakan <span style={{color: 'var(--tech-accent-color)'}}>Real-time Data</span>.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="/#contact" className="btn px-5 py-3 hover-lift" style={styles.btnPrimary}>
                                    REQUEST DEMO
                                </a>
                                <a href="/" className="btn px-4 py-3" style={styles.btnOutline}>
                                    VIEW SENSORS
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center" data-aos="zoom-in">
                            <div className="position-relative d-inline-block p-1 border border-info border-opacity-25"
                                 style={{borderRadius: '20px'}}>
                                <div className="position-relative overflow-hidden" style={{borderRadius: '20px'}}>
                                    <img src={servicesImg1} alt="IoT" className="img-fluid w-100"
                                         style={{filter: 'grayscale(80%) contrast(1.2) brightness(0.8)'}}/>

                                    {/* Scanning Effect Overlay */}
                                    <div className="scanner-line"></div>
                                    <div className="position-absolute top-0 start-0 w-100 h-100"
                                         style={{
                                             background: 'linear-gradient(to bottom, rgba(0,242,255,0.1), transparent)',
                                             zIndex: 2
                                         }}></div>

                                    {/* Data Overlay */}
                                    <div className="position-absolute bottom-0 start-0 p-3 w-100 text-start"
                                         style={{
                                             background: 'rgba(0,0,0,0.8)',
                                             borderTop: '1px solid var(--tech-accent-color)'
                                         }}>
                                        <div className="row g-2 text-center">
                                            <div className="col-4 border-end border-secondary">
                                                <small className="d-block text-secondary"
                                                       style={{fontSize: '10px'}}>TEMP</small>
                                                <span className="text-white fw-bold" style={styles.codeFont}>28°C</span>
                                            </div>
                                            <div className="col-4 border-end border-secondary">
                                                <small className="d-block text-secondary"
                                                       style={{fontSize: '10px'}}>HUMIDITY</small>
                                                <span className="text-white fw-bold" style={styles.codeFont}>65%</span>
                                            </div>
                                            <div className="col-4">
                                                <small className="d-block text-secondary"
                                                       style={{fontSize: '10px'}}>STATUS</small>
                                                <span className="fw-bold"
                                                      style={{...styles.codeFont, color: '#00ff88'}}>OK</span>
                                            </div>
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
                            color: 'var(--tech-accent-color)',
                            fontSize: '16px',
                            letterSpacing: '2px'
                        }}>SYSTEM_MODULES</h2>
                        <h3 className="fw-bold text-white fs-2">Smart Industry Solutions</h3>
                        <p className="text-secondary">Data real-time di ujung jari Anda untuk pengambilan keputusan
                            presisi.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-thermometer-sun',
                                title: 'Smart Sensors',
                                desc: 'Monitoring suhu, kelembaban tanah & udara 24/7.'
                            },
                            {
                                icon: 'bi-cloud-rain',
                                title: 'Auto Irrigation',
                                desc: 'Otomatisasi penyiraman berbasis data cuaca.'
                            },
                            {
                                icon: 'bi-truck',
                                title: 'Asset Tracking',
                                desc: 'GPS Tracking presisi untuk aset bergerak.'
                            },
                            {
                                icon: 'bi-robot',
                                title: 'Automation',
                                desc: 'Kontrol mesin jarak jauh via dashboard cloud.'
                            },
                            {
                                icon: 'bi-shield-check',
                                title: 'Early Warning',
                                desc: 'Deteksi anomali & peringatan dini otomatis.'
                            },
                            {
                                icon: 'bi-graph-up',
                                title: 'Big Data Analytics',
                                desc: 'Visualisasi data kompleks menjadi insight simpel.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div className="h-100 p-4 position-relative tech-card-hover"
                                     style={{...styles.cardGlass, transition: 'all 0.3s ease'}}>
                                    {/* Tech Corners */}
                                    <div className="corner-accent corner-tl"></div>
                                    <div className="corner-accent corner-tr"></div>
                                    <div className="corner-accent corner-br"></div>
                                    <div className="corner-accent corner-bl"></div>

                                    <div className="mb-4 d-inline-block">
                                        <i className={`bi ${item.icon} fs-2`}
                                           style={{color: 'var(--tech-accent-color)'}}></i>
                                    </div>
                                    <h5 className="fw-bold mb-3 text-white" style={styles.headingFont}>{item.title}</h5>
                                    <p className="small mb-0" style={{color: '#999'}}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 position-relative overflow-hidden">
                <div className="container py-lg-4 position-relative z-1">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h3 className="fw-bold mb-4 text-white">Efficiency Through <br/><span
                                style={{color: 'var(--tech-accent-color)'}}>Connectivity</span></h3>
                            <p className="text-secondary mb-5">
                                Kami merancang hardware yang tahan banting untuk kondisi lapangan ekstrem (IP68), namun
                                tetap mengirimkan data presisi ke Cloud Server kami.
                            </p>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="p-4 border border-secondary border-opacity-50 h-100"
                                         style={{background: 'rgba(255,255,255,0.02)'}}>
                                        <h2 className="fw-bold mb-1"
                                            style={{...styles.codeFont, color: '#00ff88'}}>+30%</h2>
                                        <h6 className="fw-bold text-white">YIELD RATE</h6>
                                        <p className="small text-secondary mb-0">Peningkatan hasil panen.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-4 border border-secondary border-opacity-50 h-100"
                                         style={{background: 'rgba(255,255,255,0.02)'}}>
                                        <h2 className="fw-bold mb-1"
                                            style={{...styles.codeFont, color: 'var(--tech-accent-color)'}}>-50%</h2>
                                        <h6 className="fw-bold text-white">COST REDUCTION</h6>
                                        <p className="small text-secondary mb-0">Hemat air & energi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center" data-aos="fade-left">
                            <div className="mt-4 p-5 position-relative overflow-hidden"
                                 style={{
                                     background: 'linear-gradient(135deg, rgba(0,242,255,0.1) 0%, rgba(0,0,0,0) 100%)',
                                     border: '1px solid var(--tech-accent-color)'
                                 }}>
                                <i className="bi bi-quote position-absolute top-0 start-0 opacity-25"
                                   style={{fontSize: '5rem', color: 'var(--tech-accent-color)'}}></i>
                                <p className="mb-0 fw-medium fs-5 text-white position-relative z-1 fst-italic">
                                    "Bertani dengan otot itu masa lalu, bertani dengan <span
                                    style={{color: 'var(--tech-accent-color)'}}>Data</span> adalah masa depan."
                                </p>
                                <div className="mt-3 text-end">
                                    <small className="text-secondary" style={styles.codeFont}>SYSTEM_LOG_ID:
                                        2024</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}