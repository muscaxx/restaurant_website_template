"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Menu.module.css";

const menuData = {
  Appetizers: [
    { name: "Scallops Carpaccio", price: "$28", description: "Blood orange, fennel, chili & mint" },
    { name: "Wagyu Beef Tartare", price: "$32", description: "Cured egg yolk, truffle, sourdough" },
    { name: "Roasted Beetroot", price: "$24", description: "Goat cheese foam, pine nuts, balsamic" },
  ],
  "Main Courses": [
    { name: "Glazed Seabass", price: "$48", description: "Saffron risotto, sea beans, lemon emulsion" },
    { name: "Duo of Lamb", price: "$52", description: "Herb crusted loin, braised shoulder, pea purée" },
    { name: "Wild Mushroom Risotto", price: "$42", description: "Parmesan crisp, chive oil, black truffle" },
  ],
  Desserts: [
    { name: "Dark Chocolate Fondant", price: "$18", description: "Vanilla bean gelato, sea salt caramel" },
    { name: "Lemon Curd Tart", price: "$16", description: "Meringue, raspberry sorbet, basil" },
    { name: "Artisanal Cheese Board", price: "$24", description: "Seasonal compote, house-made crackers" },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Appetizers");

  return (
    <section id="menu" className={`section ${styles.menuSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>SAVOR THE MOMENT</span>
          <h2 className={styles.title}>Seasonal <span className="text-accent">Menu</span></h2>
        </div>

        <div className={styles.tabs}>
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`${styles.tabBtn} ${activeCategory === category ? styles.active : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.menuGrid}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.itemRow}
            >
              {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className={styles.footer}>
          <p>* Please inform your server about any allergies.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
