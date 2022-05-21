/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */
import { PokerHandClass } from '../model/poker-hand-class.js';
/**
 * Class that represents the view.
 */
export class View {
    /**
     * Constructor of the class.
     * @param {Model} model - Model of the game.
     */
    constructor(model) {
        this.controller = null;
        this.context = null;
        this.backgroundImage = null;
        this.PLAYERS = 2;
        this.winner = null;
        this.model = model;
        this.backgroundImage = new Image();
        this.backgroundImage.src = './img/poker-texture.jpg';
    }
    /**
     * Sets the controller.
     * @param {Controller} controller - Controller of the game.
     */
    setController(controller) {
        this.controller = controller;
    }
    /**
     * Initializes the view.
     */
    init() {
        const canvas = document.getElementById('canvas');
        this.canvasStyle(canvas);
        window.onresize = () => this.canvasStyle(canvas);
        this.context = canvas.getContext('2d');
        requestAnimationFrame(() => this.update());
    }
    /**
     * Sets the canvas style.
     * @param {HTMLCanvasElement} canvas - Canvas element.
     */
    canvasStyle(canvas) {
        canvas.width = window.innerWidth * 0.75;
        canvas.height = window.innerHeight * 0.75;
        canvas.style.position = 'absolute';
        canvas.style.left = '50%';
        canvas.style.top = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
    }
    /**
     * Updates the view.
     */
    update() {
        if (!this.context)
            throw new Error('Context is not initialized');
        this.draw();
        requestAnimationFrame(() => this.update());
    }
    /**
     * Draws the view.
     */
    draw() {
        const width = this.context.canvas.width;
        const height = this.context.canvas.height;
        this.context.clearRect(0, 0, width, height);
        if (!this.backgroundImage) {
            throw new Error('Background image is not initialized');
        }
        this.context.drawImage(this.backgroundImage, 0, 0, width, height);
        this.drawCards();
        this.showWinner();
    }
    /**
     * Draws the cards.
     */
    drawCards() {
        const cards = this.model.getCards();
        const width = this.context.canvas.width;
        const height = this.context.canvas.height;
        const leftMargin = width / 10;
        const topMargin = height / 10;
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i].getImage();
            const cardWidth = (width - 2 * leftMargin) / 5;
            const cardHeight = (height - 2 * topMargin) / 2;
            const horizontalMargin = cardWidth;
            const verticalMargin = height - cardHeight - 2 * topMargin;
            const x = (i % 5) * horizontalMargin + leftMargin;
            const y = Math.floor(i / 5) * verticalMargin + topMargin;
            this.context.drawImage(card, x, y, cardWidth, cardHeight);
        }
    }
    /**
     * Shows the winner.
     */
    showWinner() {
        if (!this.winner)
            return;
        const width = this.context.canvas.width;
        const height = this.context.canvas.height;
        const message = this.winner[0] !== this.PLAYERS ?
            `Player 1 wins with ${PokerHandClass[this.winner[1]]}!` :
            `Player 2 wins with ${PokerHandClass[this.winner[1]]}!`;
        const fontSize = width / message.length;
        this.context.font = `bold ${fontSize}px Arial`;
        this.context.fillStyle = 'black';
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';
        const textWidth = this.context.measureText(message).width;
        const x = (width - textWidth) / 2;
        const y = (height - fontSize) / 2;
        const border = 2;
        const doubleBorder = border * 2;
        this.context.fillRect(x - border, y - border, textWidth + doubleBorder, fontSize + doubleBorder);
        this.context.clearRect(x, y, textWidth, fontSize);
        this.context.fillText(message, width / 2, height / 2);
    }
    /**
     * Sets the winner.
     * @param {number} winner - Winner of the game.
     */
    setWinner(winner) {
        this.winner = winner;
    }
    /**
     * Reset the view.
     */
    reset() {
        this.winner = null;
    }
}
