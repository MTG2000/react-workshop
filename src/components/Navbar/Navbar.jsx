import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href={"/"}>
        <h2 className={styles.logo}>React Workshop Projects</h2>
      </a>
      <ul>
        <a href={"/counter"}>Counter</a>
        <a href={"/login"}>Login</a>
        <a href={"/todos"}>Todos</a>
        <a href={"/games"}>Games</a>
      </ul>
    </nav>
  );
}
