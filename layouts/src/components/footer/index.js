import React from "react";
import "./footer.scss";
import logo from "./images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bc">
        <div className="footer-info container">
          <div className="footer-box">
            <h2 className="footer-box-title">O nás</h2>
            <ul className="list-footer">
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Novinky
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Základní informace
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Kontakty
                </a>
              </li>
            </ul>
            <ul className="list-footer">
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Zásady ochrany osobních údajů
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  O cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h2 className="footer-box-title">Odvětví</h2>
            <ul className="list-footer">
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Polovodičový průmysl
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Zařízení pro laboratoře výzkumu a vývoje
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Prúmyslová automatizace
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h2 className="footer-box-title">Produkty a služby</h2>
            <ul className="list-footer">
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Sprejové mycí leptací zařízení pro polovodičový průmysl
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Chemické boxy pro polovodičový průmysl a laboratoře
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Systémy distribuce chemikálií
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Modernizace výrobních linek v oblasti průmyslové automatizace
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Zakázková výroba jednoúčelových strojů
                </a>
              </li>
              <li className="list-footer-li">
                <a className="list-footer-li-a" href="#">
                  Nové výrobky
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          <div className="footer-copy-wrapper">
            <small className="footer-copy-title">
              Copyright &copy; 2019 logo. Všechna práva vyhrazena.
            </small>
            <a className="footer-copy-logo" href="#">
              <img
                className="footer-copy-logo-img"
                src={logo}
                alt="BEPOSITIVE"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
