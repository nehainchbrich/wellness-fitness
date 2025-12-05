import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Body', href: '/' },
    { name: 'Mind', href: '/' },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Self-Care', href: '/self-care' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: '/' },
    { name: 'Our Legacy', href: '/founder' },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // Determine header class
  const headerClass = isScrolled
    ? styles.headerScrolled
    : transparent
      ? styles.headerTransparent
      : styles.headerDefault;

  // Determine nav item class
  const navItemClass = (transparent && !isScrolled) ? styles.navItemDark : styles.navItem;

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : styles.overlayHidden
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* HEADER */}
      <header className={`${styles.header} ${headerClass}`}>
        <nav className={styles.navWrap}>
          <div className={styles.navFlex}>

            {/* LOGO */}
            <Link href="/" className={styles.logoWrap}>
              <div className={styles.logoIconWrap}>
                <div className={styles.logoBlur}></div>
                <div className={styles.logoIcon}>
                  <span>W</span>
                </div>
              </div>
              <span className={styles.logoText}>Wellness</span>
            </Link>

            {/* DESKTOP NAV */}
            <div className={styles.desktopNav}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={navItemClass}>
                  {link.name}
                  <span className={styles.navUnderline}></span>
                </Link>
              ))}
            </div>

            {/* DESKTOP BUTTON */}
            <div className={styles.desktopBtnWrap}>
              <Link href="/auth/login" className={styles.btnPrimary}>
                Login
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className={styles.mobileBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>

          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''
          }`}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logoWrap}>
            <div className={styles.logoIconWrap}>
              <div className={styles.logoBlur}></div>
              <div className={styles.logoIcon}>
                <span>W</span>
              </div>
            </div>
            <span className={styles.logoText}>Wellness</span>
          </div>

          <button
            className={styles.mobileBtn}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✖
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.menuItem}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>•</span> {link.name}
            </Link>
          ))}

          <Link
            href="/auth/register"
            className={styles.sidebarBtn}
            style={{ animationDelay: `${navLinks.length * 50}ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>

          <div className={styles.sidebarFooter}>
            Your wellness journey starts here
          </div>
        </nav>
      </aside>
    </>
  );
}
