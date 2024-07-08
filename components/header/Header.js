import Image from "next/image";

import Navbar from "./NavBar";

const Header = () => {
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="d-flex align-items-center">
            <Image
              className="img-fluid"
              src="/img/logo_munim.svg"
              alt="Munim Consulting Group Logo"
              width={100}
              height={100}
            />
          </a>

          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
