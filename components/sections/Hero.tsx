"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="/hero.png"
          alt="Luxury Restaurant Interior"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.content}
        >
          <motion.h3
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className={styles.subtitle}
          >
            MODERN CULINARY ART
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={styles.title}
          >
            Elevate Your <span className="text-accent">Palate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={styles.description}
          >
            A minimalist journey through the finest flavors of the Mediterranean, 
            crafted with precision and passion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={styles.actions}
          >
            <a href="#menu" className="btn-primary">
              Discover Menu
            </a>
            <a href="#reservation" className="btn-secondary">
              Book a Table
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;
