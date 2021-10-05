// alphabet  - массив букв алфавита
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

let word = "";
let wordTemplate = [];
let score = 0;

// главная функция
const main = () => {
  document.querySelector("#form").addEventListener("submit", createWord);
};

const createWord = (event) => {
  event.preventDefault();
  const input = document.querySelector("#newWord");
  word = input.value.trim().toUpperCase();
  input.value = "";
  if (!word) {
    return;
  }
  createAlphaBetButtons();
  createWordTemplate();
};

const createAlphaBetButtons = () => {
  const alphabetWrapper = document.querySelector("#alphabet");
  alphabetWrapper.innerHTML = "";
  alphabet.forEach((letter) => {
    const button = `<button id=${letter}>${letter}</button>`;
    alphabetWrapper.innerHTML += button;
  });

  const buttons = document.querySelectorAll("#alphabet button");
  for (btn of buttons) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      checkLetter(event.target.id); //функция - наличие буквы в слове
      event.target.classList.add("hide"); // target - что это?
      if (wordTemplate.join("") == word) {
        // alert("Congratulations!");
        const div = document.querySelector("#score");
        const p = document.createElement("p");
        p.innerText = `Congratulations! Your score: ${score}. Write the next word!`;
        div.appendChild(p);
      }
    });
  }
};

const createWordTemplate = () => {
  wordTemplate.length = word.length;
  wordTemplate.fill(null);
  renderWord();
};

const renderWord = () => {
  let output = "";
  for (let i = 0; i < wordTemplate.length; i++) {
    output += wordTemplate[i] ? wordTemplate[i] : "_";
  }
  document.querySelector("#word").innerHTML = "";
  document.querySelector("#word").innerHTML = output;
};

const checkLetter = (letter) => {
  let match = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      wordTemplate[i] = letter;
      match = true;
    }
  }
  score += match ? 10 : -2;
  renderWord();
  document.querySelector("#score").innerHTML = `Score : ${score}`;
};

main();
