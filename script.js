console.log(`Score: 85/105, На выбор предоставляется минимум одна карта древнего (максимум 4): +20, На выбор предоставляется несколько уровней сложности (максимум 5) +5,
Карты замешиваются согласно правилам игры +40 баллов, Есть трекер текущего состояния колоды +20 баллов`)


const welcomeEl = document.querySelector('.welcome-container');
const ancients = document.querySelector('.ancients-container');
const difficulty = document.querySelector('.difficulty-container');
const azathoth = document.getElementById('azathoth');
const cthulthu = document.getElementById('cthulthu');
const iog = document.getElementById('iog');
const shub = document.getElementById('shub');
const deckContainer = document.querySelector('.deck-container');
const shuffleBtn = document.querySelector('.shuffle');
const deckBtn = document.querySelector('.deck');



import ancientsData from './data/ancients.js';
import cardsDataBlue from './data/mythicCards/blue/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataGreen from './data/mythicCards/green/index.js';

let audio = new Audio();
audio.src = '/assets/welcome.mp3'

function welcome(){
    welcomeEl.style.display = 'none';
    ancients.style.display = 'flex';
    ancients.classList.remove('hidden');
    audio.src = '/assets/pick_ancient.mp3';
    playAudio();
}
setTimeout(welcome, 6000);

function playAudio(){
    audio.play();
    audio.volume = .5;
}
setTimeout(playAudio, 1);

let ancientsNum = 0;
let cards;

azathoth.addEventListener('click', ()=>{
    ancientsNum = 0;
    ancients.style.display = 'none';
    difficulty.style.display = 'flex';
    audio.src = '/assets/difficulty.mp3';
    playAudio();
    return cards = cardsDeck();
});

cthulthu.addEventListener('click', ()=>{
    ancientsNum = 1;
    ancients.style.display = 'none';
    difficulty.style.display = 'flex';
    audio.src = '/assets/difficulty.mp3';
    playAudio();
    return cards = cardsDeck();
});

iog.addEventListener('click', ()=>{
    ancientsNum = 2;
    ancients.style.display = 'none';
    difficulty.style.display = 'flex';
    audio.src = '/assets/difficulty.mp3';
    playAudio();
    return cards = cardsDeck();
});

shub.addEventListener('click', ()=>{
    ancientsNum = 3;
    ancients.style.display = 'none';
    difficulty.style.display = 'flex';
    audio.src = '/assets/difficulty.mp3';
    playAudio();
    return cards = cardsDeck();
})

document.getElementById('normal').addEventListener('click', () => {
    difficulty.style.display = 'none';
    let difficultiesNum = 2;
    deckContainer.style.display = 'flex';
    console.log(ancientsNum);
})

function indicator(){
   document.getElementById('green1').textContent = ancientsData[ancientsNum].firstStage.greenCards - countGS1;
   document.getElementById('green2').textContent = ancientsData[ancientsNum].secondStage.greenCards - countGS2;
   document.getElementById('green3').textContent = ancientsData[ancientsNum].thirdStage.greenCards - countGS3;
   document.getElementById('brown1').textContent = ancientsData[ancientsNum].firstStage.brownCards - countBS1;
   document.getElementById('brown2').textContent = ancientsData[ancientsNum].secondStage.brownCards - countBS2;
   document.getElementById('brown3').textContent = ancientsData[ancientsNum].thirdStage.brownCards - countBS3;
   document.getElementById('blue1').textContent = ancientsData[ancientsNum].firstStage.blueCards - countBlS1;
   document.getElementById('blue2').textContent = ancientsData[ancientsNum].secondStage.blueCards - countBlS2;
   document.getElementById('blue3').textContent = ancientsData[ancientsNum].thirdStage.blueCards - countBlS3;
}

let cardsFirstStage = [];
let cardsSecondStage = [];
let cardsThirdStage = [];
function getRandomNumBlue(){
    return Math.floor(Math.random() * 12)
}
function getRandomNumBrown(){
    return Math.floor(Math.random() * 21)
}
function getRandomNumGreen(){
    return Math.floor(Math.random() * 18)
}

function getCardsFirstStage(){
    let blueCards = ancientsData[ancientsNum].firstStage.blueCards;
    let brownCards = ancientsData[ancientsNum].firstStage.brownCards;
    let greenCards = ancientsData[ancientsNum].firstStage.greenCards;
    for (let i = 0; i < blueCards; i++){
        getRandomNumBlue()
        let randomNum = getRandomNumBlue();
        cardsFirstStage.push(cardsDataBlue[randomNum]);
    }
    for (let i = 0; i < brownCards; i++){
        getRandomNumBrown()
        let randomNum = getRandomNumBrown();
        cardsFirstStage.push(cardsDataBrown[randomNum]);
    }
    for (let i = 0; i < greenCards; i++){
        getRandomNumGreen()
        let randomNum = getRandomNumGreen();
        cardsFirstStage.push(cardsDataGreen[randomNum]);
    }
    cardsFirstStage.sort(() => Math.random() - 0.5);
}

function getCardsSecondStage(){
    let blueCards = ancientsData[ancientsNum].secondStage.blueCards;
    let brownCards = ancientsData[ancientsNum].secondStage.brownCards;
    let greenCards = ancientsData[ancientsNum].secondStage.greenCards;
    for (let i = 0; i < blueCards; i++){
        getRandomNumBlue()
        let randomNum = getRandomNumBlue();
        cardsSecondStage.push(cardsDataBlue[randomNum]);
    }
    for (let i = 0; i < brownCards; i++){
        getRandomNumBrown()
        let randomNum = getRandomNumBrown();
        cardsSecondStage.push(cardsDataBrown[randomNum]);
    }
    for (let i = 0; i < greenCards; i++){
        getRandomNumGreen()
        let randomNum = getRandomNumGreen();
        cardsSecondStage.push(cardsDataGreen[randomNum]);
    }
    cardsSecondStage.sort(() => Math.random() - 0.5);
}
function getCardsThirdStage(){
    let blueCards = ancientsData[ancientsNum].thirdStage.blueCards;
    let brownCards = ancientsData[ancientsNum].thirdStage.brownCards;
    let greenCards = ancientsData[ancientsNum].thirdStage.greenCards;
    for (let i = 0; i < blueCards; i++){
        getRandomNumBlue()
        let randomNum = getRandomNumBlue();
        cardsThirdStage.push(cardsDataBlue[randomNum]);
    }
    for (let i = 0; i < brownCards; i++){
        getRandomNumBrown()
        let randomNum = getRandomNumBrown();
        cardsThirdStage.push(cardsDataBrown[randomNum]);
    }
    for (let i = 0; i < greenCards; i++){
        getRandomNumGreen()
        let randomNum = getRandomNumGreen();
        cardsThirdStage.push(cardsDataGreen[randomNum]);
    }
    cardsThirdStage.sort(() => Math.random() - 0.5);
}

function cardsDeck(){
    getCardsFirstStage()
    getCardsSecondStage()
    getCardsThirdStage()
    let res;
    return res = cardsThirdStage.concat(...cardsSecondStage, ...cardsFirstStage);
}

shuffleBtn.addEventListener('click', () => {
    indicator();
    shuffleBtn.style.display = 'none';
})

let countGS1 = 0;
let countGS2 = 0;
let countGS3 = 0;
let countBS1 = 0;
let countBS2 = 0;
let countBS3 = 0;
let countBlS1 = 0;
let countBlS2 = 0;
let countBlS3 = 0;

function countDeck(){
    let secondStage = ancientsData[ancientsNum].secondStage.blueCards + ancientsData[ancientsNum].secondStage.greenCards + ancientsData[ancientsNum].secondStage.brownCards;
    let thirdStage = ancientsData[ancientsNum].thirdStage.blueCards + ancientsData[ancientsNum].thirdStage.brownCards + ancientsData[ancientsNum].thirdStage.greenCards;
    if (cards[cards.length - 1].color == ['green'] && cards.length <= thirdStage) {
        return countGS3 += 1;
    }
    if (cards[cards.length - 1].color == ['green'] && cards.length <= (thirdStage + secondStage)) {
        return countGS2 += 1;
    }
    if (cards[cards.length - 1].color == ['green']) {
        return countGS1 += 1;        
    }
    if (cards[cards.length - 1].color == ['brown'] && cards.length <= thirdStage) {
        return countBS3 += 1;  
    }
    if (cards[cards.length - 1].color == ['brown'] && cards.length <= (thirdStage + secondStage)) {
        return countBS2 += 1; 
    }
    if (cards[cards.length - 1].color == ['brown']) {
        return countBS1 += 1;
    }
    if (cards[cards.length - 1].color == ['blue'] && cards.length <= thirdStage) {
        return countBlS3 += 1;   
    }
    if (cards[cards.length - 1].color == ['blue'] && cards.length <= (thirdStage + secondStage)) {
        return countBlS2 += 1;
    }
    if (cards[cards.length - 1].color == ['blue']) {
        return countBlS1 += 1; 
    }
} 

function deckBtnClick(){
    console.log(cards)
    let url = `${cards[cards.length - 1].cardFace}`
    if (cards === undefined) {
        document.querySelector('.last-card').style.backgroundImage =  `url(../../assets/mythicCardBackground.png)`;
    } else {
        document.querySelector('.last-card').style.backgroundImage = `url(${url})`;
    }
    countDeck();
    indicator();
    cards.pop();
}

deckBtn.addEventListener('click', deckBtnClick);






