import Link from "next/link";
import styles from "../styles/Footer.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
    ],
    services: [
      { name: "Wellness Programs", href: "/services/programs" },
      { name: "Nutrition", href: "/services/nutrition" },
      { name: "Fitness", href: "/services/fitness" },
      { name: "Mindfulness", href: "/services/mindfulness" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "FAQs", href: "/faq" },
      { name: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <svg width="20" height="20" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797..." /></svg>,
    },
    // … keep all existing icons
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        
        {/* Row */}
        <div className="row">

          {/* Logo + About */}
          <div className={`col-12 col-md-4 col-lg-4 ${styles.footerCol}`}>
            <h2 className={styles.logo}>Wellness<span>Life</span></h2>
            <p>
              Your trusted partner for holistic wellness — guiding you toward 
              balance, healing, and inner peace with personalized programs.
            </p>

            <div className={styles.socialIcons}>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`col-6 col-md-4 col-lg-2 ${styles.footerCol}`}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Programs</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Wellness */}
          <div className={`col-6 col-md-4 col-lg-2 ${styles.footerCol}`}>
            <h3>Wellness</h3>
            <ul>
              <li><a>Meditation</a></li>
              <li><a>Yoga Therapy</a></li>
              <li><a>Mindfulness</a></li>
              <li><a>Ayurveda</a></li>
              <li><a>Diet & Nutrition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`col-12 col-md-6 col-lg-4 ${styles.footerCol}`}>
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@wellnesslife.com</p>

            <a 
              href="https://maps.app.goo.gl/jZTzcy9tzYkfM3qq8"
              target="_blank"
              className={styles.mapBtn}
            >
              📍 View on Google Maps
            </a>
          </div>

      

        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>© 2025 WellnessLife. All rights reserved.</p>
        </div>

      </div>
    </footer>
  
  );
}