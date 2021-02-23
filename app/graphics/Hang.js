class Hang {
    constructor() {
        const canvas = document.getElementById('hangman');
        this._ctx = canvas.getContext('2d');

        this._ctx.fillStyle = 'white';
        this._ctx.strokeStyle = 'white';
        this._ctx.lineWidth = 5;
    }


    draw() {
        this._init();
    }

    _init() {
        this._ctx.beginPath();
        this._ctx.moveTo(0, 2.5);
        this._ctx.lineTo(300, 2.5);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _rope() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 0);
        this._ctx.lineTo(150, 50);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _head() {
        this._ctx.beginPath();
        this._ctx.arc(150, 100, 50, 0, 2 * Math.PI);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _body() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 150);
        this._ctx.lineTo(150, 275);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    //in user's perspective
    _leftHand() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 175);
        this._ctx.lineTo(100, 200);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _rightHand() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 175);
        this._ctx.lineTo(200, 200);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _leftLeg() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 275);
        this._ctx.lineTo(100, 325);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _rightLeg() {
        this._ctx.beginPath();
        this._ctx.moveTo(150, 275);
        this._ctx.lineTo(200, 325);
        this._ctx.closePath();
        this._ctx.stroke();
    }

    _throttle() {
        this._ctx.beginPath();
        this._ctx.moveTo(50, 162.5);
        this._ctx.lineTo(250, 162.5);
        this._ctx.closePath();
        this._ctx.stroke();
    }
}







