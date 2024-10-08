class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const timerElement = document.querySelector(".timer");
    const timer = Array.from(timerElement.textContent);
    let timerNumber = Number(timer[2] + timer[3]);
    // console.log(timerNumber);

    function time() {
      if(timerNumber > 10){
        timerNumber -=1;
        timerElement.textContent = `0:${timerNumber}`;
      } else if (timerNumber > 0) {
        timerNumber -=1;
        timerElement.textContent = `0:0${timerNumber}`;
      } else {
        alert('Вы проиграли!');
        timerNumber = 15;
      }
    }

    time();
    let timerId = setInterval(time, 1000);

    console.log(timerNumber);
    const globalContext = this;
    document.addEventListener("keydown", function(KeyboardEvent) {      
      let symbolCurrent = globalContext.currentSymbol.textContent;
      // console.log(KeyboardEvent.key);
      if(symbolCurrent === KeyboardEvent.key){
        globalContext.success();
      } else if (KeyboardEvent.key === "Shift" || KeyboardEvent.key === "Alt") {
        // globalContext.success();
      } else if (timerNumber === 0) {
        globalContext.fail();
      } else if (symbolCurrent !== KeyboardEvent.key) {
        globalContext.fail();
      }
    })
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'я люблю kitkat',
        'воротник',
        'собака',
        'щетина',
        'звонок по facetime',
        'bob',
        'awesome',
        'netology',
        'он работает в openspace',
        'hello',
        'кошка',
        'kitty',
        'яблоко',
        'rock',
        'youtube',
        'popcorn',
        'на витрине вывеска sale',
        'cinema',
        'love',
        'человек',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
