"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={styles.imageContainer}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/dish.png"
                alt="Signature Dish"
                width={600}
                height={700}
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.experienceBox}>
              <span className={styles.years}>15</span>
              <span className={styles.expText}>YEARS OF EXCELLENCE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.content}
          >
            <span className={styles.subtitle}>OUR STORY</span>
            <h2 className={styles.title}>
              A Culinary Journey of <span className="text-accent">Elegance</span>
            </h2>
            <p className={styles.description}>
              At L'Essence, we believe that dining is not just about food; 
              it's an exquisite performance of flavors, textures, and ambiance. 
              Our chefs meticulously source seasonal ingredients from local artisans 
              to create a narrative on every plate.
            </p>
            <p className={styles.description}>
              Founded in 2011, our vision was to create a sanctuary for those 
              who appreciate the finer things in life—minimalism, quality, and 
              the pure essence of taste.
            </p>
            
            <div className={styles.signature}>
              <h4 className={styles.chefName}>Chef Marc Aubert</h4>
              <p className={styles.chefRole}>EXECUTIVE CHEF & FOUNDER</p>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#reservation" 
              className="btn-secondary"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
