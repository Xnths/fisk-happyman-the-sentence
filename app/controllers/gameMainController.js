class gameMainController {
    constructor(displayScreen) {
        this._sentenceList = [];
        this._gameMainScreenView = new GameMainScreenView(displayScreen);

        this._attempt = 0;
        this._sentenceIndex = 0;
        this._gameIsInit = false;

        this._startListening();
    }

    _checkLetter(key) {
        let sentence = this._sentenceList[this._sentenceIndex];
        let word = sentence.guessingWord;
        let letterPosition = [];

        for (let i = 0; i < word.length; i++) {
            if (word[i] == key) letterPosition.push(i);
        }

        letterPosition.forEach(position => sentence.reviewLetter(key, position));
        console.log(sentence)
        if (letterPosition.length > 0) this._gameMainScreenView.update(sentence);

        console.log(word, letterPosition)
    }

    _startListening() {
        document.addEventListener('keydown', e => {
            if (this._gameIsInit) this._checkLetter(e.key);
        })
    }

    init(sentenceList) {
        this._gameIsInit = true;
        this._sentenceList = sentenceList.sentences;
        console.log(this._sentenceList);
        this._gameMainScreenView.update(this._sentenceList[this._sentenceIndex]);
        let hang = new Hang();
    }

}