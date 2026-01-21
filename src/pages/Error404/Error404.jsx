import "./Error404.scss";

export default function Error404() {
  return (
    <div className="error-404">
      <h1 className="error-404__title">404</h1>
      <p className="error-404__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a className="error-404__link" href="/">
        Retourner sur la page d’accueil
      </a>
    </div>
  );
}
