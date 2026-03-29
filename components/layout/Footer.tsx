"use client";

import Link from "next/link";
import { Instagram, Facebook, X, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              L'ESSENCE
            </Link>
            <p className={styles.tagline}>
              Crafting unforgettable culinary memories since 2011. 
              Minimalism meets perfection on every plate.
            </p>
            <div className={styles.socials}>
              <Link href="#"><Instagram size={20} /></Link>
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><X size={20} /></Link>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.title}>EXPLORE</h4>
            <ul className={styles.links}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#menu">Menu</Link></li>
              <li><Link href="#reservation">Reservation</Link></li>
            </ul>
          </div>

          <div className={styles.contactColumn}>
            <h4 className={styles.title}>CONTACT</h4>
            <ul className={styles.contactInfo}>
              <li><MapPin size={16} /> 123 Gourmet Ave, Paris, France</li>
              <li><Phone size={16} /> +33 1 23 45 67 89</li>
              <li><Mail size={16} /> info@lessence.com</li>
            </ul>
          </div>

          <div className={styles.hoursColumn}>
            <h4 className={styles.title}>HOURS</h4>
            <ul className={styles.hours}>
              <li>Mon - Thu: 18:00 - 22:00</li>
              <li>Fri - Sat: 17:00 - 23:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 L'ESSENCE RESTAURANT. DESIGNED FOR PORTFOLIO.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
