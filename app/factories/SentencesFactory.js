class SentencesFactory {

    create(text) {
        let lines = text.split('\n');
        let sentences = [];

        for (let i = 0; i < lines.length; i++) {
            let sentence = new Sentence(lines[i]);

            sentences.push(sentence);
        }

        return sentences
    }
}