import * as React from "react";
import "../styling/main.scss";

// export default function Layout({ children }) {

const Layout = ({ children }) => {
  const activeClass = "active";

  const [navActive, setNavActive] = React.useState(false);

  return (
    <main>
      <div className="header header-fixed p-0 px-12-lg px-36-xl m-0">
        <div className="header-brand px-2 u-center">
          <div className="nav-item no-hover p-0">
            <a className="p-0" href="/">
              <span className="play-link">ethan</span>
              &nbsp;
              <span className="work-link">chiou</span>
            </a>
          </div>
        </div>
        <div
          className={`nav-btn u-center ${navActive ? activeClass : ""}`}
          onClick={() => (navActive ? setNavActive(false) : setNavActive(true))}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`header-nav ${navActive ? activeClass : ""}`}>
          <div className="nav-right px-2">
            <div className="nav-item no-hover px-1">
              <a href="/work" className="work-link u-center p-0">
                work
              </a>
            </div>
            <div className="nav-item no-hover px-1">
              <a href="/play" className="play-link u-center p-0">
                play
              </a>
            </div>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
};

export default Layout;
