import React, { useState } from "react";
import "./App.css";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
// @ts-ignore
import banana from "./images/banana.svg";
// @ts-ignore
import bananaPeeler from "../src/images/BananaPeeler.jpeg";
// @ts-ignore
import bananaPeelerTractor from "../src/images/TractorBananaPeeler.jpeg";
import { Bananas } from "./Bananas";
import { random } from "./random";
import BananaParallax from "./BananaParallax";
import { Container, Col, Row } from "react-bootstrap";
import Peeler from "./Peeler";

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
        <BananaParallax></BananaParallax>
        <ParallaxLayer offset={0.4} speed={0}>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <h1 className="main-title">Banana Peeler</h1>
            </Col>
          </Row>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0}>
          <Row>
            <Col sm={4}></Col>
            <Col sm={5}>
              <div>
                The fastest and most powerful banana peeler in the world.
              </div>
            </Col>
          </Row>{" "}
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0}>
          <Bananas randomState={randomState} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={-0.1} factor={3}>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}></Col>
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
        <ParallaxLayer offset={1.5} speed={0.5} factor={0}>
          <p className={"description"}>
            I bought the biggest model for our family, our children love bananas
            so much. My husband has already convinced me that we need a second
            one!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={2} factor={3}>
          <p className={"features"}>
            I wanted to overthrow the government and was buying some guns when I
            saw an ad for this machine. I couldn't resist and spent all my money
            on it. I have eaten a lot of bananas since then.
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2} factor={1}>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Peeler />
              <Peeler />
              <Peeler />
              <Peeler />
              <Peeler />
              <Peeler />
            </Col>
          </Row>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={2} factor={1}>
          <Row>
            <Col sm={2}></Col>
            <Col>
              <div>
                <img
                  src={bananaPeeler}
                  alt="large industrial peeling machine"
                />
              </div>
              <h2>Industrial - $100,000</h2>
            </Col>
          </Row>

          <Row>
            <Col sm={2}></Col>
            <Col>
              <div>
                <img
                  src={bananaPeelerTractor}
                  alt="small peeling machine on a tractor"
                />
              </div>
              <h2>Tractor - $10,000</h2>
            </Col>
          </Row>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2} factor={1}>
          <Row>
            <Col sm={2}></Col>
            <Col>
              <h4>Sources</h4>
              <p>
                Rotating banana: Tweemoji (https://github.com/twitter/twemoji)
              </p>
              <p>Product images: StableDiffusion</p>
              <p>
                CSS Border animation on the title:
                https://web.dev/css-border-animations/
              </p>
            </Col>
          </Row>
        </ParallaxLayer>
      </Parallax>
    </Container>
  );
}

export default App;
