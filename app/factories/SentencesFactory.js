class SentencesFactory {
    constructor() {
        this._sentences = []
    }

    create(text) {
        let lines = text.split('\n');

        for (i = 0; i < lines.length; i++) {
            if (lines[i] == "") return;

            this._sentences.push(new Sentence(lines[i]));
        }

        return this._sentences;
    }
}