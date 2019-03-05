import React, { Component } from "react";
import logo from "./styles/images/logo.svg";
import "./App.scss";
import pic01 from "./styles/images/pic01.jpg";
import icon from "./styles/images/icon.png";
import files from "./styles/images/files.png";
import diamond from "./styles/images/diamond.png";

class App extends Component {
  state = {
    positionNavigation: 0,
    navigationFixed: false
  };

  componentDidUpdate() {
    this.setState({
      navigationFixed: true
    });
  }

  render() {
    // const mojeCSS = {
    //   marginBottom: "30px",
    //   transition: "opacity 1.25s ease, transform 0.5s ease",
    //   transitionDelay: "0s"
    // };

    return (
      <div className="container">
        <header className="wrapper-top-bottom header">
          <img className="header-img" src={logo} alt="logo" />
          {/* <img className="" style={mojeCSS} src={logo} alt="logo" /> */}
          <h1 className="header-title">Stellar</h1>
          <p className="header-description">
            Just another free, fully responsive site template <br />
            built by
            <a className="header-description-link title-mark" href="#">
              @ajlkn
            </a>{" "}
            for{" "}
            <a className="header-description-link title-mark" href="#">
              @HTML5 UP
            </a>
          </p>
        </header>
        <div className="main-content">
          <div className="navigation-container" ref="navigation">
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-list-li">
                  <a href="#" className="nav-list-li-link active">
                    Introduction
                  </a>
                </li>
                <li className="nav-list-li">
                  <a href="#" className="nav-list-li-link">
                    First Section
                  </a>
                </li>
                <li className="nav-list-li">
                  <a href="#" className="nav-list-li-link">
                    Second Section
                  </a>
                </li>
                <li className="nav-list-li">
                  <a href="#" className="nav-list-li-link">
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section className="section">
            <div className="wrapper-left-right">
              <div className="wrapper-top-bottom section-two-column">
                <div className="section-item-left">
                  <div>
                    <h2 className="section-title mark-line-left">
                      Ipsum sed adipiscing
                    </h2>
                  </div>
                  <p className="section-description">
                    Sed lorem ipsum dolor sit amet nullam consequat feugiat
                    consequat magna adipiscing magna etiam amet veroeros. Lorem
                    ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                    ipsum dolor sit amet aliquam.
                  </p>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
                <div>
                  <div className="section-image">
                    <img src={pic01} alt="mobile" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="wrapper-left-right">
              <div className="wrapper-top-bottom">
                <h2 className="section-title mark-line-center">
                  Magna veroeros
                </h2>
                <ul className="skill-list">
                  <li className="skill-list-li">
                    <i className="skill-list-li-img-wrapper icon-glass" />
                    <h3 className="skill-list-li-title">Ipsum consequat</h3>
                    <p className="skill-list-li-description">
                      Sed lorem amet ipsum dolor et amet nullam consequat a
                      feugiat consequat tempus veroeros sed consequat.
                    </p>
                  </li>
                  <li className="skill-list-li">
                    <i className="skill-list-li-img-wrapper icon-camera-retro" />
                    <h3 className="skill-list-li-title">Amed sed feugiat</h3>
                    <p className="skill-list-li-description">
                      Sed lorem amet ipsum dolor et amet nullam consequat a
                      feugiat consequat tempus veroeros sed consequat.
                    </p>
                  </li>
                  <li className="skill-list-li">
                    <i className="skill-list-li-img-wrapper icon-key" />
                    <h3 className="skill-list-li-title">Dolor nullam</h3>
                    <p className="skill-list-li-description">
                      Sed lorem amet ipsum dolor et amet nullam consequat a
                      feugiat consequat tempus veroeros sed consequat.
                    </p>
                  </li>
                </ul>
                <div className="btn-wrapper-center">
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="wrapper-left-right">
              <div className="wrapper-top-bottom">
                <h2 className="section-title mark-line-center">
                  Ipsum consequat
                </h2>
                <p className="skill-list-li-description description">
                  Donec imperdiet consequat consequat. Suspendisse feugiat
                  congue posuere. Nulla massa urna, fermentum eget quam aliquet.
                </p>
                <ul className="icon-list">
                  <li className="icon-list-li">
                    <i className="icon-camera-retro" />
                    <span className="icon-list-li-value">5,120</span>
                    <span className="icon-list-li-title">Etiam</span>
                  </li>
                  <li className="icon-list-li">
                    <i className="icon-camera-retro" />
                    <span className="icon-list-li-value">8,192</span>
                    <span className="icon-list-li-title">Magna</span>
                  </li>
                  <li className="icon-list-li">
                    <i className="icon-camera-retro" />
                    <span className="icon-list-li-value">2,048</span>
                    <span className="icon-list-li-title">Tempus</span>
                  </li>
                  <li className="icon-list-li">
                    <i className="icon-camera-retro" />
                    <span className="icon-list-li-value">4,096</span>
                    <span className="icon-list-li-title">Aliquam</span>
                  </li>
                  <li className="icon-list-li">
                    <i className="icon-camera-retro" />
                    <span className="icon-list-li-value">4,096</span>
                    <span className="icon-list-li-title">Aliquam</span>
                  </li>
                </ul>
                <div className="icon-list-li-description">
                  <p>
                    Nam elementum nisl et mi a commodo porttitor. Morbi sit amet
                    nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi,
                    elementum ac arcu sit amet, fermentum pellentesque et purus.
                    Integer maximus varius lorem, sed convallis diam accumsan
                    sed. Etiam porttitor placerat sapien, sed eleifend a enim
                    pulvinar
                  </p>
                  <p>
                    faucibus semper quis ut arcu. Ut non nisl a mollis est
                    efficitur vestibulum. Integer eget purus nec nulla mattis et
                    accumsan ut magna libero. Morbi auctor iaculis porttitor.
                    Sed ut magna ac risus et hendrerit scelerisque. Praesent
                    eleifend lacus in lectus aliquam porta. Cras eu ornare dui
                    curabitur lacinia.
                  </p>
                </div>
                <div className="btn-wrapper-center">
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="wrapper-left-right">
              <div className="wrapper-top-bottom">
                <h2 className="section-title mark-line-center">
                  Congue imperdiet
                </h2>
                <p className="skill-list-li-description description">
                  Donec imperdiet consequat consequat. Suspendisse feugiat
                  congue posuere. Nulla massa urna, fermentum eget quam aliquet.
                </p>
                <div className="btn-wrapper-center">
                  <button className="btn btn-primary">Get Startet</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer">
            <div className="footer-section">
              <h2 className="footer-section-title">Aliquam sed mauris</h2>
              <p className="footer-section-description">
                Sed lorem ipsum dolor sit amet et nullam consequat feugiat
                consequat magna adipiscing tempus etiam dolore veroeros. eget
                dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin,
                ligula erat egestas velit, vitae tincidunt odio.
              </p>
              <button className="btn btn-footer">Learn More</button>
            </div>
            <div className="footer-section">
              <h2 className="footer-section-title">Etiam feugiat</h2>
              <table className="footer-section-table">
                <tr>
                  <td>Address</td>
                  <td>1234 Somewhere Road • Nashville, TN 00000 • USA</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>(000) 000-0000 x 0000</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <a
                      className="title-mark"
                      href="mailto:information@untitled.tld"
                    >
                      information@untitled.tld
                    </a>
                  </td>
                </tr>
              </table>
              <ul className="footer-list-social">
                <li className="footer-list-social-li">
                  <a href="#" className="title-mark">
                    <i className="icon-key" />
                  </a>
                </li>
                <li className="footer-list-social-li">
                  <a href="#" className="title-mark">
                    <i className="icon-key" />
                  </a>
                </li>
                <li className="footer-list-social-li">
                  <a href="#" className="title-mark">
                    <i className="icon-key" />
                  </a>
                </li>
                <li className="footer-list-social-li">
                  <a href="#" className="title-mark">
                    <i className="icon-key" />
                  </a>
                </li>
                <li className="footer-list-social-li">
                  <a href="#" className="title-mark">
                    <i className="icon-key" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-last-sentence">
            © Untitled. Design:{" "}
            <a
              href="#"
              className="footer-section-description-list-li title-mark"
            >
              HTML5 UP.
            </a>{" "}
            Demo Images:{" "}
            <a
              href="#"
              className="footer-section-description-list-li title-mark"
            >
              Unsplash.
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
