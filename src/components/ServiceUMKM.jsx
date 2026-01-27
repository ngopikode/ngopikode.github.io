import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceUMKM() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Configuration based on your main.css
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
        gradientText: {
            background: 'linear-gradient(to right, #fff, var(--accent-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
        },
        cardGlass: {
            background: 'rgba(30, 30, 30, 0.6)', // Slightly more solid for trust
            border: '1px solid rgba(255, 196, 81, 0.15)', // Subtle Gold Border
            backdropFilter: 'blur(10px)',
            borderRadius: '12px'
        },
        btnPrimary: {
            backgroundColor: 'var(--accent-color)',
            color: 'var(--contrast-color)', // Black text on Gold btn
            border: 'none',
            fontWeight: 700,
            boxShadow: '0 0 25px rgba(255, 196, 81, 0.3)'
        },
        btnOutline: {
            border: '1px solid var(--accent-color)',
            color: 'var(--accent-color)',
            background: 'transparent',
            fontWeight: 600
        },
        iconBox: {
            background: 'rgba(255, 196, 81, 0.1)',
            color: 'var(--accent-color)',
            width: '50px',
            height: '50px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    };

    return (
        <div style={styles.pageWrapper} className="position-relative overflow-hidden">

            {/* Navbar Custom */}
            <div className="sticky-top border-bottom border-secondary border-opacity-10"
                 style={{
                     backgroundColor: 'rgba(18, 18, 18, 0.9)',
                     backdropFilter: 'blur(10px)',
                     zIndex: 1020
                 }}>
                <div className="container py-3 d-flex justify-content-between align-items-center">
                    <a href="/#services" className="d-flex align-items-center text-decoration-none group-hover">
                        <i className="bi bi-arrow-left me-2" style={{color: 'var(--accent-color)'}}></i>
                        <span style={{color: 'var(--heading-color)', fontWeight: 500}}>Kembali</span>
                    </a>
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-shop-window" style={{color: 'var(--accent-color)'}}></i>
                        <span style={{...styles.codeFont, color: '#fff', fontWeight: 'bold'}}>
                            SME_GO_DIGITAL<span style={{color: 'var(--accent-color)'}}>_v2.0</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 position-relative">
                {/* Background Decoration - Golden Glows */}
                <div className="position-absolute top-0 start-50 translate-middle-x rounded-circle"
                     style={{
                         width: '600px',
                         height: '600px',
                         background: 'radial-gradient(circle, rgba(255, 196, 81, 0.15) 0%, transparent 70%)',
                         filter: 'blur(80px)',
                         zIndex: 0
                     }}></div>

                <div className="container py-lg-5 position-relative z-1">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div
                                className="d-inline-flex align-items-center px-3 py-1 mb-4 rounded-pill border border-warning border-opacity-25"
                                style={{background: 'rgba(255, 196, 81, 0.05)'}}>
                                <i className="bi bi-graph-up-arrow me-2" style={{color: 'var(--accent-color)'}}></i>
                                <span style={{...styles.codeFont, fontSize: '0.85rem', color: 'var(--accent-color)'}}>
                                    GROWTH HACKING FOR LOCAL BIZ
                                </span>
                            </div>

                            <h1 className="display-4 mb-4 lh-sm"
                                style={{...styles.headingFont, fontWeight: 800, color: 'white'}}>
                                Bikin Usaha Lokal <br/>
                                Jadi <span style={styles.gradientText}>Juara Global</span>
                            </h1>

                            <p className="lead mb-5" style={{color: '#aaa', maxWidth: '90%'}}>
                                Solusi digital praktis dan hemat biaya. Tingkatkan omzet dan efisiensi bisnis Anda
                                dengan <span style={{color: 'var(--accent-color)'}}>ekosistem teknologi</span> yang
                                terintegrasi.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="/#contact" className="btn rounded-pill px-5 py-3 hover-lift"
                                   style={styles.btnPrimary}>
                                    Coba Sekarang <i className="bi bi-arrow-right-short ms-1"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center" data-aos="fade-left">
                            <div className="position-relative">
                                {/* Image Frame with Gold Accents */}
                                <div className="p-1 rounded-4 position-relative"
                                     style={{background: 'linear-gradient(45deg, var(--accent-color), #333, var(--accent-color))'}}>
                                    <img src={servicesImg1} alt="UMKM Digital"
                                         className="img-fluid rounded-4 w-100"
                                         style={{
                                             filter: 'brightness(0.8) contrast(1.1)',
                                             border: '4px solid #121212'
                                         }}/>
                                </div>

                                {/* Floating Stats Card */}
                                <div
                                    className="position-absolute bottom-0 start-0 m-4 p-3 rounded-3 border border-secondary border-opacity-25 text-start animate-bounce"
                                    style={{
                                        background: 'rgba(18, 18, 18, 0.95)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                        minWidth: '180px'
                                    }}>
                                    <div className="text-secondary small mb-1" style={styles.codeFont}>TOTAL_REVENUE
                                    </div>
                                    <div className="d-flex align-items-end gap-2">
                                        <h4 className="mb-0 fw-bold text-white">Rp 85jt+</h4>
                                        <i className="bi bi-caret-up-fill text-success mb-1"></i>
                                    </div>
                                    <div className="progress mt-2" style={{height: '4px', backgroundColor: '#333'}}>
                                        <div className="progress-bar bg-success" role="progressbar"
                                             style={{width: '75%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-5" style={{backgroundColor: 'var(--surface-color)'}}>
                <div className="container">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="mb-3" style={{
                            ...styles.codeFont,
                            color: 'var(--accent-color)',
                            fontSize: '16px',
                            letterSpacing: '2px'
                        }}>DIGITAL_TOOLKIT</h2>
                        <h3 className="fw-bold text-white fs-2">Senjata Wajib Pengusaha Sukses</h3>
                        <p className="text-secondary">Semua modul yang Anda butuhkan untuk automasi bisnis.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-calculator',
                                title: 'Smart POS',
                                desc: 'Kasir digital dengan pencatatan otomatis & cetak struk.'
                            },
                            {
                                icon: 'bi-box-seam',
                                title: 'Stock Alert',
                                desc: 'Notifikasi real-time saat stok barang menipis.'
                            },
                            {
                                icon: 'bi-shop',
                                title: 'E-Commerce',
                                desc: 'Website toko online terintegrasi marketplace.'
                            },
                            {
                                icon: 'bi-people-fill',
                                title: 'Simple CRM',
                                desc: 'Database pelanggan untuk program loyalitas.'
                            },
                            {
                                icon: 'bi-file-earmark-spreadsheet',
                                title: 'Auto Report',
                                desc: 'Laporan Laba/Rugi otomatis, tanpa hitung manual.'
                            },
                            {
                                icon: 'bi-qr-code-scan',
                                title: 'QRIS Ready',
                                desc: 'Terima semua pembayaran digital (E-Wallet/Bank).'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div
                                    className="h-100 p-4 rounded-3 position-relative overflow-hidden group-hover-border"
                                    style={{...styles.cardGlass, transition: 'all 0.3s ease'}}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = 'var(--accent-color)';
                                        e.currentTarget.style.background = 'rgba(255, 196, 81, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 196, 81, 0.15)';
                                        e.currentTarget.style.background = 'rgba(30, 30, 30, 0.6)';
                                    }}
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 shadow-sm" style={styles.iconBox}>
                                            <i className={`bi ${item.icon} fs-4`}></i>
                                        </div>
                                        <h5 className="fw-bold mb-0 text-white">{item.title}</h5>
                                    </div>
                                    <p className="small mb-0" style={{color: '#999'}}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition / Testimonial */}
            <section className="py-5">
                <div className="container py-lg-4">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-5 offset-lg-1 order-2 order-lg-1" data-aos="fade-up">
                            {/* Testimonial Card style "Code Block" */}
                            <div className="p-4 rounded-4 position-relative"
                                 style={{background: '#1a1a1a', border: '1px dashed var(--accent-color)'}}>
                                <div
                                    className="position-absolute top-0 start-50 translate-middle px-3 py-1 rounded-pill fw-bold shadow-sm"
                                    style={{background: 'var(--accent-color)', color: '#000', fontSize: '12px'}}>
                                    VERIFIED_MERCHANT
                                </div>

                                <i className="bi bi-quote fs-1 opacity-25" style={{color: 'var(--accent-color)'}}></i>
                                <p className="fst-italic mt-2 mb-4 text-white">
                                    "Sejak pakai sistem ini, pembukuan jadi rapi banget. Nggak ada lagi uang hilang
                                    nggak jelas. Omzet naik 30% dalam 3 bulan pertama!"
                                </p>
                                <div
                                    className="d-flex align-items-center gap-3 border-top border-secondary border-opacity-25 pt-3">
                                    <div className="rounded-circle bg-secondary"
                                         style={{width: '40px', height: '40px'}}></div>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-white">Imanda Al-Fath</h6>
                                        <small className="text-secondary" style={styles.codeFont}>Owner Kopi
                                            Senja</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                            <h3 className="fw-bold mb-4 text-white">Kenapa Harus <span
                                style={{color: 'var(--accent-color)'}}>Go Digital?</span></h3>
                            <p className="text-secondary mb-5">
                                Zaman sudah berubah. Pelanggan Anda sudah online, masa bisnis Anda belum? Kami bantu
                                transisi digital Anda jadi mulus tanpa ribet.
                            </p>

                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-3 rounded-3 text-center h-100 position-relative overflow-hidden"
                                         style={{
                                             background: 'rgba(255,255,255,0.03)',
                                             border: '1px solid rgba(255,255,255,0.05)'
                                         }}>
                                        <h2 className="fw-bold mb-0" style={{color: 'var(--accent-color)'}}>24/7</h2>
                                        <small className="text-secondary">Operasional Non-stop</small>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 rounded-3 text-center h-100"
                                         style={{
                                             background: 'rgba(255,255,255,0.03)',
                                             border: '1px solid rgba(255,255,255,0.05)'
                                         }}>
                                        <h2 className="fw-bold mb-0"
                                            style={{color: 'var(--tech-accent-color)'}}>100%</h2>
                                        <small className="text-secondary">Kontrol Penuh</small>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 ps-3 border-start border-warning border-3">
                                <p className="mb-0 fw-medium text-white fst-italic">
                                    "Bisnis besar dimulai dari langkah kecil yang cerdas. Digitalisasi adalah langkah
                                    cerdas itu."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}