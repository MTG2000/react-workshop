import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <h2 className={styles.logo}>React Workshop Projects</h2>
      </Link>
      <ul>
        <Link to={"/counter"}>Counter</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/todos"}>Todos</Link>
        <Link to={"/games"}>Games</Link>
      </ul>
    </nav>
  );
}
