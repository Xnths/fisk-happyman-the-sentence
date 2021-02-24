class gameMainController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._displayScreen = $('display-screen');
        this._displayCanvas = $('display-canvas');
        this._lettersDisplay = $('letters-display');
        this._canvas = $('hangman');

        let _hang = new Hang(this._canvas);

        this._sentenceList = [];

        this._gameMainScreenView = new GameMainScreenView(this._displayScreen);
        this._lettersAttemptedView = new LettersAttempedView(this._lettersDisplay);

        this._lettersAttemped = [];

        this._attempts = 0;
        this._sentenceIndex = 0;
        this._gameInputOn = false;

        this._startListening();
    }

    _checkWin(sentence) {
        let underlines = [];

        for (let i = 0; i < sentence.missingWord.length; i++) {
            if (sentence.missingWord[i] == "_") underlines.push("_");
        }
        console.log(underlines)
        if (underlines == 0) {
            this._sentenceIndex++;
            this._lettersAttemped = [];
            this._lettersAttemptedView.update(this._lettersAttemped);
            this._gameMainScreenView.update(this._sentenceList[this._sentenceIndex])
        };
    }

    _checkLetter(key) {
        let sentence = this._sentenceList[this._sentenceIndex];
        let word = sentence.guessingWord;
        let letterPosition = [];

        if (!this._lettersAttemped.includes(key)) {
            this._lettersAttemped.push(key);
            this._lettersAttemptedView.update(this._lettersAttemped);
        };


        for (let i = 0; i < word.length; i++) {
            if (word[i] == key) letterPosition.push(i);
        }

        letterPosition.forEach(position => sentence.reviewLetter(key, position));
        console.log(sentence)
        if (letterPosition.length > 0) this._gameMainScreenView.update(sentence);

        console.log(word, letterPosition);

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