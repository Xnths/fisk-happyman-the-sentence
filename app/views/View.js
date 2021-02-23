class View {
    constructor(element) {
        this._element = element;
    }

    _templete(model) {
        throw new Error('There is no implementation of the template.');
    }

    update(model) {
        this._element.innerHTML = this._templete(model);
    }
}