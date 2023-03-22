import React, { useState } from "react";
import "./App.css";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
// @ts-ignore
import banana from "./images/banana.svg";

// @ts-ignore
import bananaPeeler from "../src/images/BananaPeeler.jpeg";
import { Bananas } from "./Bananas";
import { random } from "./random";
import { Container, Col, Row } from "react-bootstrap";

// Only seed it once at startup to ensure determinism
const INITIAL_SEED = Math.random();

console.log(INITIAL_SEED);

function App() {
  const randomState = random(INITIAL_SEED);

  return (
    <Container>
      <Parallax
        pages={4}
        style={{ top: "0", left: "0", backgroundColor: "#ffffa1" }}
      >
        <ParallaxLayer offset={0.4} speed={0}>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <h1 className="main-title">Banana Peeler</h1>
            </Col>
          </Row>
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={-0.1} factor={3}>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <Bananas randomState={randomState} />{" "}
            </Col>
          </Row>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} factor={0}>
          <p className={"description"}>
            Our automatic diesel powered banana peelers are some of the best in
            the industry. Their raw power and throughput is still unmatched and
            even their precision is known for the pinpoint accuracy. We have
            models for all sizes.
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={2}
          factor={1}
          style={{ marginTop: "-0.1%" }}
        >
          <div className={"features"}>
            <h2>Features</h2>
            <ul>
              <li>&gt;1000 bananas/m on the biggest models</li>
              <li>perfect accuracy of peels</li>
              <li>no wasted material</li>
              <li>no electricity connection required</li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={3} factor={1}>
          <p>
            I bought the biggest model for our family, our children love bananas
            so much. My husband has already convinced me that we need a second
            one!
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1} factor={3}>
          <p>
            I wanted to overthrow the government and was buying some guns when I
            saw an ad for this machine. I couldn't resist and spent all my money
            on it. I have eaten a lot of bananas since then.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={2} factor={1}>
          <div>
            <h2>Products</h2>
            <div>
              Large
              <img
                src={bananaPeeler}
                alt="large industrial banana peeling machine"
              />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </Container>
  );
}

export default App;
