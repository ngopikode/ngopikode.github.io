import React, {useEffect, useState} from 'react';

export default function Header() {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
                document.body.classList.add('scrolled');
            } else {
                setIsScrolled(false);
                document.body.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileNav = () => {
        setIsMobileNavActive(!isMobileNavActive);
        document.body.classList.toggle('mobile-nav-active');
    };

    const handleNavLinkClick = () => {
        if (isMobileNavActive) {
            toggleMobileNav();
        }
    };

    return (
        <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <div
                className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/182346406?s=400&u=40c038c350b2df3658b189025cb1c4bb43a85bfa&v=4"
                        alt=""/>
                    <h1 className="sitename">ngopikode</h1>
                    <span>.</span>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active" onClick={handleNavLinkClick}>Home<br/></a></li>
                        <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
                        <li><a href="#services" onClick={handleNavLinkClick}>Services</a></li>
                        <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
                    </ul>
                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
                        onClick={toggleMobileNav}
                    ></i>
                </nav>

                <a className="btn-getstarted" href="#about">Get Started</a>

            </div>
        </header>
    );
}