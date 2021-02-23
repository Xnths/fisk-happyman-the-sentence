class Sentence {
    constructor(line) {
        let sentenceParts = line.split('*');
        //There are always 3 parts of the sentence
        //First, the beginning of the setence.
        //Second, the missing word
        //Then, the rest of the sentence.
        this._sentenceBeginning = sentenceParts[0];
        this._guessingWord = sentenceParts[1];
        this._missingWord = this._hideGuessingWord();
        this._sentenceContinuation = sentenceParts[2];

        Object.freeze();
    }

    _hideGuessingWord() {
        let hiddenWord = [];

        for (let i = 0; i < this._guessingWord.length; i++) {
            hiddenWord[i] = "_"
        }
        return hiddenWord;
    }

    get sentenceBeginning() {
        return this._sentenceBeginning;
    }

    get missingWord() {
        return this._missingWord;
    }

    get sentenceContinuation() {
        return this._sentenceContinuation;
    }
}