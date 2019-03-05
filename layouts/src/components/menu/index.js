import React from "react";
import "./menu.scss";
import logo from "./images/logo.png";

const Menu = () => {
  return (
    <menu className="wrapper-menu">
      <div className="container">
        <div className="menu">
          <div className="menu-logo">
            <a className="menu-logo-img" href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu-nav">
            <div className="menu-nav-lang">
              <ul className="list-lang">
                <li className="list-lang-li">
                  <a className="list-lang-li-a active" href="#">
                    CZE
                  </a>
                </li>
                <li className="list-lang-li">
                  <a className="list-lang-li-a" href="#">
                    ENG
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-menu">
                <li className="list-menu-li">
                  <a className="list-menu-li-a" href="#">
                    Odvětví
                    <div className="submenu">
                      <ul className="list-submenu">
                        <li className="list-submenu-li">
                          <a className="list-submenu-li-a" href="#">
                            Polovodičový průmysl
                          </a>
                        </li>
                        <li className="list-submenu-li">
                          <a className="list-submenu-li-a" href="#">
                            Zařízení pro laboratoře výzkumu a vývoje
                          </a>
                        </li>
                        <li className="list-submenu-li">
                          <a className="list-submenu-li-a" href="#">
                            Průmyslová automatizace
                          </a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="list-menu-li">
                  <a className="list-menu-li-a" href="#">
                    Produkty a služby
                  </a>
                </li>
                <li className="list-menu-li">
                  <a className="list-menu-li-a" href="#">
                    O nás
                  </a>
                </li>
                <li className="list-menu-li">
                  <a className="list-menu-li-a" href="#">
                    Kontaktujte nás
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default Menu;
