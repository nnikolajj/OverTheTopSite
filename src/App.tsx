import React from "react";
import "./App.css";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


// @ts-ignore
import bananaPeeler from "../src/images/BananaPeeler.jpeg";

function App() {
  return (
          <Parallax pages={4} style={{ top: '0', left: '0', backgroundColor: '#ffffa1' }}>
              <ParallaxLayer offset={0.5} speed={2.5} style={{ backgroundColor: '#ffffa1'}}>
                  <h1 className="title">Banana Peeler</h1>
              </ParallaxLayer>

              <ParallaxLayer
                  offset={1}
                  speed={0}
                  factor={1}
              >  <div>
                  Our automatic diesel powered banana peelers are some of the best in the
                  industry. Their raw power and throughput is still unmatched and even
                  their precision is known for the pinpoint accuracy. We have models for
                  all sizes.
              </div>
              </ParallaxLayer>


              <ParallaxLayer
                  offset={1.5}
                  speed={2}
                  factor={1}
              ><div>Features</div>
                  <ul>
                      <li>&gt;1000 bananas/m on the biggest models</li>
                      <li>perfect accuracy of peels</li>
                      <li>no wasted material</li>
                      <li>no electricity connection required</li>
                  </ul>
              </ParallaxLayer>



              <ParallaxLayer
                  offset={2}
                  speed={3}
                  factor={1}>
                  <div>
                      I bought the biggest model for our family, our children love bananas so
                      much. My husband has already convinced me that we need a second one!
                  </div>
              </ParallaxLayer>

              <ParallaxLayer
                  offset={2.3}
                  speed={1}
                  factor={3}>
                  <div>
                      I wanted to overthrow the government and was buying some guns when I saw
                      an ad for this machine. I couldn't resist and spent all my money on it.
                      I have eaten a lot of bananas since then.
                  </div>
              </ParallaxLayer>

              <ParallaxLayer
                  offset={3}
                  speed={2}
                  factor={1}>
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
  );
}

export default App;
