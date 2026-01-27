import React, {useState} from 'react';

export default function Faq() {
    // State untuk melacak pertanyaan mana yang sedang terbuka
    const [activeIndex, setActiveIndex] = useState(0); // Default no 1 terbuka

    const toggleFaq = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Tutup jika diklik lagi
        } else {
            setActiveIndex(index); // Buka yang diklik
        }
    };

    const faqData = [
        {
            question: 'Apa itu ngopikode?',
            answer: 'ngopikode adalah creative tech company yang menyediakan solusi digital end-to-end. Kami menggabungkan kreativitas seni dengan ketangguhan kode untuk membantu bisnis bertransformasi, mulai dari UMKM hingga korporasi.'
        },
        {
            question: 'Layanan apa saja yang ditawarkan?',
            answer: (
                <ul className="mb-0 ps-3">
                    <li><strong className="text-white">Creative Tech:</strong> Web & Mobile Apps Custom.</li>
                    <li><strong className="text-white">EdTech:</strong> LMS & Platform Edukasi.</li>
                    <li><strong className="text-white">UMKM Digital:</strong> POS (Kasir) & E-Commerce.</li>
                    <li><strong className="text-white">IoT & AgriTech:</strong> Smart Farming & Industrial Automation.
                    </li>
                </ul>
            )
        },
        {
            question: 'Berapa biaya pembuatan aplikasi?',
            answer: 'Biaya bersifat fleksibel (custom) tergantung kompleksitas fitur dan teknologi yang digunakan. Kami mengutamakan solusi yang cost-effective. Hubungi kami untuk konsultasi gratis dan estimasi harga transparan.'
        },
        {
            question: 'Apakah menerima proyek luar kota?',
            answer: 'Tentu saja! Kami adalah tim remote-first yang terbiasa bekerja dengan klien dari seluruh Indonesia bahkan luar negeri menggunakan tools kolaborasi modern (Zoom, Trello, Slack, dll).'
        },
        {
            question: 'Bagaimana alur kerjasamanya?',
            answer: 'Simpel: 1. Diskusi Kebutuhan (Consultation) -> 2. Penawaran & Kontrak -> 3. Development (Agile) -> 4. Testing & Review -> 5. Peluncuran & Maintenance.'
        },
        {
            question: 'Apakah ada garansi maintenance?',
            answer: 'Ya, kami memberikan garansi bug-fixing gratis selama periode tertentu (biasanya 3 bulan) setelah peluncuran. Kami juga menyediakan paket maintenance jangka panjang untuk update fitur dan keamanan.'
        }
    ];

    // Styles Configuration
    const styles = {
        section: {
            backgroundColor: 'var(--background-color)',
            color: 'var(--default-color)'
        },
        codeFont: {
            fontFamily: 'var(--code-font)'
        },
        faqItem: {
            backgroundColor: 'var(--surface-color)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            marginBottom: '15px',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
        },
        faqItemActive: {
            borderColor: 'var(--accent-color)', // Gold border when active
            boxShadow: '0 0 20px rgba(255, 196, 81, 0.1)'
        },
        question: {
            cursor: 'pointer',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--heading-color)',
            transition: '0.3s'
        },
        icon: {
            fontSize: '20px',
            color: 'var(--accent-color)',
            transition: 'transform 0.3s ease'
        }
    };

    return (
        <section id="faq" className="section py-5" style={styles.section}>

            <div className="container section-title" data-aos="fade-up">
                <h2>Sering Ditanyakan</h2>
                <p className="text-secondary">Hal penting sebelum kolaborasi.</p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9" data-aos="fade-up" data-aos-delay="100">

                        <div className="faq-container">
                            {faqData.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            ...styles.faqItem,
                                            ...(isActive ? styles.faqItemActive : {})
                                        }}
                                        className="position-relative"
                                    >
                                        {/* Question Header */}
                                        <div
                                            style={styles.question}
                                            onClick={() => toggleFaq(index)}
                                            className="user-select-none"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <span style={{
                                                    ...styles.codeFont,
                                                    color: isActive ? 'var(--accent-color)' : '#555'
                                                }}>
                                                    {String(index + 1).padStart(2, '0')}.
                                                </span>
                                                <span style={{color: isActive ? 'var(--accent-color)' : 'white'}}>
                                                    {item.question}
                                                </span>
                                            </div>
                                            <i className={`bi bi-chevron-down ${isActive ? 'rotate-180' : ''}`}
                                               style={{
                                                   ...styles.icon,
                                                   transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)'
                                               }}>
                                            </i>
                                        </div>

                                        {/* Answer Body (Accordion Animation) */}
                                        <div
                                            style={{
                                                maxHeight: isActive ? '500px' : '0',
                                                opacity: isActive ? 1 : 0,
                                                overflow: 'hidden',
                                                transition: 'all 0.4s ease-in-out',
                                                backgroundColor: 'rgba(0,0,0,0.2)'
                                            }}
                                        >
                                            <div
                                                className="p-4 pt-0 text-secondary border-top border-secondary border-opacity-10 mt-2">
                                                <div className="pt-3" style={{lineHeight: '1.8'}}>
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>

                {/* Decoration: Bottom CTA */}
                <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-secondary mb-3">Masih punya pertanyaan lain?</p>
                    <a href="#contact" className="btn rounded-pill px-4 py-2 fw-bold"
                       style={{
                           backgroundColor: 'rgba(255, 255, 255, 0.05)',
                           color: 'var(--accent-color)',
                           border: '1px solid var(--accent-color)'
                       }}>
                        <i className="bi bi-whatsapp me-2"></i> Chat Tim Kami
                    </a>
                </div>

            </div>
        </section>
    );
}