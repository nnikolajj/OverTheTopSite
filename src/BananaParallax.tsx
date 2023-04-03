import React from "react";
import "./App.css";
import { ParallaxLayer } from "@react-spring/parallax";

// @ts-ignore
import banana from "../src/images/ownBanana.svg";

function BananaParallax() {
  return (
    <div>
      <ParallaxLayer offset={0.1} speed={-0.5} style={{ opacity: "0.2" }}>
        {Array(50)
          .fill(0)
          .map((i): JSX.Element => {
            return <img alt="banana" src={banana} style={{ margin: "4%" }} />;
          })}
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.3} style={{ opacity: "0.4" }}>
        {Array(40)
          .fill(0)
          .map((i): JSX.Element => {
            return <img alt="banana" src={banana} style={{ margin: "6%" }} />;
          })}
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.1} style={{ opacity: "0.6" }}>
        {Array(25)
          .fill(0)
          .map((i): JSX.Element => {
            return <img alt="banana" src={banana} style={{ margin: "8%" }} />;
          })}
      </ParallaxLayer>
    </div>
  );
}
export default BananaParallax;
