class gameMainController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._displayScreen = $('display-screen');
        this._displayCanvas = $('display-canvas');
        this._lettersDisplay = $('letters-display');
        this._canvas = $('hangman');

        this._hang = new Hang(this._canvas);

        this._sentenceList = [];
        this._hangState = [];

        this._gameMainScreenView = new GameMainScreenView(this._displayScreen);
        this._lettersAttemptedView = new LettersAttempedView(this._lettersDisplay);

        this._lettersAttemped = [];

        this._attemptsWrongCounter = 0;
        this._attemptsWrong = [];
        this._sentenceIndex = 0;
        this._gameInputOn = false;

        this._startListening();
    }

    _checkWin(sentence) {
        let underlines = [];

        for (let i = 0; i < sentence.missingWord.length; i++) {
            if (sentence.missingWord[i] == "_") underlines.push("_");
        }
        if (underlines == 0) {
            this._sentenceIndex++;
            this._lettersAttemped = [];
            this._attemptsWrong = [];
            this._attemptsWrongCounter = 0;
            this._hang.clear();
            this._lettersAttemptedView.update(this._lettersAttemped);
            this._gameMainScreenView.update(this._sentenceList[this._sentenceIndex])
            this._hang.draw();
            return
        };
    }

    _checkLetter(key) {
        let sentence = this._sentenceList[this._sentenceIndex];
        let word = sentence.guessingWord;
        let wordLetters = word.split("");
        let letterPosition = [];

        let attemptsWrong = [];


        if (!this._lettersAttemped.includes(key)) {
            this._lettersAttemped.push(key);
            this._lettersAttemptedView.update(this._lettersAttemped);

            if (!wordLetters.includes(key)) {
                attemptsWrong.push(this._attemptsWrongCounter);
                this._attemptsWrong = attemptsWrong;
                console.log(this._attemptsWrongCounter);
                this._attemptsWrongCounter++;
                this._hang.draw(this._attemptsWrong);
            }
        };

        for (let i = 0; i < word.length; i++) {
            if (word[i] == key) letterPosition.push(i);
        }

        letterPosition.forEach(position => sentence.reviewLetter(key, position))
        if (letterPosition.length > 0) this._gameMainScreenView.update(sentence);

        this._checkWin(sentence);
    }

    _startListening() {
        document.addEventListener('keydown', e => {
            if (this._gameInputOn) this._checkLetter(e.key);
        })
    }

    init(sentenceList) {
        this._gameInputOn = true;
        this._sentenceList = sentenceList.sentences;
        this._displayCanvas.classList.remove('container-invisible');
        this._lettersDisplay.classList.remove('container-invisible');
        this._gameMainScreenView.update(this._sentenceList[this._sentenceIndex]);
    }

}