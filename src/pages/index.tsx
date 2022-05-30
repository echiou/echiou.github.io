import * as React from "react";
import "../styling/main.scss";

class Intro extends React.Component<any, any> {
  render() {
    return (
      <div className="row">
        <div className="col-6 u-text-center u-text-right-md">hi</div>
        <div className="col-6 u-text-center u-text-left-md">sup</div>
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
