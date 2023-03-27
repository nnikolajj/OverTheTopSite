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

            <ParallaxLayer offset={0} speed={-0.5} style={{opacity: "0.2"}}>
                {Array(25).fill(0).map((i): JSX.Element => {
                    return(<img src={banana} style={{margin: "4%"}}/>)
                })
                }
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.3} style={{opacity: "0.4"}}>
                {Array(25).fill(0).map((i): JSX.Element => {
                    return(<img src={banana} style={{margin: "6%"}}/>)
                })
                }
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.1} style={{opacity: "0.6"}}>
                {Array(25).fill(0).map((i): JSX.Element => {
                    return(<img src={banana} style={{margin: "8%"}}/>)
                })
                }
            </ParallaxLayer>


            {/*Array(30).fill(0).map((i): JSX.Element => {

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
            )*/}


</div>
)

}
export default BananaParallax;
