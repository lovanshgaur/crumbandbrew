import Header from "@/components/menu/Header";
import Aside from "@/components/menu/Aside";
import MainMenu from "@/components/menu/MainMenu";
import Footer from "@/components/menu/Footer";

export default function Menu() {
  return (
    <>
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="menu-container">
        <Aside />
        <MainMenu />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}
