import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceIoT() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page bg-dark text-white">
            {/* Navigation Bar */}
            <div className="bg-dark py-3 border-bottom border-secondary sticky-top" style={{zIndex: 1020}}>
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="/" className="btn btn-outline-info rounded-pill btn-sm px-3">
                        <i className="bi bi-arrow-left me-2"></i> Kembali
                    </a>
                    <span className="fw-bold text-white">IoT & AgriTech</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6" data-aos="fade-right">
                            <span className="badge bg-info bg-opacity-10 text-info mb-3 px-3 py-2 rounded-pill">Smart Technology</span>
                            <h1 className="display-4 fw-bold mb-3 text-white">Hubungkan Dunia Fisik dengan Kecerdasan
                                Digital</h1>
                            <p className="lead text-white-50 mb-4">
                                Dari pertanian presisi hingga pabrik cerdas, kami membangun ekosistem IoT untuk
                                efisiensi dan produktivitas maksimal.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="/#contact" className="btn btn-info rounded-pill px-4 py-2">Jadwalkan Demo</a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center" data-aos="zoom-in">
                            <div className="position-relative">
                                <img src={servicesImg1} alt="IoT" className="img-fluid rounded-circle shadow-lg"
                                     style={{width: '400px', height: '400px', objectFit: 'cover'}}/>
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-5 border-info opacity-50 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-5 bg-black">
                <div className="container">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="fw-bold mb-3 text-white">Solusi Cerdas untuk Industri Cerdas</h2>
                        <p className="text-white-50">Data real-time di ujung jari Anda untuk pengambilan keputusan yang
                            lebih baik.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-thermometer-sun',
                                title: 'Monitoring Lingkungan',
                                desc: 'Sensor suhu, kelembaban, dan kualitas udara secara real-time.'
                            },
                            {
                                icon: 'bi-droplet-half',
                                title: 'Irigasi Otomatis',
                                desc: 'Siram tanaman hanya saat dibutuhkan, hemat air hingga 50%.'
                            },
                            {
                                icon: 'bi-truck',
                                title: 'Pelacakan Aset',
                                desc: 'Lacak lokasi dan kondisi aset berharga Anda di mana saja.'
                            },
                            {
                                icon: 'bi-robot',
                                title: 'Otomatisasi Industri',
                                desc: 'Kontrol mesin dan proses produksi dari jarak jauh.'
                            },
                            {
                                icon: 'bi-shield-check',
                                title: 'Sistem Keamanan',
                                desc: 'Peringatan dini untuk pencegahan kebakaran atau kebocoran gas.'
                            },
                            {
                                icon: 'bi-speedometer2',
                                title: 'Dashboard Analitik',
                                desc: 'Visualisasi data yang mudah dibaca untuk insight mendalam.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div
                                    className="card h-100 bg-dark border-secondary text-white hover-border-info transition-all">
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <i className={`bi ${item.icon} fs-2 text-info`}></i>
                                        </div>
                                        <h5 className="card-title fw-bold mb-2">{item.title}</h5>
                                        <p className="card-text text-white-50 small">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h3 className="fw-bold mb-4 text-white">Masa Depan Ada di Tangan Anda</h3>
                            <p className="text-white-50 mb-4">
                                Kami adalah pionir dalam penerapan teknologi tepat guna. Solusi IoT kami dirancang untuk
                                tahan banting di kondisi lapangan yang keras, namun tetap memberikan data akurat.
                            </p>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="p-3 bg-secondary bg-opacity-25 rounded-3 h-100">
                                        <h5 className="fw-bold text-info">Peningkatan Hasil</h5>
                                        <p className="small text-white-50">Peningkatan hasil panen dan kualitas produk
                                            hingga 30%.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-secondary bg-opacity-25 rounded-3 h-100">
                                        <h5 className="fw-bold text-info">Efisiensi Biaya</h5>
                                        <p className="small text-white-50">Penghematan biaya air, pupuk, dan energi
                                            secara signifikan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center" data-aos="fade-left">
                            <div className="mt-4 p-4 bg-info text-dark rounded-4">
                                <p className="mb-0 fw-bold fs-5">
                                    "Bertani dengan otot itu masa lalu, bertani dengan data adalah masa depan."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}