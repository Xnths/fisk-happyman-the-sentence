class GameMainScreenView extends View {
    constructor(element) {
        super(element);
    }

    _template(model) {
        return `
        <div class="container container-game-main">
            <div class="container container-missing-word">
            <p id="p-sentence">${model.sentenceBeginning}<strong id="s-missing-word">${model.missingWord.map(blankSpace =>
            blankSpace
        ).join(' ')}</strong>${model.sentenceContinuation}</p>
            </div>
        </div>
        `
    }
}