class SentencesFactory {
    constructor() {
        this._sentences = []
    }

    create(text) {
        let lines = text.split('\n');

        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == "") return;

            let sentence = new Sentence(lines[i]);

            this._sentences.push(sentence);
        }

        return this._sentences;
    }
}