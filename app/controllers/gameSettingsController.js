class gameSettingsController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._gameSetting = $('txt-game-settings');
    }

    start() {
        let sentenceList = new SentenceList(this._gameSetting.value);
        console.log(sentenceList);
    }

}