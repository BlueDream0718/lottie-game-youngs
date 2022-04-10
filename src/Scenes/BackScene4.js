import "../stylesheets/styles.css";
import BaseImage from "../components/BaseImage";
import React from "react"

const BackScene = ({ nextFunc, _baseGeo }, ref) => {


    return (
        <div
            ref={ref}
            className="aniObject"
            style={{
                position: "fixed", width: _baseGeo.width + "px",
                height: _baseGeo.height + "px",
                left: _baseGeo.left + "px",
                bottom: _baseGeo.bottom + "px",
            }}>

            <BaseImage
                url={'SB_31_BG/SB_31_BG_04.svg'}
            />
            <BaseImage
                scale={0.7}
                posInfo={{
                    l: 0.16,
                    t: 0.24
                }}
                url={'SB_31_Foreground/SB_31_FG_04.svg'}
            />

            <BaseImage
                scale={0.15}
                posInfo={{
                    l: 0.05,
                    t: 0.16
                }}
                url={'SB_31_Midground/SB_31_MG_Pond_01.svg'}
            />
            <BaseImage
                scale={0.1}
                posInfo={{
                    l: 0.3,
                    t: 0.1
                }}
                url={'SB_31_Midground/SB_31_MG_Rock_01.svg'}
            />
            <BaseImage
                scale={0.05}
                posInfo={{
                    l: 0.75,
                    t: 0.22
                }}
                url={'SB_31_Midground/SB_31_MG_Grass_01.svg'}
            />
            <BaseImage
                scale={0.08}
                posInfo={{
                    l: 0.7,
                    t: 0.05
                }}
                url={'SB_31_Midground/SB_31_MG_Tree_01.svg'}
            />
            <BaseImage
                scale={0.12}
                posInfo={{
                    l: 0.8,
                    t: 0.75
                }}
                url={'SB_31_Midground/SB_31_MG_Stone_02.svg'}
            />
            <BaseImage
                scale={0.08}
                posInfo={{
                    l: 0.82,
                    t: 0.78
                }}
                url={'SB_31_Midground/SB_31_MG_Grass_03.svg'}
            />
            <BaseImage
                scale={0.05}
                posInfo={{
                    l: 0.7,
                    t: 0.8
                }}
                url={'SB_31_Midground/SB_31_MG_Leave_02.svg'}
            />
            <BaseImage
                scale={0.05}
                posInfo={{
                    l: 0.3,
                    t: 0.8
                }}
                url={'SB_31_Midground/SB_31_MG_Leave_03.svg'}
            />
            <BaseImage
                scale={0.04}
                posInfo={{
                    l: 0.1,
                    t: 0.6
                }}
                url={'SB_31_Midground/SB_31_MG_Leave_01.svg'}
            />
            <BaseImage
                scale={0.07}
                posInfo={{
                    l: 0.12,
                    t: 0.7
                }}
                url={'SB_31_Midground/SB_31_MG_Grass_01.svg'}
            />
            <BaseImage
                scale={0.14}
                posInfo={{
                    l: 0.01,
                    t: 0.65
                }}
                url={'SB_31_Midground/SB_31_MG_Tree_02.svg'}
            />
            <BaseImage
                scale={0.06}
                posInfo={{
                    l: 0.14,
                    t: 0.64
                }}
                url={'SB_31_Midground/SB_31_MG_Leave_01 .svg'}
            />
            <BaseImage
                scale={0.06}
                posInfo={{
                    l: 0.05,
                    t: 0.64
                }}
                url={'SB_31_Midground/SB_31_MG_Leave_02.svg'}
            />
            <BaseImage
                scale={0.06}
                posInfo={{
                    l: 0.05,
                    t: 0.4
                }}
                url={'SB_31_Midground/SB_31_MG_Leave_01 .svg'}
            />
            <BaseImage
                scale={0.08}
                posInfo={{
                    l: 0.85,
                    t: 0.4
                }}
                url={'SB_31_Midground/SB_31_MG_Stone_01.svg'}
            />
        </div >
    );
}

export default React.forwardRef(BackScene);
