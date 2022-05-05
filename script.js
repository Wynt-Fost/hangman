const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrongLetters');
const playAgainBTN = document.getElementById('playAgain');
const popUp = document.getElementById('popUpContainer');
const notification = document.getElementById('NotificationContainer');
const finalMessage = document.getElementById('finalMessage');

const figureParts = document.querySelectorAll('.figurePart');

const words = ['application', 'programing', 'interface', 'wizard']
// 'relaxation', 'shed', 'land', 'lose', 'river', 'bathtub', 'egg', 'stream', 'compose', 'effective', 'summer', 'disorder', 'education', 'stunning', 'tool', 'investment', 'temperature', 'confuse', 'extract'

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord)


const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd'];
const wrongLetters = [];

// show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
            .split('')
            .map(
                letter => `
        <span class="letter"> 
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `

            )
            .join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '')

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! 😀';
        popUp.style.display = 'flex';
    }
    console.log(wordEl.innerText)
}

displayWord();
