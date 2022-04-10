import loadAnimation from "../utils/loadAnimation"



let fileNameList = {
    Cat_B: 'Cat_Back_1',
    Cat_F: 'Cat_Front_1',

    Chick_B: 'Chick_Back_1',
    Chick_F: 'Chick_Front_1',

    Cow_B: 'Cow_Back_1',
    Cow_F: 'Cow_Left_1',

    Cub_B: 'Cub_Back_1',
    Cub_F: 'Cub_Front_1',

    Dog_B: 'Dog_Back_1',
    Dog_F: 'Dog_Front_1',

    Duck_B: 'Duck_Back_1',
    Duck_F: 'Duck_Right_1',

    Horse_B: 'Horse_Back_1',
    Horse_F: 'Horse_Front_1',
    
    Lamb_B: 'Lamb_Back_1',
    Lamb_F: 'Lamb_Front_1',

    Piglet_B: 'Piglet_Back_1',
    Piglet_F: 'Piglet_Front_1',

    Sheep_B: 'Sheep_Back_1',
    Sheep_F: 'Sheep_Front_1',
}

const animationList = {}
let allkeys = Object.keys(fileNameList)

allkeys.map(key => {
    new loadAnimation('main/' + fileNameList[key] + '.json').then(result => {
        animationList[key] = result;
    }, () => { });
})


export function getCharacterAnimation(key) {
    return animationList[key]
}









