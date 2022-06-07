import * as React from "react";

import Layout from "../components/layout";

import hci from "../images/hci.jpg";
import play from "../images/play.jpg";
import samsara from "../images/samsara.jpg";
import span from "../images/span.jpg";

const Intro = () => {
  const [srcName, setSrcName] = React.useState(hci);

  const introImg = () => {
    return (
      <div
        className="intro-images media-stretch w-100 rat-4-3"
        style={{ backgroundImage: `url(${srcName})` }}
      ></div>
    );
  };

  return (
    <div className="content px-12-lg px-36-xl m-0">
      <div className="row">
        <div className="col-6 u-flex u-items-center u-text-left u-text-right-md">
          <p className="m-0">
            {"Hi there! I'm Ethan, a firmware engineer at "}
            <a
              href="https://www.span.io/"
              target="_blank"
              className="work-link"
              onMouseEnter={() => setSrcName(span)}
            >
              Span
            </a>
            {". I've previously worked at "}
            <a
              href="https://www.samsara.com/"
              target="_blank"
              className="work-link"
              onMouseEnter={() => setSrcName(samsara)}
            >
              Samsara
            </a>
            {"."}
            <br />
            <br />
            {"In my free time, I enjoy "}
            <a
              href="/play"
              className="play-link"
              onMouseEnter={() => setSrcName(play)}
            >
              taking photos
            </a>
            {", drinking coffee, and going camping."}
            <br />
            <br />
            {"Feel free to contact me at "}
            <a href="mailto:{{ site.email | encode_email }}">
              &#101;&#116;&#104;&#097;&#110;&#119;&#099;&#104;&#105;&#111;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </a>
            .
          </p>
        </div>
        <div className="col-6">{introImg()}</div>
      </div>
    </div>
  );
};

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section>
        <div className="hero fullscreen">
          <div className="hero-body p-0 u-justify-center">
            <Intro />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
