class SentenceList {
    constructor(text) {
        this._sentenceList = [];
        this._buildSetence(text);
        console.log(this._sentenceList[0]);
    }

    _buildSetence(text) {
        let sentencesFactory = new SentencesFactory();

        let sentences = sentencesFactory.create(text);

        this._sentenceList = this._shuffle(sentences);
    }

    //Fisher-Yates shuffle algorithm
    _shuffle(array) {
        let currentIndex = array.length, buffer, randomIndex;
        let shuffledList = [].concat(array);

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random * currentIndex);
            currentIndex--;

            buffer = shuffledList[currentIndex];
            shuffledList[currentIndex] = shuffledList[randomIndex];
            shuffledList[randomIndex] = buffer;
        }
        return shuffledList;
    }

}