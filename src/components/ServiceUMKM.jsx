import React, {useEffect} from 'react';
import servicesImg1 from '../../assets/img/about.jpg';

export default function ServiceUMKM() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page bg-white">
            {/* Navigation Bar */}
            <div className="bg-white py-3 border-bottom sticky-top" style={{zIndex: 1020}}>
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="/" className="btn btn-outline-warning rounded-pill btn-sm px-3 text-dark">
                        <i className="bi bi-arrow-left me-2"></i> Kembali
                    </a>
                    <span className="fw-bold text-dark">Digital Solutions for UMKM</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-5 bg-warning bg-opacity-10">
                <div className="container py-lg-5">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6" data-aos="fade-right">
                            <span
                                className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill">UMKM Go Digital</span>
                            <h1 className="display-4 fw-bold mb-3 text-dark">Bikin Usaha Lokal Jadi Juara Global</h1>
                            <p className="lead text-dark mb-4">
                                Solusi digital praktis, hemat biaya, dan mudah digunakan untuk meningkatkan omzet dan
                                efisiensi bisnis Anda.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="/#contact"
                                   className="btn btn-warning text-dark fw-bold rounded-pill px-4 py-2">Coba
                                    Sekarang</a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center" data-aos="fade-left">
                            <img src={servicesImg1} alt="UMKM Digital"
                                 className="img-fluid rounded-4 shadow-lg border border-warning border-5"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5 mx-auto" style={{maxWidth: '700px'}} data-aos="fade-up">
                        <h2 className="fw-bold mb-3">Tools Wajib Pengusaha Sukses</h2>
                        <p className="text-muted">Semua yang Anda butuhkan untuk mengelola bisnis ada di sini.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-calculator',
                                title: 'Aplikasi Kasir (POS)',
                                desc: 'Catat transaksi cepat, cetak struk, dan pantau omzet harian.'
                            },
                            {
                                icon: 'bi-box-seam',
                                title: 'Manajemen Stok',
                                desc: 'Anti stok kosong! Notifikasi otomatis saat barang menipis.'
                            },
                            {
                                icon: 'bi-shop',
                                title: 'Toko Online',
                                desc: 'Punya website jualan sendiri yang terintegrasi dengan marketplace.'
                            },
                            {
                                icon: 'bi-people-fill',
                                title: 'CRM Sederhana',
                                desc: 'Kenali pelanggan setia Anda dan berikan promo spesial.'
                            },
                            {
                                icon: 'bi-file-earmark-spreadsheet',
                                title: 'Laporan Keuangan',
                                desc: 'Laporan laba rugi otomatis, nggak perlu pusing hitung manual.'
                            },
                            {
                                icon: 'bi-wallet2',
                                title: 'Pembayaran Digital',
                                desc: 'Terima pembayaran QRIS, E-Wallet, dan Transfer Bank dengan mudah.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 * idx}>
                                <div className="card h-100 border-0 shadow-sm bg-light">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-white p-2 rounded-3 shadow-sm me-3 text-warning">
                                                <i className={`bi ${item.icon} fs-4`}></i>
                                            </div>
                                            <h5 className="card-title fw-bold mb-0">{item.title}</h5>
                                        </div>
                                        <p className="card-text text-muted small">{item.desc}</p>
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
                        <div className="col-lg-5 offset-lg-1 order-2 order-lg-1" data-aos="fade-up">
                            <div className="p-4 bg-white border rounded-4 shadow-lg position-relative">
                                <div
                                    className="position-absolute top-0 start-50 translate-middle bg-warning text-dark px-3 py-1 rounded-pill fw-bold shadow-sm">Testimoni
                                </div>
                                <p className="fst-italic text-muted mt-3 mb-3 text-center">
                                    "Sejak pakai sistem dari ngopikode, pembukuan jadi rapi banget. Nggak ada lagi uang
                                    hilang nggak jelas. Omzet naik 30% dalam 3 bulan!"
                                </p>
                                <div className="text-center">
                                    <h6 className="fw-bold mb-0">Budi Santoso</h6>
                                    <small className="text-muted">Pemilik Kopi Senja</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                            <h3 className="fw-bold mb-4">Kenapa Harus Digital?</h3>
                            <p className="text-muted mb-4">
                                Zaman sudah berubah. Pelanggan Anda sudah online, masa bisnis Anda belum? Kami bantu
                                transisi digital Anda jadi mulus tanpa ribet.
                            </p>

                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-3 border rounded-3 text-center h-100">
                                        <h2 className="fw-bold text-warning">24/7</h2>
                                        <small className="text-muted">Bisnis Buka Terus</small>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border rounded-3 text-center h-100">
                                        <h2 className="fw-bold text-warning">100%</h2>
                                        <small className="text-muted">Kontrol Penuh</small>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="mb-0 fw-medium text-dark">
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