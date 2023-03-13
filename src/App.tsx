import React from "react";
import "./App.css";
// @ts-ignore
import bananaPeeler from "../src/images/BananaPeeler.jpeg";

function App() {
  return (
    <div className="App">
      <h1 className="title">Banana Peeler</h1>

      <div>
        Our automatic diesel powered banana peelers are some of the best in the
        industry. Their raw power and throughput is still unmatched and even
        their precision is known for the pinpoint accuracy. We have models for
        all sizes.
      </div>

      <div>Features</div>
      <ul>
        <li>&gt;1000 bananas/m on the biggest models</li>
        <li>perfect accuracy of peels</li>
        <li>no wasted material</li>
        <li>no electricity connection required</li>
      </ul>

      <div>
        I bought the biggest model for our family, our children love bananas so
        much. My husband has already convinced me that we need a second one!
      </div>

      <div>
        I wanted to overthrow the government and was buying some guns when I saw
        an ad for this machine. I couldn't resist and spent all my money on it.
        I have eaten a lot of bananas since then.
      </div>

      <div>
        <h2>Products</h2>
        <div>
          Large
          <img src={bananaPeeler} alt="large industrial banana peeling machine" />
        </div>
      </div>
    </div>
  );
}

export default App;
