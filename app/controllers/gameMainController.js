class gameMainController {
    constructor(displayScreen) {
        this._gameMainScreenView = new GameMainScreenView(displayScreen);

        this._turn = 0;
        this._sentenceIndex = 0;
    }

    init(sentenceList) {
        this._gameMainScreenView.update(sentenceList.sentences[this._sentenceIndex]);
        let hang = new Hang();
    }
}