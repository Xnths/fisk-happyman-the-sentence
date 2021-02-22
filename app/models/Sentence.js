class Sentence {
    constructor(line) {
        this._sentence = _extractSetence(line);
        this._missingWord = _extractMissingWord(line);

        Object.freeze();
    }

    _extractSentence() {

        return
    }

    get sentence() {
        return this._sentence;
    }

    get missingWord() {
        return this._missingWord;
    }
}