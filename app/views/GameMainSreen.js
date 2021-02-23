class GameMainScreen extends View {
    constructor(element) {
        super(element);
    }

    _templete(element) {
        return `
        <div class="container container-game-main">
            <div class="container container-canvas">
               <canvas id="hangman" width='300px' height='350px'></canvas>
            </div>
            <div class="container container-missing-word">
            <p id="p-sentence">Do you like <strong id="s-missing-word">PAROT</strong>?</p>
            </div>
        </div>
        `
    }
}