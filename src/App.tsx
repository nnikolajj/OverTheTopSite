import React from "react";
import "./App.css";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
// @ts-ignore
import bananaPeeler from "../src/images/BananaPeeler.jpeg";
// @ts-ignore
import bananaPeelerTractor from "../src/images/TractorBananaPeeler.jpeg";
import {Bananas} from "./Bananas";
import {random} from "./random";
import BananaParallax from "./BananaParallax";
import {Container, Col, Row} from "react-bootstrap";
import Peeler from "./Peeler";

// Only seed it once at startup to ensure determinism
const INITIAL_SEED = Math.random();

console.log(INITIAL_SEED);

function App() {
    const randomState = random(INITIAL_SEED);

    return (
        <Container>
            <Parallax
                pages={3.2}
                style={{top: "0", left: "0", backgroundColor: "#ffffa1"}}
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
                            <h2 className="sub-title">
                                The fastest and most powerful banana peeler in the world.
                            </h2>
                        </Col>
                    </Row>
                </ParallaxLayer>

                <ParallaxLayer offset={0.7} speed={0}>
                    <Bananas randomState={randomState}/>
                </ParallaxLayer>

                <ParallaxLayer offset={0.7} speed={-0.1} factor={3}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}></Col>
                    </Row>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5} factor={0}>
                    <p className={"leftSide"}>
                        Our automatic diesel powered banana peelers are some of the best in
                        the industry. Their raw power and throughput is still unmatched and
                        even their precision is known for the pinpoint accuracy. We have
                        models for all sizes.
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={0.5}
                    factor={1}
                    style={{marginTop: "-0.1%"}}
                >
                    <div className={"leftSide"}>
                        <h2>Features</h2>
                        <ul>
                            <li>&gt;1000 bananas/m on the biggest models</li>
                            <li>perfect accuracy of peels</li>
                            <li>no wasted material</li>
                            <li>no electricity connection required</li>
                        </ul>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.2} speed={2} factor={0}>

                    <p className={"rightSide"}>
                        <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <br/>
                        I bought the biggest model for our family, our children love
                        bananas so much. My Wife has already convinced me that we need
                        a second one!
                        <br/>
                        <br/>
                        <h3>~ King Kong</h3>
                        <br/>
                    </p>

                    <p className={"rightSide down"}>
                        <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <br/>
                        I wanted to overthrow the government and was buying some
                        guns when I saw an ad for this machine. I couldn't resist and
                        spent all my money on it. I have eaten a lot of bananas since
                        then.
                        <br/>
                        <br/>
                        <h3>~ Koba</h3>
                        <br/>
                    </p>

                    <p className={"rightSide down2"}>
                        <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        <br/>
                        I took the false Banana :(
                        <br/>
                        <br/>
                        <h3>~ Wiener Peter</h3>
                        <br/>
                    </p>

                </ParallaxLayer>

                <ParallaxLayer offset={1.9} speed={1} factor={1} style={{marginTop: "30%"}}>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Peeler/>
                        </Col>
                    </Row>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={2} factor={1}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col>
                            <div className={"card selfcard"}>
                                <img
                                    className="card-img-top"
                                    src={bananaPeeler}
                                    alt="Big industrial banana peeler machine"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Industrial Machine</h5>
                                    <p className="card-text">
                                        Industrial Banana Peeler (3'000 Bananas/min).
                                    </p>
                                    <br/> <p> Price:</p>
                                    <p className="card-text">$100,000</p>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="card selfcard">
                                <img
                                    className="card-img-top"
                                    src={bananaPeelerTractor}
                                    alt="Tractor-like banana peeler with many bananas"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Tractor</h5>
                                    <p className="card-text">
                                        A portable Banana Peeler Machine as a tractor.
                                    </p>
                                    <br/> <p> Price:</p>
                                    <p className="card-text">$10,000</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ParallaxLayer>

                <ParallaxLayer offset={2.9} speed={1}>
                    <div className={"footer"}>
                        <Row>
                            <Col sm={2}></Col>
                            <Col>
                                <br/>
                                <h4>Sources:</h4>
                            </Col>
                            <Col>
                                <br/>
                                <a href={"https://github.com/twitter/twemoji"}>
                                    Rotating banana: Tweemoji
                                </a>
                                <p>Product images: StableDiffusion</p>
                                <a href={"https://web.dev/css-border-animations/"}>
                                    CSS Border animation on the title
                                </a>
                                <br/>
                                <a href={"https://www.react-spring.dev/docs/components/parallax"}>
                                    Parallax
                                </a>
                                <br/>
                                <a href={"https://fontawesomeicons.com/svg/icons/banana"}>
                                    Banana svg for Background and Peeler
                                </a>
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </Container>
    );
}

export default App;
