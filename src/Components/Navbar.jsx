import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import "../styles/Navbar.scss";
import { NavbarMenu } from "../NavbarMenu";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (id) => {
    setSubmenuOpen(submenuOpen === id ? null : id);
  };

  return (
    <nav className="navbar">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="navbar-container">
        <div className="logo">NEXT WEBI SOLUTIONS</div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="menu-item">
                <a href={menu.path} onClick={() => menu.submenu && toggleSubmenu(menu.id)}>
                  {menu.title} {menu.submenu && <span className="arrow">▼</span>}
                </a>
                {menu.submenu && submenuOpen === menu.id && (
                  <ul className="submenu">
                    {menu.submenu.map((sub) => (
                      <li key={sub.id}>
                        <a href={sub.path}>{sub.title}</a>
                        {sub.submenu && (
                          <ul className="submenu">
                            {sub.submenu.map((deepSub) => (
                              <li key={deepSub.id}>
                                <a href={deepSub.path}>{deepSub.title}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <IoMdMenu />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
