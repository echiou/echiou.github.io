import * as React from "react";
import "../styling/main.scss";
import play from "../images/play.jpg";

class Intro extends React.Component<any, any> {
  render() {
    return (
      <div className="content px-12-lg px-36-xl my-0">
        <div className="row">
          <div className="col-6 u-flex u-items-center u-text-left u-text-right-md">
            <p className="m-0">
              {"Hi there! I'm Ethan, a firmware engineer at "}
              <a
                href="https://www.span.io/"
                target="_blank"
                className="index-link work-color"
                id="index-span"
              >
                Span
              </a>
              {". I've previously worked at "}
              <a
                href="https://www.samsara.com/"
                target="_blank"
                className="index-link work-color"
                id="index-samsara"
              >
                Samsara
              </a>
              {"."}
              <br />
              <br />
              {"In my free time, I enjoy "}
              <a
                href="/play"
                className="index-link play-color"
                id="index-photos"
              >
                taking photos
              </a>
              {", drinking coffee, and going camping."}
              <br />
              <br />
              {"Feel free to contact me at "}
              <a
                href="mailto:{{ site.email | encode_email }}"
                className="index-link"
              >
                &#101;&#116;&#104;&#097;&#110;&#119;&#099;&#104;&#105;&#111;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
              </a>
              .
            </p>
          </div>
          <div className="col-6 u-text-left u-flex u-items-center">
            <img className="img-stretch" src={play}></img>
          </div>
        </div>
      </div>
    );
  }
}

const IndexPage: React.FC = () => {
  return (
    <main>
      <section>
        <div className="hero fullscreen">
          <div className="hero-body">
            <Intro />
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
