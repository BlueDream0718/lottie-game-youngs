import "../stylesheets/styles.css";
import { useEffect, useState, useContext, useRef } from "react";
import { prePathUrl, startRepeartInterval, clearRepeatInterval } from "../components/CommonFunctions"
import loadAnimation from '../utils/loadAnimation';
import PlayingBoard from "./PlayingBoard"
import Excellent from "./Excellent"

let animationData
new loadAnimation('main/Boy.json').then(result => {
    animationData = result;
}, () => { });

import Lottie from "react-lottie";
import { UserContext } from "../components/BaseShot";
import BaseImage from "../components/BaseImage";

let timerList = []
let currentDoneList = []


export default function Scene2({ nextFunc, _geo, _baseGeo, setMuteBG }) {
    const audioList = useContext(UserContext)
    const [isShowBoard, setShowBoard] = useState(false)
    const panelRef = useRef();
    const myhand = useRef();
    const introBoy = useRef();
    const skipButton = useRef();
    const animationBoyRef = useRef();
    const excellentRef = useRef();
    const nextImgRef = useRef();

    function returnOption() {
        return {
            loop: true,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    useEffect(() => {

        audioList.bodyAudio.src = './sounds/SB_31_Audio_02.mp3';
        audioList.subBodyAudio1.src = './sounds/SB_31_Audio_03.mp3';
        audioList.subBodyAudio2.src = './sounds/SB_31_Audio_04.mp3';

        animationBoyRef.current.stop();
        timerList[0] = setTimeout(() => {
            animationBoyRef.current.play();
            audioList.bodyAudio.play();
            timerList[1] = setTimeout(() => {
                animationBoyRef.current.stop();
                timerList[2] = setTimeout(() => {
                    playAnimalGame();

                }, 1000);
            }, audioList.bodyAudio.duration * 1000);
        }, 2000);


        setTimeout(() => {
            setShowBoard(true)
        }, 1000);

        return () => {

        }

    }, [])


    const playAnimalGame = () => {

        audioList.clapAudio.pause();
        audioList.yeahAudio.pause();

        audioList.clapAudio.currentTime = 0;
        audioList.yeahAudio.currentTime = 0

        introBoy.current.className = 'hide'
        skipButton.current.className = 'hide'

        animationBoyRef.current.stop();
        panelRef.current.className = 'aniObject'
        panelRef.current.style.display = 'inline-block'

        clearTimeout(timerList[0])
        clearTimeout(timerList[1])
        audioList.bodyAudio.pause()

        if (currentDoneList.length == 0) {

            // setTimeout(() => {
            //     introBoy.current.style.left = _geo.width * 0.5 + _geo.left + 'px'
            // }, 500);
            panelRef.current.style.pointerEvents = 'none'

            timerList[3] = setTimeout(() => {
                nextImgRef.current.src = prePathUrl() + 'images/Buttons/Next_blue.svg'

                // introBoy.current.className = 'show'
                timerList[4] = setTimeout(() => {
                    audioList.subBodyAudio1.play();
                    animationBoyRef.current.play();


                    timerList[5] = setTimeout(() => {
                        animationBoyRef.current.stop();
                        myhand.current.className = 'show'
                        timerList[6] = setTimeout(() => {
                            myhand.current.style.transition = '1s'
                            myhand.current.style.left = _baseGeo.width * 0.27 + _baseGeo.left + 'px'
                            myhand.current.style.top = _baseGeo.height * 0.655 + _baseGeo.bottom + 'px'
                            timerList[7] = setTimeout(() => {
                                myhand.current.style.transition = '0.3s'
                                myhand.current.style.transform = "rotateX(-40deg) rotateZ(-20deg)"
                                timerList[8] = setTimeout(() => {
                                    myhand.current.style.transform = ""
                                    timerList[9] = setTimeout(() => {
                                        myhand.current.className = 'hide'
                                        audioList.subBodyAudio2.play();
                                        animationBoyRef.current.play();
                                        timerList[10] = setTimeout(() => {
                                            animationBoyRef.current.stop();
                                            timerList[11] = setTimeout(() => {
                                                audioList.bodyAudio.src = './sounds/SB_31_Audio_17.mp3';
                                                introBoy.current.className = 'hide'

                                                timerList[12] = setTimeout(() => {
                                                    introBoy.current.style.left = _geo.width * 0.3 + _geo.left + 'px'
                                                }, 500);
                                                panelRef.current.style.pointerEvents = ''
                                                startRepeartInterval(audioList.repeatAudio);
                                            }, 500);
                                        }, audioList.subBodyAudio2.duration * 1000);
                                    }, 1000);
                                }, 300);
                            }, 1000);
                        }, 800);
                    }, audioList.subBodyAudio1.duration * 1000);
                }, 500);
            }, 1500);
        }

        else {
            excellentRef.current.className = 'hide'
            audioList.bodyAudio.src = './sounds/SB_31_Audio_28.mp3';
            setTimeout(() => {
                startRepeartInterval(audioList.repeatAudio);
                panelRef.current.style.pointerEvents = ''
            }, 1000);
        }
    }

    const setFinishGame = (doneList) => {
        panelRef.current.style.pointerEvents = 'none'

        currentDoneList = doneList
        if (currentDoneList.length == 5) {

            excellentRef.current.className = 'aniObject'
            skipButton.current.className = 'aniObject'
            // panelRef.current.className = 'hide'

            // setTimeout(() => {
            //     introBoy.current.className = 'show'
            // }, 500);

            timerList[0] = setTimeout(() => {
                // animationBoyRef.current.play();
                audioList.clapAudio.play();
                audioList.yeahAudio.play();

                timerList[1] = setTimeout(() => {
                    audioList.bodyAudio.play();
                }, 2000);
            }, 1000);
        }
        else {
            audioList.bodyAudio.play();
            setTimeout(() => {
                nextFunc();
            }, audioList.bodyAudio.duration * 1000 + 1000);
        }
    }

    const clickedFirst = () => {
        // timerList.map(timer => clearTimeout(timer))
        // audioList.bodyAudio.src = './sounds/SB_31_Audio_17.mp3';
        // introBoy.current.className = 'hide'

        // timerList[12] = setTimeout(() => {
        //     introBoy.current.style.left = _geo.width * 0.3 + _geo.left + 'px'
        // }, 500);

        // startRepeartInterval(audioList.repeatAudio);
    }

    return (
        <div className="aniObjectDelay"  >
            {
                isShowBoard
                &&
                <div
                    ref={panelRef}
                    className='hideObject'
                    style={{ pointerEvents: 'none', display: 'none' }}
                >
                    <PlayingBoard clickedFirst={clickedFirst} clearRepeatInterval={clearRepeatInterval} setFinishGame={setFinishGame} _baseGeo={_baseGeo} />

                </div>
            }

            <div ref={excellentRef}
                className='hideObject'
            >
                <Excellent _geo={_geo} _baseGeo={_baseGeo} />
            </div>

            <div
                ref={skipButton}
                className='commonButton'
                onClick={() => {
                    setTimeout(() => {
                        playAnimalGame();
                    }, 200);
                }}
                style={{
                    position: "fixed", width: _geo.width * 0.055 + "px",
                    height: _geo.width * 0.055 + "px",
                    right: "2%"
                    , bottom: "5%", cursor: "pointer",
                }}>
                <img
                    ref={nextImgRef}
                    draggable={false}
                    width={"100%"}
                    src={prePathUrl() + 'images/Buttons/Skip_blue.svg'}
                />
            </div>

            <div
                ref={myhand}
                className='hideObject'
                style={{
                    position: "fixed", width: _baseGeo.width * 0.03 + "px",
                    left: _baseGeo.left + _baseGeo.width * 0.5 + "px",
                    top: _baseGeo.bottom + _baseGeo.height * 0.78 + "px",
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                <img draggable={false}
                    width={"100%"}
                    src={"images/SB_31_Prop_Interactives/SB_09_PI_Hand.svg"}
                />
            </div>


            <div
                ref={introBoy}
                style={{
                    position: "fixed", width: _geo.width * 0.4 + "px",
                    left: _geo.width * 0.3 + _geo.left + "px",
                    bottom: -0.05 * _geo.height + "px",
                    overflow: 'hidden',
                }}>

                <Lottie
                    ref={animationBoyRef}
                    options={returnOption()}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                    isStopped={true}
                />
            </div>
        </div>
    );
}
