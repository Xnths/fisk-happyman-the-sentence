class View {
    constructor(element) {
        this._element = element;
    }

    _template(model) {
        throw new Error('There is no implementation of the template.');
    }

    update(model) {
        this._element.innerHTML = this._template(model);
    }
}