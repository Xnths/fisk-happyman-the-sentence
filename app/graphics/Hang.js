class Hang {
    constructor(canvas, target) {
        this._canvas = document.getElementById('hangman');
        this._ctx = this._canvas.getContext('2d');

        this._drawOrder = [this.init, this.head, this.body]
        this._ctx.fillStyle = 'white';
        this._ctx.strokeStyle = 'white';
        this._ctx.lineWidth = 5;

        this.init();
    }

    draw(drawNumber) {
        if (drawNumber.includes(0)) this.head();
        if (drawNumber.includes(1)) this.smile();
        if (drawNumber.includes(2)) this.body();
        if (drawNumber.includes(3)) this.leftHand();
        if (drawNumber.includes(4)) this.rightHand();
        if (drawNumber.includes(5)) this.leftLeg();
        if (drawNumber.includes(6)) this.rightLeg();
    }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    init() {
        this._ctx.beginPath();
        this._ctx.moveTo(0, (this._canvas.height - 20));
        this._ctx.lineTo(this._canvas.width, (this._canvas.height - 20));
        this._ctx.closePath();
        this._ctx.stroke();
    }

    rope() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 0);
        this._ctx.lineTo(150, 50);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    head() {
        this._ctx.beginPath();
        this._ctx.arc(150, 100, 50, 0, 2 * Math.PI);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    smile() {
        this._ctx.beginPath();
        this._ctx.arc(150, 100, 25, (8 * Math.PI) / 4, (Math.PI));
        this._ctx.stroke();
    }

    body() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 150);
        this._ctx.lineTo(150, 275);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    //in user's perspective
    leftHand() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 175);
        this._ctx.lineTo(100, 200);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    rightHand() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 175);
        this._ctx.lineTo(200, 200);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    leftLeg() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 275);
        this._ctx.lineTo(100, 325);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    rightLeg() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 275);
        this._ctx.lineTo(200, 325);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    throttle() {
        this._ctx.beginPath();
        this._ctx.moveTo(50, 162.5);
        this._ctx.lineTo(250, 162.5);
        this._ctx.closePath();
        this._ctx.stroke();
    }
}







