import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import "./MainLayout.scss";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
