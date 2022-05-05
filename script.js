const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrongLetters');
const playAgainBtn = document.getElementById('playButton');
const popUp = document.getElementById('popUpContainer');
const notification = document.getElementById('notificationContainer');
const finalMessage = document.getElementById('finalMessage');

const figureParts = document.querySelectorAll('.figurePart');

const words = ['application', 'programing', 'interface', 'wizard']
// 'relaxation', 'shed', 'land', 'lose', 'river', 'bathtub', 'egg', 'stream', 'compose', 'effective', 'summer', 'disorder', 'education', 'stunning', 'tool', 'investment', 'temperature', 'confuse', 'extract'

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord)


const correctLetters = [];
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

// update the wrong letters
function updateWrongLettersEl() {
    console.log('Update wrong')
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}

    `;

    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none'
        }
    });

    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        popUp.style.display = 'flex'
    }
}

// show notification 
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000)
}

// key down letter press

window.addEventListener('keydown', e => {
    // console.log(e.keyCode);

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});

// restart game and play again
playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popUp.style.display = 'none';

})

displayWord();


