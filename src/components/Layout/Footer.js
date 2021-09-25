import React from "react";
import { Link } from "react-router-dom";
import { mainNav } from "../../constants";
import Grid from "../Grid";

// const footerAboutLinks = [
//   {
//     display: "About",
//     path: "/",
//   },
//   {
//     display: "About 2",
//     path: "/about",
//   },
//   {
//     display: "About 3",
//     path: "/about",
//   },
//   {
//     display: "About 4",
//     path: "/about",
//   },
//   {
//     display: "About 5",
//     path: "/about",
//   },
// ];

const footerCustomerLinks = [
  {
    display: "Telegram",
    path: "https://t.me/jsxdev",
  },
  {
    display: "Facebook",
    path: "https://www.facebook.com/ibrokhim.ismoilov.75",
  },
  {
    display: "Instagram",
    path: "https://www.instagram.com/ibrokhimuz/?hl=ru",
  },
  {
    display: "Youtube",
    path: "https://youtube.com/c/ibrokhimismoilov",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div className="footer__item">
            <h1 className="footer__title">Contact</h1>
            <div className="footer__content">
              <p>
                Phone: <strong>+998 93 989 98 99</strong>
              </p>
              <p>
                Email: <strong>mr017programmer@gmail.com</strong>
              </p>
              <p>
                Address: <strong>UZB. Fergana</strong>
              </p>
            </div>
          </div>
          <div className="footer__item">
            <h1 className="footer__title">Menus</h1>
            <div className="footer__content">
              {mainNav.map((item, index) => {
                return (
                  <p key={index}>
                    <Link to={`${item.path}`}>{item.display}</Link>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="footer__item">
            <h1 className="footer__title">Socials</h1>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => {
                return (
                  <p key={index}>
                    <a href={`${item.path}`} target="_blank" rel="noreferrer">
                      {item.display}
                    </a>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="footer__item">
            <Link to="/" className="footer__title footer__logo">
              JSXDEV
            </Link>
            <div className="footer__content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                dolorum nemo beatae, delectus commodi tempore, ratione, eum sint
                molestiae fugit adipisci provident iure. Deleniti esse illo
                optio aspernatur vitae perferendis?
              </p>
            </div>
          </div>
        </Grid>
      </div>
      <div className="footer__bottom">
        <a target="_blank" rel="noreferrer" href="https://ibrokhim.uz">
          www.ibrokhim.uz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
