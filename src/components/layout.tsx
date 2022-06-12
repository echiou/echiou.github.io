import * as React from "react";
import "../styling/main.scss";

// export default function Layout({ children }) {

const Layout = ({ children }) => {
  const activeClass = "active";

  const [navActive, setNavActive] = React.useState(false);

  return (
    <main>
      <div className="header header-fixed u-justify-center p-0 m-0">
        <div className="header-brand p-0 pl-2">
          <div className="nav-item no-hover p-0">
            <a className="p-0" href="/">
              <span className="play-link">ethan</span>
              &nbsp;
              <span className="work-link">chiou</span>
            </a>
          </div>
          <div
            className={`nav-btn ${navActive ? activeClass : ""}`}
            onClick={() => (navActive ? setNavActive(false) : setNavActive(true))}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`header-nav ${navActive ? activeClass : ""}`}>
          <div className="nav-right p-0 pr-2-md">
            <div className="nav-item no-hover p-0 pr-1-md">
              <a href="/work" className="work-link u-justify-center p-0">
                work
              </a>
            </div>
            <div className="nav-item no-hover p-0 pl-1-md">
              <a href="/play" className="play-link u-justify-center p-0">
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
