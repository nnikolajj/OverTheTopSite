import React, {Component, useState} from "react";
import "./App.css";
import {Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";

// @ts-ignore
import {random} from "./random";

// @ts-ignore
import banana from "../src/images/ownBanana.svg";


function BananaParallax() {

    return (
        <div>
            {Array(30).fill(0).map((i): JSX.Element => {

                let a = Math.random()*3;
                let b = (Math.random()*20)/100;

                let c = Math.random() *100 + 1;

                let cc = c+"%"

                    console.log(i)
                return(
                <ParallaxLayer offset={a} speed={-b} style={{left: cc, opacity: b}}>
                    <img src={banana}/>
                </ParallaxLayer>
                )
            }
            )}


</div>
)

}
export default BananaParallax;
