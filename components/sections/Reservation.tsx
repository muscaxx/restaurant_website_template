"use client";

import { motion } from "framer-motion";
import styles from "./Reservation.module.css";

const Reservation = () => {
  return (
    <section id="reservation" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <span className={styles.subtitle}>RESERVE A TABLE</span>
            <h2 className={styles.title}>Join Us for <span className="text-accent">Dinner</span></h2>
            <p className={styles.description}>
              Please select your preferred date and time. 
              Our team will contact you to confirm the booking within 2 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.inputGrid}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <label>Guests</label>
                <select required>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Date</label>
                <input type="date" required />
              </div>
              <div className={styles.formGroup}>
                <label>Time</label>
                <select required>
                  <option value="18:00">18:00 PM</option>
                  <option value="19:00">19:00 PM</option>
                  <option value="20:00">20:00 PM</option>
                  <option value="21:00">21:00 PM</option>
                  <option value="22:00">22:00 PM</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroupFull}>
              <label>Special Requests</label>
              <textarea placeholder="Allergies, birthday, anniversary..."></textarea>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              Request Reservation
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
