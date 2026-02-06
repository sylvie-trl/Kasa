import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src="/logo-blanc.svg"
        alt="Logo Kasa blanc"
        className="footer__logo"
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
