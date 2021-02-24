class LettersAttempedView extends View {
    constructor(element) {
        super(element);
    }

    _template(model) {
        return `
            ${model.map(letter =>
            `<span><strong>${letter}<strong></span>`
        ).join(" ")}
        `
    }
}