import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <ul>
        <li className={styles.willwatch}>
          <Link href="/watchlist">Izlenecekler</Link>
        </li>
        <div className={styles.watched}>
          <li>
            <Link href="/watched">Izlenenler</Link>
          </li>
          <li>
            <button className={styles.button}>
              <Link href="/add">+</Link>
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
