import { useState } from "react";
import logo from "../../assets/image/logos/logo-horizontal.png";
import { Link } from "react-router-dom";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center absolute top-0 left-0 justify-between border-dark z-50 py-8 px-5 w-screen md:px-[5vw] ">
      <Link to="/">
        <img src={logo} alt="" height={225} width={225} />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-[1vh]"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-7 bg-dark"></span>
            <span className="block h-0.5 w-7 bg-dark"></span>
            <span className="block h-0.5 w-7 bg-dark"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-dark"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#313131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/">Home</Link>
              </li>
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/about">About</Link>
              </li>
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/about">Works</Link>
              </li>
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/about">Careers</Link>
              </li>
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/about">FAQs</Link>
              </li>
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/about">Our Clients</Link>
              </li>
              <li className="duration-500 border-b border-dark my-8 uppercase hover:text-primary">
                <Link to="/about">Hire Us</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-inter font-medium text-md">
          <li className="duration-500 hover:text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="duration-500 hover:text-primary">
            <Link to="/about">About</Link>
          </li>
          <li className="duration-500 hover:text-primary">
            <Link to="/about">Works</Link>
          </li>
          <li className="duration-500 hover:text-primary">
            <Link to="/about">Careers</Link>
          </li>
          <li className="duration-500 hover:text-primary">
            <Link to="/about">FAQs</Link>
          </li>
          <li className="duration-500 hover:text-primary">
            <Link to="/about">Our Clients</Link>
          </li>
          <li className="duration-500 hover:text-primary">
            <Link to="/about">Hire Us</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
