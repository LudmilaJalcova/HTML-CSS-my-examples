import React, { Fragment } from "react";
import "./basicInfo.scss";
import basicInfo from "./images/basicInfoContent.png";

const BasicInfo = () => {
  return (
    <Fragment>
      <nav className="nav-bc">
        <div className="container nav">
          <a className="nav-products" href="#">
            Produkty a služby
          </a>
          <ul className="nav-list">
            <li className="nav-list-li">
              Novinky
              <a className="nav-list-li-a" href="#">
                Novinky
              </a>
            </li>
            <li className="nav-list-li">
              Základní informace
              <a className="nav-list-li-a active" href="#">
                Základní informace
              </a>
            </li>
            <li className="nav-list-li">
              Kontakt
              <a className="nav-list-li-a" href="#">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="section">
        <div className="container content">
          <div className="content-box">
            <ul className="content-link">
              <li className="content-link-li">
                <a className="content-link-li-a" href="#">
                  <i className="icon-home" />
                </a>
              </li>
              <li className="content-link-li">
                <a className="content-link-li-a" href="#">
                  Polo vodičový průmysl
                </a>
              </li>
              <li className="content-link-li">
                <a className="content-link-li-a" href="#">
                  O nás
                </a>
              </li>
              <li className="content-link-li">
                <a className="content-link-li-a" href="#">
                  Základní informace
                </a>
              </li>
            </ul>
            <h1 className="content-title">Základní informace</h1>
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <img className="content-img" src={basicInfo} alt="basic info" />
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <h3 className="content-contact-title">Kontaktujte nás</h3>
          <a className="content-contact-tel" href="tel:+420123456789">
            +420 123 456 789
          </a>
          <a className="content-contact-mail" href="mailto:info@all4fab.cz">
            info@all4fab.cz
          </a>
          <a href="#" className="content-contact-form">
            Kontaktní formulář
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default BasicInfo;
