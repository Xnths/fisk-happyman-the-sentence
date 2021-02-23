class gameSettingsController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._gameSetting = $('txt-game-settings');
        this._displayScreen = $('display-screen');
        this._gameMainController = new gameMainController(this._displayScreen);
    }

    start() {
        let sentenceList = new SentenceList(this._gameSetting.value);

        this._gameMainController.init(sentenceList);
    }

}