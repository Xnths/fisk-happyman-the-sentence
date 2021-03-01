class LettersAttempedView extends View {
    constructor(element) {
        super(element);
    }

    _template(model) {
        return `<spam>${model.map(letter => `<strong>${letter}<strong>`).join(" ")}</spam>`
    }
}