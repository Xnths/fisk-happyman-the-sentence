class Sentence {
    constructor(line) {
        let sentenceParts = line.split('*');
        //There are always 3 parts of the sentence
        //First, the beginning of the setence.
        //Second, the missing word
        //Then, the rest of the sentence.
        this._sentenceBeginning = sentenceParts[0];
        this._missingWord = sentenceParts[1];
        this._sentenceContinuation = sentenceParts[2];

        Object.freeze();
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