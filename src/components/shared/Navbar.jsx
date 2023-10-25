import React from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";

function Navbar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.href = "/";
      },
    },
    {
      label: "Coins",
      icon: "pi pi-fw pi-money-bill",
      command: () => {
        window.location.href = "/coins";
      },
    },
    {
      label: "Exchanges",
      icon: "pi pi-fw pi-refresh",
      command: () => {
        window.location.href = "/exchanges";
      },
    },
    {
      label: "About",
      icon: "pi pi-fw pi-info-circle",
      command: () => {
        window.location.href = "/about";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
      command: () => {
        window.location.href = "/contact";
      },
    },
  ];

  return (
    <div className="navbar bg-primary">
      <div className="container">
        <Menubar
          model={items}
          start={
            <Link to="/">
              <img
                src="path-to-your-logo-image.png"
                alt="Coin4Life"
                className="navbar-logo"
              />
            </Link>
          }
        />
      </div>
    </div>
  );
}

export default Navbar;
