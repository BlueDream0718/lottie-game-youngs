import React, { useContext, useState, useEffect, useRef } from 'react';
import "../stylesheets/styles.css";

import { UserContext } from '../components/BaseShot';
import { prePathUrl, initialAudio } from '../components/CommonFunctions';
import BaseImage from '../components/BaseImage';

var isGameStarted = false;

const Scene1 = React.forwardRef(({ nextFunc, _geo, _baseGeo }, ref) => {

    const audioList = useContext(UserContext)
    const [isShow, setShow] = useState(false)

    const playBtnRef = useRef();

    useEffect(() => {


        setTimeout(() => {
            playBtnRef.current.className = 'introText'
        }, 1500);

        setTimeout(() => {
            playBtnRef.current.className = 'commonButton'
            playBtnRef.current.style.pointerEvents = ''
        }, 2500);

        playBtnRef.current.className = 'hide'
        return () => {
            audioList.titleAudio.pause();
            audioList.titleAudio.currentTime = 0;

        }
    }, [])

    function clickFunc() {

        if (!isGameStarted)
            new initialAudio(audioList)

        if (!isGameStarted) {
            setTimeout(() => {
                isGameStarted = true;
            }, 500);
        }

        setTimeout(() => {
            nextFunc();
        }, 200);
    }

    return (
        <div>
            <div >
                <div
                    style={{
                        position: "fixed", width: _baseGeo.width + "px",
                        height: _baseGeo.height + "px",
                        left: _baseGeo.left + "px"
                        , bottom: _baseGeo.bottom + "px",
                    }}>

                    <BaseImage
                        scale={0.5}
                        posInfo={{ l: 0.2, t: 0.57 }}
                        url={'SB_31_Prop_Interactives/SB_31_Prop Intractives_Ripples.svg'}
                    />
                    <BaseImage
                        scale={0.2}
                        posInfo={{ l: 0.23, t: 0.32 }}
                        url={'SB_31_Character_Interactive/SB_31_CI_TDuck_01.svg'}
                    />

                    <BaseImage
                        scale={0.35}
                        posInfo={{ l: 0.15, t: 0.52 }}
                        url={'SB_31_Prop_Interactives/SB_31_Prop Intractives_Ripples_01.svg'}
                    />

                    <BaseImage
                        scale={0.06}
                        posInfo={{ l: 0.54, t: 0.55 }}
                        url={'SB_31_Character_Interactive/SB_31_CI_TDuckling_01.svg'}
                    />
                    <BaseImage
                        scale={0.06}
                        posInfo={{ l: 0.5, t: 0.59 }}
                        url={'SB_31_Character_Interactive/SB_31_CI_TDuckling_04.svg'}
                    />
                    <BaseImage
                        scale={0.05}
                        posInfo={{ l: 0.58, t: 0.64 }}
                        url={'SB_31_Character_Interactive/SB_31_CI_TDuckling_07.svg'}
                    />
                    <BaseImage
                        scale={0.07}
                        posInfo={{ l: 0.63, t: 0.63 }}
                        url={'SB_31_Character_Interactive/SB_31_CI_TDuckling_010.svg'}
                    />
                    <BaseImage
                        scale={0.06}
                        posInfo={{ l: 0.41, t: 0.6 }}
                        url={'SB_31_Character_Interactive/SB_31_CI_TDuckling_013.svg'}
                    />

                </div>
            </div>


            <div
                style={{
                    position: "fixed", width: _baseGeo.width * 0.415 + "px",
                    left: _baseGeo.width * 0.46 + _baseGeo.left + "px"
                    , bottom: _baseGeo.height * 0.318 + _baseGeo.bottom + "px",
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + 'images/SB_31_Text_Intractive/SB31_intro_name-01.svg'}
                />
            </div>

            <div
                className="hide"
                ref={playBtnRef}
                onClick={clickFunc}
                style={{
                    position: "fixed", width: _geo.width * 0.12 + "px",
                    height: _geo.width * 0.12 + "px",
                    left: _geo.width * 0.44 + _geo.left + "px"
                    , bottom: _geo.height * 0.15 + _geo.top + "px",
                    cursor: "pointer",
                    pointerEvents: 'none'
                }}>
                <img draggable={false}
                    width={"100%"}
                    src={prePathUrl() + 'images/Buttons/Play_blue.svg'}
                />
            </div>
        </div>
    );
});

export default Scene1;
