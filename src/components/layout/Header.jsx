import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../common/ui";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner" style={{ padding: "1rem 0" }}>
        <Link to="/" className="brand">
          <img src={logo} alt="Playa Escondida Vacation Homes" className="logo-image" />
        </Link>

        <nav className="top-only-nav">
          <NavLink to="/listings">Vacation Rentals</NavLink>
          <NavLink to="/for-sale">Properties For Sale</NavLink>
          <NavLink to="/owner-services">Owner Services</NavLink>
          <NavLink to="/admin/login">Admin</NavLink>
        </nav>

        <div className="header-actions">
          <Button>Contact</Button>
        </div>
      </div>
    </header>
  );
}
