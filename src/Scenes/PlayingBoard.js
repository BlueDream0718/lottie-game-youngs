import "../stylesheets/styles.css";
import { useContext, useEffect, useState, useRef } from "react";
import BaseImage from "../components/BaseImage";
import { prePathUrl, startRepeartInterval, clearRepeatInterval } from "../components/CommonFunctions"
import { UserContext } from "../components/BaseShot";
import { getCharacterAnimation } from "../components/CommonVarariant"
import Lottie from "react-lottie-segments";

import BackScene1 from "./BackScene1";
import BackScene2 from "./BackScene2";
import BackScene3 from "./BackScene3";
import BackScene4 from "./BackScene4";



const oppositeList = [
    'Chick_B',
    'Cub_B',
    'Dog_B',
    'Dog_F',
    'Sheep_B',
    'Duck_F'
]

const characterList = [
    'Cat',
    'Chick',
    'Cow',
    'Cub',
    'Dog',
    'Duck',
    'Horse',
    'Lamb',
    'Piglet',
    'Sheep',
]
let randomList = []
const objectList = [
    {
        p: 'SB_31_CI_Cat_02', f: 'SB_31_CI_Cat_01', b: 'SB_31_CI_Cat_03',
        pl: true, fl: false, bl: true, ys: 2.2, yl: -0.6, yt: -0.85
        , ps: 1.5, pleft: -0.24, pt: -0.51
    },
    {
        p: 'SB_31_CI_Horse_02_1', f: 'SB_31_CI_Horse_03_1', b: 'SB_31_CI_Hen_01',
        pl: true, fl: true, bl: false, ys: 2.4, yl: -0.7, yt: -1.02
        , ps: 1.4, pleft: -0.22, pt: -0.4
    },
    {
        p: 'SB_31_CI_Cow_01', f: 'SB_31_CI_cuf_02', b: 'SB_31_CI_cuf_01',
        pl: true, fl: false, bl: true, ys: 1.5, yl: -0.2, yt: -0.15
        , ps: 0.85, pleft: 0.04, pt: 0.12
    },

    {
        p: 'SB_31_CI_Lion_03', f: 'SB_31_CI_Lion_01', b: 'SB_31_CI_Lion_02',
        pl: true, fl: true, bl: false, ys: 2.4, yl: -0.7, yt: -1
        , ps: 1.65, pleft: -0.23, pt: -0.75
    },

    {
        p: 'SB_31_CI_Dog01', f: 'SB_31_CI_Puppy02', b: 'SB_31_CI_Puppy01',
        pl: true, fl: false, bl: false, ys: 2.2, yl: -0.6, yt: -0.85
        , ps: 1.3, pleft: -0.16, pt: -0.25
    },
    {
        p: 'SB_31_CI_Duck_01', f: 'SB_31_CI_Duckling_01', b: 'SB_31_CI_Duckling_02',
        pl: true, fl: false, bl: false, ys: 2.2, yl: -0.6, yt: -0.85
        , ps: 1.25, pleft: -0.2, pt: -0.35
    },
    {
        p: 'SB_31_CI_Horse_02', f: 'SB_31_CI_Horse_03', b: 'SB_31_CI_Horse_01'
        , pl: false, fl: true, bl: true, ys: 2.2, yl: -0.6, yt: -0.5
        , ps: 1.6, pleft: -0.33, pt: -0.3

    },

    {
        p: 'SB_31_CI_Goat_03', f: 'SB_31_CI_Goat_01', b: 'SB_31_CI_Goat_02',
        pl: false, fl: false, bl: true, ys: 2.2, yl: -0.6, yt: -0.85
        , ps: 1.5, pleft: -0.18, pt: -0.5

    },

    {
        p: 'SB_31_CI_Pig02', f: 'SB_31_CI_Pig01', b: 'SB_31_CI_Pig03',
        pl: false, fl: true, bl: true, ys: 2.8, yl: -0.9, yt: -1.15
        , ps: 1.5, pleft: -0.22, pt: -0.4
    },
    {
        p: 'SB_31_CI_Sheep_01', f: 'SB_31_CI_Sheep_03', b: 'SB_31_CI_Sheep_02',
        pl: true, fl: true, bl: true, ys: 2.3, yl: -0.7, yt: -0.85
        , ps: 1.6, pleft: -0.34, pt: -0.45
    },
]


let currentSceneNum = 0;

let currentStep = 0;
let currentAniNum = 0;

const scalePosListInfo = [
    ['10%,10%'],
    ['9%,9%'],
    ['6%,6%'],
    ['10%,10%'],
    ['8%,8%'],
    ['8%,8%'],
    ['8%,8%'],
    ['8%,8%'],

    ['10%,10%'],
    ['8%,8%'],

]
const bgInfoList = [
    { c: 0, l: -5, t: -7, s: 1.1, pl: -5, pt: -7 },
    { c: 0, l: 12, t: 4, s: 0.8, pl: 12, pt: 4 },
    { c: 0, l: 7, t: 10, s: 0.9, pl: 7, pt: 10 },

    { c: 0, l: -5, t: -15, s: 1.1, pl: -20, pt: -48 },
    { c: 0, l: 5, t: -5, s: 0.9, pl: 5, pt: -5 },
    { c: 0, l: 0, t: -5, s: 0.9, pl: 0, pt: -5 },
    { c: 0, l: -20, t: -10, s: 1.4, pl: -20, pt: -10 },
    { c: 0, l: 0, t: -20, s: 1.1, pl: 0, pt: -20 },
    { c: 0, l: -5, t: -10, s: 1.1, pl: -10, pt: -20 },
    { c: 0, l: -5, t: -5, s: 1.1, pl: -5, pt: -5 },
]

const colorList = [
    '#fff257', '#76eefe'
]

const pathList1 = [
    [
        { x: 28.99, y: 58.87 },
        { x: 32.37, y: 55.50 },
        { x: 26.33, y: 48.13 },
        { x: 29.49, y: 44.62 },

        { x: 22.82, y: 36.75 },
        { x: 40.23, y: 20.25 },
        { x: 52.39, y: 33.37 },
        { x: 49.79, y: 37.75 },
        { x: 56.53, y: 45 }
    ],

    [
        { x: 40.03, y: 55 },
        { x: 34.06, y: 48 },
        { x: 36.87, y: 44.25 },
        { x: 30.13, y: 36.5 },
        { x: 39.68, y: 27.50 },
        { x: 45.29, y: 33.5 },
        { x: 42.69, y: 36.75 },
        { x: 51.19, y: 46.14 },
        { x: 45.15, y: 52.75 },
    ]
    ,
    [
        { x: 37.01, y: 66.87 },
        { x: 43.75, y: 59.62 },
        { x: 53.09, y: 69.63 },
        { x: 67.21, y: 55.37 },
        { x: 63.97, y: 50.88 },
        { x: 53.02, y: 61.75 },
        { x: 49.93, y: 58.25 },
        { x: 64.33, y: 43.75 },
        { x: 67.49, y: 47.13 },
        { x: 70.93, y: 43.5 },
        { x: 64.12, y: 36.75 },
        { x: 59.76, y: 40.37 },
        { x: 56.46, y: 37 },
        { x: 60.67, y: 32.12 }
    ],
    [
        { x: 78.58, y: 51.25 },
        { x: 74.58, y: 47.88 },
        { x: 71.63, y: 51.25 },
        { x: 75, y: 55.25 },
        { x: 57.37, y: 73.88 },
        { x: 60.53, y: 77.25 },
        { x: 68.12, y: 70.13 },
        { x: 71.35, y: 73.25 },
        { x: 75.07, y: 69.63 },
        { x: 71.91, y: 66 },
        { x: 78.44, y: 59.62 },
        { x: 82.02, y: 62.75 },
        { x: 78.65, y: 66.63 }
    ]
]


const pathList2 = [
    [
        { x: 27.88, y: 67.13 },
        { x: 38.13, y: 57 },
        { x: 32.30, y: 50.25 },
        { x: 41.5, y: 40.88 },
        { x: 38.34, y: 37.25 },
        { x: 44.03, y: 31.5 },
        { x: 47.61, y: 34.88 },
        { x: 54.56, y: 28 }
    ]
    ,
    [
        { x: 35.18, y: 67.37 },
        { x: 41.5, y: 61 },
        { x: 47.4, y: 68 },
        { x: 57.16, y: 57.37 },
        { x: 51.4, y: 50.75 },
        { x: 59.9, y: 41.38 },
        { x: 56.67, y: 38.12 },
        { x: 49.37, y: 45.62 }
    ],
    [
        { x: 61.8, y: 60.62 },
        { x: 63.9, y: 57.13 },
        { x: 58.92, y: 50.62 },
        { x: 66.36, y: 41.13 },
        { x: 57.37, y: 32.12 },
        { x: 38.9, y: 50.5 },
        { x: 47.54, y: 59.62 }
    ],
    [
        { x: 77.25, y: 50.75 },
        { x: 70.79, y: 57.25 },
        { x: 64.75, y: 51 },
        { x: 73.46, y: 40.75 },
        { x: 67.98, y: 34.38 },
        { x: 71, y: 30.75 },
        { x: 67.49, y: 27.25 },
        { x: 63.69, y: 30.38 },
        { x: 59.76, y: 26.5 }
    ]
]


//not mentionded....
const pathList3 = [
    [

        { x: 21.5, y: 60.25 },
        { x: 29.28, y: 68.87 },
        { x: 34.34, y: 62.88 },
        { x: 31.74, y: 59.88 },
        { x: 40.17, y: 50.5 },
        { x: 34.69, y: 44.37 },
        { x: 45.29, y: 33.5 },
        { x: 50.91, y: 41.38 },
        { x: 44.24, y: 48.13 }
    ]
    ,
    [

        { x: 69.8, y: 54.25 },
        { x: 63.83, y: 59.88 },
        { x: 55.13, y: 50.38 },
        { x: 65.52, y: 37.5 },
        { x: 57.02, y: 27.87 },
        { x: 50.35, y: 35 },
    ],
    [

        { x: 38.55, y: 59.88 },
        { x: 43.89, y: 53.87 },
        { x: 49.79, y: 60 },
        { x: 47.33, y: 63.5 },
        { x: 51.05, y: 66.75 },
        { x: 56.67, y: 60.25 },
        { x: 48.6, y: 51.25 },
        { x: 60.39, y: 37.87 },
        { x: 57.02, y: 34.5 },
        { x: 53.37, y: 38.5 },
    ],
    [

        { x: 76.54, y: 47.75 },
        { x: 82.23, y: 40.75 },
        { x: 72.61, y: 31 },
        { x: 69.45, y: 34.5 },
        { x: 75.42, y: 40.75 },
        { x: 63.55, y: 53.5 },
        { x: 60.25, y: 50 },
        { x: 68.96, y: 40.12 },
    ]
]

const pathList4 = [
    [
        { x: 26.97, y: 52.75 },
        { x: 21.35, y: 59.25 },
        { x: 27.32, y: 67 },
        { x: 37.36, y: 56.13 },
        { x: 43.19, y: 62.5 },
        { x: 41.29, y: 65 },
        { x: 45.51, y: 70 }
    ]
    ,
    [

        { x: 35.11, y: 65.12 },
        { x: 44.45, y: 75.38 },
        { x: 59.13, y: 58.87 },
        { x: 46.77, y: 45.62 },
    ],
    [

        { x: 57.23, y: 69.37 },
        { x: 66.36, y: 58.63 },
        { x: 47.26, y: 38.87 },
        { x: 41.08, y: 46.37 },
        { x: 53.72, y: 59.5 },
        { x: 48.26, y: 66.25 },
    ],
    [

        { x: 72.82, y: 72 },
        { x: 67.21, y: 65.75 },
        { x: 73.74, y: 58.25 },
        { x: 70.37, y: 54.13 },
        { x: 73.53, y: 50.75 },
        { x: 64.12, y: 40.5 },
        { x: 60.46, y: 43.75 },
        { x: 48.1, y: 29.75 },
        { x: 36.94, y: 41.75 },
        { x: 34.48, y: 38.5 },
        { x: 31.11, y: 42.5 },
        { x: 41, y: 53.25 },
    ]
]

const addPosList = [
    { x: 0.1, y: 0.1 },//cat
    { x: 0.00, y: 0.00 },//chick
    { x: 0.15, y: 0.15 },//cow
    { x: 0.2, y: 0.2 },//cub
    { x: 0.1, y: 0.1 },//dog
    { x: 0.0, y: 0.0 },//duck
    { x: 0.2, y: 0.2 },//horse
    { x: 0.25, y: 0.25 },//lamb

    { x: 0.2, y: 0.2 },//piglet
    { x: 0.2, y: 0.2 },//sheep
]

const doneList = []


const initialPosInfoList = [
    [
        { x: 22.54, y: 52.12 },
        { x: 26.47, y: 70.25 },
        { x: 44.45, y: 75.25 },
        { x: 84.06, y: 45.25 }
    ],
    [
        { x: 19, y: 57.5 },
        { x: 42.77, y: 76.38 },
        { x: 69.45, y: 68.63 },
        { x: 85.81, y: 58.87 }
    ],
    [
        { x: 28.65, y: 51.75 },
        { x: 77.39, y: 62.12 },
        { x: 45.01, y: 67.87 },
        { x: 83.71, y: 55.25 }
    ],
    [
        { x: 21.98, y: 46.75 },
        { x: 25.07, y: 75.88 },
        { x: 62.08, y: 75.25 },
        { x: 84.34, y: 59.62 }
    ],
    [
        { x: 19, y: 57.5 },
        { x: 42.77, y: 76.38 },
        { x: 69.45, y: 68.63 },
        { x: 85.81, y: 58.87 }
    ],
]

const standardSpeed = 10;

const widthList = [
    { f: 4.5, b: 7, ps: 1.4 },
    { f: 6, b: 5.5, ps: 1.4 },
    { f: 7, b: 7.5, ps: 1.4 },
    { f: 4.8, b: 4.8, ps: 2 },
    { f: 6, b: 6, ps: 1.4 },
    { f: 4.8, b: 4.5, ps: 1.4 },
    { f: 4.5, b: 4.3, ps: 1.4 },
    { f: 4.5, b: 4.3, ps: 1.4 },
    { f: 4, b: 4, ps: 1.8 },
    { f: 4.3, b: 4, ps: 1.4 },
]

const leftList = [
    { f: -0.3, b: -0.4 },
    { f: -0.4, b: -0.4 },
    { f: -0.35, b: -0.4 },
    { f: -0.4, b: -0.4 },
    { f: -0.4, b: -0.3 },
    { f: -0.4, b: -0.4 },
    { f: -0.35, b: -0.3 },
    { f: -0.45, b: -0.3 },
    { f: -0.4, b: -0.25 },

    { f: -0.4, b: -0.25 },
]

const topList = [
    { f: -1.1, b: -0.8 },
    { f: -0.9, b: -0.9 },
    { f: -1.4, b: -1.2 },
    { f: -1.1, b: -0.9 },
    { f: -1.0, b: -0.8 },
    { f: -1.0, b: -0.9 },
    { f: -1.5, b: -1.4 },
    { f: -1.0, b: -0.8 },
    { f: -1.2, b: -0.9 },
    { f: -1.2, b: -0.9 },
]

const correctPathList = [
    1, 2, 0, 2, 2
]






let pathList = [
    pathList1, pathList2, pathList3, pathList4, pathList2
]

let pathInfoList = pathList[0]
let initialPosList = initialPosInfoList[0]
let parentPosList = [
    { x: 43.7, y: 51.7, r: false },
    { x: 48.35, y: 58, r: true },
    { x: 43.5, y: 46.5, r: false },
    { x: 47.14, y: 64.63, r: false },
    { x: 48.35, y: 57.5, r: true },
]

if (randomList.length == 0)
    while (randomList.length != 4) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!randomList.includes(randomNumber))
            randomList.push(randomNumber)
    }


let timerList = []
let lastAudio = null;
let isStarted = false;
export default function Scene3({ setFinishGame, _baseGeo, clickedFirst }) {

    const audioList = useContext(UserContext)
    const [stepState, goNextStep] = useState(0)

    const baseRef = useRef();
    const movingGroup = useRef();
    const parentRef = useRef();
    const parentColorRef = useRef()

    // const characterRef_FList = Array.from({ length: 4 }, ref => useRef())
    // const characterRef_BList = Array.from({ length: 4 }, ref => useRef())

    const characterRef_FHighList = Array.from({ length: 4 }, ref => useRef())
    const characterRef_BHighList = Array.from({ length: 4 }, ref => useRef())


    const objectBackList = Array.from({ length: 4 }, ref => useRef())
    const objectFrontList = Array.from({ length: 4 }, ref => useRef())
    const movingCenterList = Array.from({ length: 4 }, ref => useRef())
    const BackSceneList = Array.from({ length: 5 }, ref => useRef())

    const { width: bW, height: bH } = _baseGeo
    const refMarkList = [
        useRef(), useRef(), useRef(), useRef(), useRef()
    ]

    useEffect(() => {
        randomList.map((value, index) => {
            // setTimeout(() => {
            //     characterRef_FList[index].current.stop();
            //     characterRef_BList[index].current.stop();
            // }, 500);

            let currentAddPos = getAddPos(index, true);

            movingCenterList[index].current.style.left = initialPosList[index].x + currentAddPos.x + '%'
            movingCenterList[index].current.style.top = initialPosList[index].y + currentAddPos.y + '%'
        })

        BackSceneList.map((backScene, index) => {
            if (index > 0)
                backScene.current.className = 'hideObject'
        })

        return () => {

            currentStep = 0;
            currentAniNum = 0;

            randomList = []
            currentSceneNum = 0;
            isStarted = false;

            clearRepeatInterval()

            pathInfoList = pathList[0]
            initialPosList = initialPosInfoList[0]

            if (randomList.length == 0)
                while (randomList.length != 4) {
                    let randomNumber = Math.floor(Math.random() * 10);
                    if (!randomList.includes(randomNumber))
                        randomList.push(randomNumber)
                }
        }
    }, [])




    const showNextScene = () => {

        doneList.push(randomList[correctPathList[currentSceneNum]])

        randomList = []
        if (doneList.length % 5 == 0) {
            setFinishGame(doneList)
            currentSceneNum = 0;
            currentStep = 0;

            if (doneList.length < 10)
                setTimeout(() => {
                    setTimeout(() => {
                        refMarkList.map(mark => mark.current.src = prePathUrl() + "images/progressBar/sb_52_grey_star_icon.svg")
                    }, 1000);
                    pathInfoList = pathList[currentSceneNum]
                    initialPosList = initialPosInfoList[currentSceneNum]

                    if (randomList.length == 0)
                        while (randomList.length != 4) {
                            let randomNumber = Math.floor(Math.random() * 10);
                            if (!randomList.includes(randomNumber) && !doneList.includes(randomNumber))
                                randomList.push(randomNumber)
                        }

                    // characterRef_BList.map((value, index) => {
                    //     characterRef_BList[index].current.stop()
                    //     characterRef_FList[index].current.stop()
                    // })

                    goNextStep(stepState + 1)

                    BackSceneList[currentSceneNum].current.className = 'aniObject'

                    randomList.map((value, index) => {
                        // setTimeout(() => {
                        //     characterRef_FList[index].current.stop();
                        //     characterRef_BList[index].current.stop();
                        // }, 500);

                        let currentAddPos = getAddPos(index, true);

                        movingCenterList[index].current.style.transition = '0s'
                        movingCenterList[index].current.style.left = initialPosList[index].x + currentAddPos.x + '%'
                        movingCenterList[index].current.style.top = initialPosList[index].y + currentAddPos.y + '%'
                    })
                    baseRef.current.style.pointerEvents = ''

                    BackSceneList.map((backScene, index) => {
                        if (index > 0)
                            backScene.current.className = 'hideObject'
                        else
                            backScene.current.className = 'showObject'
                    })
                }, 1000);
        }

        else {

            currentSceneNum++

            pathInfoList = pathList[currentSceneNum]
            initialPosList = initialPosInfoList[currentSceneNum]

            audioList.clapAudio.pause();
            audioList.yeahAudio.pause();

            audioList.clapAudio.currentTime = 0;
            audioList.yeahAudio.currentTime = 0;

            if (randomList.length == 0) {
                if (doneList.length < 7)
                    while (randomList.length != 4) {
                        let randomNumber = Math.floor(Math.random() * 10);
                        if (!randomList.includes(randomNumber) && !doneList.includes(randomNumber))
                            randomList.push(randomNumber)
                    }
                else {

                    for (let i = 0; i < 10; i++) {
                        if (!doneList.includes(i)) {
                            randomList[correctPathList[currentSceneNum]] = i;
                            break;
                        }
                    }

                    while (randomList.length != 4) {
                        let randomNumber = Math.floor(Math.random() * 10);
                        if (!randomList.includes(randomNumber)) {
                            for (let i = 0; i < 6; i++)
                                if (randomList[i] == null) {
                                    randomList[i] = randomNumber
                                    break;
                                }
                        }
                    }

                }
            }

            // characterRef_BList.map((value, index) => {
            //     characterRef_BList[index].current.stop()
            //     characterRef_FList[index].current.stop()
            // })

            movingGroup.current.className = 'hide'

            setTimeout(() => {
                goNextStep(stepState + 1)

                BackSceneList[currentSceneNum].current.className = 'aniObject'

                randomList.map((value, index) => {
                    // setTimeout(() => {
                    //     characterRef_FList[index].current.stop();
                    //     characterRef_BList[index].current.stop();
                    // }, 500);

                    let currentAddPos = getAddPos(index, true);

                    movingCenterList[index].current.style.transition = '0s'
                    movingCenterList[index].current.style.left = initialPosList[index].x + currentAddPos.x + '%'
                    movingCenterList[index].current.style.top = initialPosList[index].y + currentAddPos.y + '%'
                })

                setTimeout(() => {
                    movingGroup.current.className = 'show'
                    setTimeout(() => {
                        baseRef.current.style.pointerEvents = ''
                        startRepeartInterval()
                    }, 1000);
                }, 800);

            }, 600);
        }

    }

    const startGame = (index) => {
        currentStep = 0;
        baseRef.current.style.pointerEvents = 'none'
        let currentTime = calculateTime(index, true);


        characterRef_FHighList[index].current.style.transition = '0.5s'
        characterRef_BHighList[index].current.style.transition = '0.5s'

        characterRef_FHighList[index].current.style.opacity = 0.8
        characterRef_BHighList[index].current.style.opacity = 0.8

        // characterRef_FList[index].current.play();
        // characterRef_BList[index].current.play();

        movingCenterList[index].current.style.transition = currentTime + 's linear'
        movingCenterList[index].current.style.left = pathInfoList[index][currentStep].x + '%'
        movingCenterList[index].current.style.top = pathInfoList[index][currentStep].y + '%'

        setTimeout(() => {
            rotateCharacter(index);
        }, currentTime * 1000);

    }

    function returnOption(num, isBack = false) {
        return {
            loop: true,
            autoplay: false,
            animationData: getCharacterAnimation(characterList[num] + (isBack ? "_B" : "_F")),
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    function playAnimation(index) {
        // setMuteBG(true)

        if (doneList.length == 0 && !isStarted) {
            clickedFirst()
            isStarted = true;
        }

        clearRepeatInterval();

        clearTimeout(timerList[0])
        clearTimeout(timerList[1])
        if (lastAudio != null) {
            lastAudio.pause()
            lastAudio.currentTime = 0
        }


        if (index == correctPathList[currentSceneNum]) {
            currentAniNum = randomList[index]
            startGame(index)
        }
        else {
            // setMuteBG(false)
            audioList.buzzAudio.currentTime = 0;
            audioList.buzzAudio.play();
            lastAudio = audioList[randomList[correctPathList[currentSceneNum]] + 10]
            timerList[0] = setTimeout(() => {
                audioList[randomList[correctPathList[currentSceneNum]] + 10].play();
                timerList[1] = setTimeout(() => {
                    startRepeartInterval()
                }, audioList[randomList[correctPathList[currentSceneNum]] + 10].duration * 1000);
            }, 500);
        }
    }

    const setPos = (e) => {
        let x = (e.clientX / window.innerWidth).toFixed(4) * 100
        let y = (e.clientY / window.innerHeight).toFixed(4) * 100
        movingCenterList[0].current.style.left = x + '%'
        movingCenterList[0].current.style.top = y + '%'
        console.log('{x : ' + x + ', y : ' + y + '},')

    }

    const getAddPos = (index, isInitial = false) => {

        let { x: addPosX, y: addPosY } = addPosList[randomList[index]]

        let startPos = isInitial ? initialPosList[index] : pathInfoList[index][currentStep]
        let endPos = isInitial ? pathInfoList[index][0] : pathInfoList[index][currentStep + 1]

        movingCenterList[index].current.style.transition = '0s'

        if (endPos.x < startPos.x) {
            movingCenterList[index].current.style.transform = 'rotateY(0deg)'
            addPosX *= -1
        }
        else {
            movingCenterList[index].current.style.transform = 'rotateY(180deg)'
        }

        if (endPos.y < startPos.y) {
            addPosY *= -1


            objectBackList[index].current.className = 'commonButton showObject'
            objectFrontList[index].current.className = 'hideObject'

            // characterRef_BList[index].current.play();
            // characterRef_FList[index].current.pause();

            addPosX *= widthList[randomList[index]].b
            addPosY *= widthList[randomList[index]].b
        }

        else {
            objectBackList[index].current.className = 'hideObject'
            objectFrontList[index].current.className = 'commonButton showObject'

            // characterRef_FList[index].current.play();
            // characterRef_BList[index].current.pause();

            addPosX *= widthList[randomList[index]].f
            addPosY *= widthList[randomList[index]].f
        }

        return { x: addPosX, y: addPosY }
    }

    const calculateTime = (index, isInitial = false) => {

        let startPos = isInitial ? initialPosList[index] : pathInfoList[index][currentStep]
        let endPos = isInitial ? pathInfoList[index][0] : pathInfoList[index][currentStep + 1]

        let { x: addPosX, y: addPosY } = addPosList[currentAniNum]

        if (endPos.y < startPos.y) {
            addPosX *= widthList[currentAniNum].b
            addPosY *= widthList[currentAniNum].b
        }
        else {
            addPosX *= widthList[currentAniNum].f
            addPosY *= widthList[currentAniNum].f
        }


        let distance =
            Math.sqrt(Math.pow(startPos.x + addPosX - endPos.x, 2)
                + Math.pow(startPos.y + addPosY - endPos.y, 2))

        return distance / standardSpeed;
    }

    const rotateCharacter = (index) => {
        let currentAddPos = getAddPos(index);

        movingCenterList[index].current.style.left = pathInfoList[index][currentStep].x + currentAddPos.x + '%'
        movingCenterList[index].current.style.top = pathInfoList[index][currentStep].y + currentAddPos.y + '%'


        setTimeout(() => {
            let currentTime = calculateTime(index);

            currentStep++
            movingCenterList[index].current.style.transition = currentTime + 's linear'
            movingCenterList[index].current.style.left = pathInfoList[index][currentStep].x + '%'
            movingCenterList[index].current.style.top = pathInfoList[index][currentStep].y + '%'

            setTimeout(() => {
                if (currentStep < pathInfoList[index].length - 1)
                    rotateCharacter(index);
                else {

                    // setTimeout(() => {
                    //     characterRef_FList[index].current.stop();
                    //     characterRef_BList[index].current.stop();
                    // }, 200);

                    characterRef_FHighList[index].current.style.opacity = 0.0
                    characterRef_BHighList[index].current.style.opacity = 0.0
                    audioList.clapAudio.play();

                    refMarkList[doneList.length % 5].current.src = prePathUrl() + "images/progressBar/sb_52_star_icon.svg"

                    let lastTransformB = objectBackList[index].current.style.transform
                    let lastTransformF = objectFrontList[index].current.style.transform
                    let lastTransformP = parentRef.current.style.transform

                    setTimeout(() => {
                        objectBackList[index].current.style.transition = '1.3s'
                        objectFrontList[index].current.style.transition = '1.3s'
                        parentRef.current.style.transition = '1.3s'

                        parentColorRef.current.style.opacity = 1

                        objectBackList[index].current.style.transform += ' scale(1.7) translate(' + scalePosListInfo[randomList[index]] + ')'
                        objectFrontList[index].current.style.transform += ' scale(1.7) translate(' + scalePosListInfo[randomList[index]] + ')'
                        parentRef.current.style.transform += ' scale(1.7)'
                    }, 1000);

                    // setMuteBG(false)

                    setTimeout(() => {
                        audioList[currentAniNum].play();
                        setTimeout(() => {


                            objectBackList[index].current.style.transition = '0.7s'
                            objectFrontList[index].current.style.transition = '0.7s'
                            parentRef.current.style.transition = '0.7s'

                            objectBackList[index].current.style.transform = lastTransformB + ' scale(1)'
                            objectFrontList[index].current.style.transform = lastTransformF + ' scale(1)'
                            parentRef.current.style.transform = lastTransformP + ' scale(1)'
                            parentColorRef.current.style.opacity = 0.9

                            setTimeout(() => {
                                objectBackList[index].current.style.transition = '0.0s'
                                objectFrontList[index].current.style.transition = '0.0s'
                                parentRef.current.style.transition = '0.0s'

                                showNextScene()
                            }, 1000);

                        }, audioList[currentAniNum].duration * 1000 + 1000);
                    }, 2000);


                }
            }, currentTime * 1000);
        }, 100);
    }

    const getW = (num) => {
        return num / 100 * bW + 'px'
    }
    const getH = (num) => {
        return num / 100 * bH + 'px'
    }

    return (
        <div
            ref={baseRef}
            className="aniObject">
            <div
                onClick={(e) => {
                    // setPos(e)
                }}
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px",
                    left: _baseGeo.left + "px",
                    bottom: _baseGeo.bottom + "px",
                }}>

                <BackScene1 ref={BackSceneList[0]} _baseGeo={_baseGeo} />
                <BackScene2 ref={BackSceneList[1]} _baseGeo={_baseGeo} />
                <BackScene3 ref={BackSceneList[2]} _baseGeo={_baseGeo} />
                <BackScene4 ref={BackSceneList[3]} _baseGeo={_baseGeo} />
                <BackScene2 ref={BackSceneList[4]} _baseGeo={_baseGeo} />

                <div ref={movingGroup}
                    style={{
                        position: "absolute", width: "100%",
                        height: "100%",
                        left: "0%",
                        bottom: "0%",
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '3px',
                            height: '3px',
                            left: parentPosList[currentSceneNum].x + '%',
                            top: parentPosList[currentSceneNum].y + '%',
                            transform: 'rotateY(' + (parentPosList[currentSceneNum].r ? '180deg)' : '0deg)')

                        }}>

                        <div
                            ref={parentRef}
                            style={{
                                position: "absolute", width: getW(widthList[randomList[correctPathList[currentSceneNum]]].f * 1.4)
                                , left: getW(leftList[randomList[correctPathList[currentSceneNum]]].f
                                    * widthList[randomList[correctPathList[currentSceneNum]]].f * 1.4),
                                top: getH(topList[randomList[correctPathList[currentSceneNum]]].f * widthList[randomList[correctPathList[currentSceneNum]]].f * 1.4),
                                // transform: 'rotateY(' + (oppositeList.includes(characterList[randomList[correctPathList[currentSceneNum]]] + '_F') ? '180deg)' : '0deg)'),
                            }}>
                            <div
                                ref={parentColorRef}
                                style={{
                                    position: 'absolute',
                                    width: getW(widthList[randomList[correctPathList[currentSceneNum]]].ps * widthList[randomList[correctPathList[currentSceneNum]]].f * bgInfoList[randomList[correctPathList[currentSceneNum]]].s),
                                    height: getW(widthList[randomList[correctPathList[currentSceneNum]]].ps * widthList[randomList[correctPathList[currentSceneNum]]].f * bgInfoList[randomList[correctPathList[currentSceneNum]]].s),
                                    left: bgInfoList[randomList[correctPathList[currentSceneNum]]].pl + '%',
                                    top: bgInfoList[randomList[correctPathList[currentSceneNum]]].pt + '%',
                                    background: '#76eefe',
                                    borderRadius: '50%',
                                    transition: '0.5s',
                                    opacity: 0.9
                                }}>
                            </div>

                            <Lottie
                                options={returnOption(randomList[correctPathList[currentSceneNum]])}
                                mouseDown={false}
                                isClickToPauseDisabled={true}
                                isStopped={true}
                                style={{ opacity: 0 }}
                            />

                            <BaseImage
                                scale={objectList[randomList[correctPathList[currentSceneNum]]].ps}
                                posInfo={{
                                    l: objectList[randomList[correctPathList[currentSceneNum]]].pleft,
                                    t: objectList[randomList[correctPathList[currentSceneNum]]].pt
                                }}
                                style={{ transform: 'rotateY(' + (objectList[randomList[correctPathList[currentSceneNum]]].pl == false ? '180deg' : '0deg') + ')' }}
                                url={'recent/' + objectList[randomList[correctPathList[currentSceneNum]]].p + '.svg'}
                            />
                        </div>
                    </div>
                    {initialPosList.map((value, index) =>
                        <div
                            ref={movingCenterList[index]}
                            style={{
                                position: 'absolute',
                                width: '3px',
                                height: '3px',
                                left: value.x + '%',
                                top: value.y + '%',
                            }}>


                            <div
                                ref={objectFrontList[index]}
                                className='commonButton'
                                onClick={() => { playAnimation(index) }}
                                style={{
                                    position: "absolute", width: getW(widthList[randomList[index]].f)
                                    , left: getW(leftList[randomList[index]].f * widthList[randomList[index]].f),
                                    top: getH(topList[randomList[index]].f * widthList[randomList[index]].f),
                                    // transform: 'rotateY(' + (oppositeList.includes(characterList[randomList[index]] + '_F') ? '180deg)' : '0deg)'),
                                    transition: '0.0s'
                                }}>
                                <div
                                    ref={characterRef_FHighList[index]}
                                    style={{
                                        position: 'absolute',
                                        width: getW(widthList[randomList[index]].f * bgInfoList[randomList[index]].s),
                                        height: getW(widthList[randomList[index]].f * bgInfoList[randomList[index]].s),
                                        left: bgInfoList[randomList[index]].l + '%',
                                        top: bgInfoList[randomList[index]].t + '%',
                                        background: colorList[bgInfoList[randomList[index]].c],
                                        borderRadius: '50%',
                                        opacity: 0.0,
                                    }}>

                                </div>

                                <Lottie
                                    options={returnOption(randomList[index])}
                                    mouseDown={false}
                                    isClickToPauseDisabled={true}
                                    isStopped={true}
                                    style={{ opacity: 0 }}
                                />
                                <BaseImage
                                    scale={objectList[randomList[index]].ys}
                                    posInfo={{
                                        l: objectList[randomList[index]].yl,
                                        t: objectList[randomList[index]].yt
                                    }}
                                    style={{ transform: 'rotateY(' + (objectList[randomList[index]].fl == false ? '180deg' : '0deg') + ')' }}
                                    url={'recent/' + objectList[randomList[index]].f + '.svg'}
                                />

                            </div>

                            <div
                                ref={objectBackList[index]}
                                onClick={() => { playAnimation(index) }}
                                className='commonButton'
                                style={{
                                    position: "absolute", width: getW(widthList[randomList[index]].f)
                                    , left: getW(leftList[randomList[index]].b * widthList[randomList[index]].b),
                                    top: getH(topList[randomList[index]].b * widthList[randomList[index]].b),
                                    // transform: 'rotateY(' + (oppositeList.includes(characterList[randomList[index]] + '_B') ? '180deg)' : '0deg)'),
                                    transition: '0.0s'
                                }}>
                                <div
                                    ref={characterRef_BHighList[index]}
                                    style={{
                                        position: 'absolute',
                                        width: getW(widthList[randomList[index]].f * bgInfoList[randomList[index]].s),
                                        height: getW(widthList[randomList[index]].f * bgInfoList[randomList[index]].s),
                                        left: bgInfoList[randomList[index]].l + '%',
                                        top: bgInfoList[randomList[index]].t + '%',
                                        background: colorList[bgInfoList[randomList[index]].c],
                                        borderRadius: '50%',
                                        opacity: 0.0
                                    }}>
                                </div>



                                <Lottie
                                    options={returnOption(randomList[index], true)}
                                    mouseDown={false}
                                    isStopped={true}
                                    isClickToPauseDisabled={true}
                                    style={{ opacity: 0 }}
                                />
                                <BaseImage
                                    scale={objectList[randomList[index]].ys}
                                    posInfo={{
                                        l: objectList[randomList[index]].yl,
                                        t: objectList[randomList[index]].yt
                                    }}
                                    style={{ transform: 'rotateY(' + (objectList[randomList[index]].bl == false ? '180deg' : '0deg') + ')' }}
                                    url={'recent/' + objectList[randomList[index]].b + '.svg'}
                                />
                            </div>
                        </div>
                    )
                    }



                </div>


            </div>

            {/* marks */}
            <div
                className="aniObject"
                style={{
                    position: "fixed", width: _baseGeo.width * 0.16 + "px"
                    , right: "2%",
                    top: "0.2%",
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/progressBar/sb_52_star_icon_pogress_bar.svg"}
                />

                {
                    [0, 1, 2, 3, 4].map(value => <img draggable={false} width={"100%"}
                        ref={refMarkList[4 - value]}
                        style={{
                            position: "absolute", width: _baseGeo.width * 0.07 + "px"
                            , right: -7 + value * 17 + "%",
                            top: "6%",
                        }}
                        src={prePathUrl() + "images/progressBar/sb_52_grey_star_icon.svg"}
                    />)
                }


            </div>
        </div >
    );
}
