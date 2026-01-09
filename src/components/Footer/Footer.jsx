import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <img src="src/assets/logo-white/logo-letter-k.svg" alt="Logo Kasa" />
        <img src="src/assets/logo-white/logo-house.svg" alt="Logo Kasa" />
        <img src="src/assets/logo-white/logo-letter-s.svg" alt="Logo Kasa" />
        <img src="src/assets/logo-white/logo-letter-a.svg" alt="Logo Kasa" />
      </div>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
