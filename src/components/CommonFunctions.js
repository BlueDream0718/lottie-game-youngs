export function initialAudio(audioList) {
    let allkeys = Object.keys(audioList)
    for (let i = 0; i < allkeys.length; i++) {
        audioList[allkeys[i]].play()
            .catch(error => {
            })
        audioList[allkeys[i]].pause()
    }
}



let repeartTimer, repeatInterval, repeatAudio = null

export const startRepeartInterval = (audio = null) => {
    if (audio != null)
        repeatAudio = audio
        
    if (repeatAudio != null) {
        repeatAudio.currentTime = 0
        repeatAudio.play();
    }

    repeartTimer = setTimeout(() => {
        repeatInterval = setInterval(() => {
            if (repeatAudio != null) {
                repeatAudio.pause();
                repeatAudio.currentTime = 0;
                repeatAudio.play();
            }
        }, 12000);
    }, 6000);
}


export const clearRepeatInterval = () => {
    clearTimeout(repeartTimer)
    clearInterval(repeatInterval)
    if (repeatAudio != null)
        repeatAudio.pause();
}




export function getMaskStyle(info) {

    let maskStyle = {
        position: "absolute", width: info.scale + "%",
        height: info.scale + "%"
        , left: -(info.scale - 100) / 2 + "%",
        bottom: -(info.scale - 100) / 2 + "%",
        WebkitMaskImage: 'url("' + prePathUrl() + 'images/' + info.url + '.svg")',
        WebkitMaskRepeat: "no-repeat",

        backgroundColor: "white"
    }

    return maskStyle;
}

let sharePrePath = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    sharePrePath = './'
} else {
    // production code
    sharePrePath = './'
}

export const prePathUrl = () => sharePrePath;