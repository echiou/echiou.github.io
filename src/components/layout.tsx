import * as React from "react";
import "../styling/main.scss";

export default function Layout({ children }) {
  return (
    <main>
      <div className="header header-clear">
        <div className="header-brand">
          <div className="nav-item">
            <a href="/">
              <span className="play-link">ethan</span>
              &nbsp;
              <span className="work-link">chiou</span>
            </a>
          </div>
        </div>
      </div>
      {/* <header className="site-header">
        <div className="container navbar">
          <div className="row">
            <div className="col-12">
              <div>
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <a className="work-link" href="/work">
                      work
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a className="play-link" href="/play">
                      play
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {children}
    </main>
  );
}
