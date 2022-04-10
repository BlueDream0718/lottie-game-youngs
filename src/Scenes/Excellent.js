import React, { useContext, useEffect } from 'react';
import "../stylesheets/styles.css";
import Lottie from "react-lottie-segments";
import loadAnimation from "../utils/loadAnimation"
import { UserContext } from "../components/BaseShot"
import { prePathUrl } from "../components/CommonFunctions"

let animationData, animationData1, animationData2, animationData3, animationData4, animationData5, animationData6,
    animationData7, animationData8, animationData9

new loadAnimation('excellent/sh24e.json').then(result => {
    animationData = result;
}, () => { });

new loadAnimation('excellent/sh24X.json').then(result => {
    animationData1 = result;
}, () => { });
new loadAnimation('excellent/sh24c.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('excellent/sh24e2.json').then(result => {
    animationData3 = result;
}, () => { });

new loadAnimation('excellent/sh24l.json').then(result => {
    animationData4 = result;
}, () => { });

new loadAnimation('excellent/sh24l.json').then(result => {
    animationData5 = result;
}, () => { });

new loadAnimation('excellent/sh24E3.json').then(result => {
    animationData6 = result;
}, () => { });

new loadAnimation('excellent/sh24n.json').then(result => {
    animationData7 = result;
}, () => { });

new loadAnimation('excellent/sh24t.json').then(result => {
    animationData8 = result;
}, () => { });

new loadAnimation('excellent/sh24ccc.json').then(result => {
    animationData9 = result;
}, () => { });


export default function Scene18({  _geo, _baseGeo }) {

    const audioList = useContext(UserContext)

    const showSourceList = [
        animationData, animationData1, animationData2, animationData3, animationData4,
        animationData5, animationData6, animationData7, animationData8, animationData9,
    ];

    useEffect(() => {
        return () => {


        }
    }, [])

    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    return (
        <div className='aniObjectDelay'>

            <div style={{
                position: 'fixed', width: _baseGeo.width + 'px',
                height: _baseGeo.height + 'px', left: _baseGeo.left + 'px',
                top: _baseGeo.bottom + 'px'
            }}>
                <img
                    width={'100%'}
                    src={'./images/SB_31_BG/SB08_Well-Done_BG.svg'}

                />
            </div>
            <div
                className="excellentText"
                style={{
                    position: "fixed", width: _geo.width * 1 + "px"
                    , left: _geo.left - _geo.width * 0 + "px",
                    top: _geo.top - _geo.height * 0 + "px",
                    overflow: 'hidden'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/excellent/SB08_Excellent_Particles.svg"}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.11 + "px"
                , left: _geo.left + _geo.width * 0.09 + "px",
                top: _geo.top + _geo.height * 0.35 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(6)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.11 + "px"
                , left: _geo.left + _geo.width * 0.18 + "px",
                top: _geo.top + _geo.height * 0.45 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.11 + "px"
                , left: _geo.left + _geo.width * 0.28 + "px",
                top: _geo.top + _geo.height * 0.45 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div style={{
                position: "fixed", width: _geo.width * 0.11 + "px"
                , left: _geo.left + _geo.width * 0.37 + "px",
                top: _geo.top + _geo.height * 0.45 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.09 + "px"
                , left: _geo.left + _geo.width * 0.46 + "px",
                top: _geo.top + _geo.height * 0.32 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.09 + "px"
                , left: _geo.left + _geo.width * 0.51 + "px",
                top: _geo.top + _geo.height * 0.32 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.11 + "px"
                , left: _geo.left + _geo.width * 0.58 + "px",
                top: _geo.top + _geo.height * 0.46 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.11 + "px"
                , left: _geo.left + _geo.width * 0.67 + "px",
                top: _geo.top + _geo.height * 0.45 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(7)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.09 + "px"
                , left: _geo.left + _geo.width * 0.78 + "px",
                top: _geo.top + _geo.height * 0.39 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(8)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _geo.width * 0.06 + "px"
                , left: _geo.left + _geo.width * 0.86 + "px",
                top: _geo.top + _geo.height * 0.39 + "px",
            }}>
                <Lottie autoplay loop options={returnOption(9)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
           
        </div>
    );
}
