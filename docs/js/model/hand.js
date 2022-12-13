/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */
/**
 * Class that represents a hand of cards.
 */
export class Hand {
    /**
     * Constructor of the class.
     */
    constructor() {
        this.cards = [];
        this.label = '';
    }
    /**
     * String representation of the hand.
     * @return {string} String representation of the hand.
     */
    toString() {
        let str = '';
        for (const card of this.cards) {
            str += `${card.toString()}\n`;
        }
        return str;
    }
    /**
     * Pops a card from the hand.
     * @return {Card | undefined} Popped card.
     */
    popCard() {
        return this.cards.pop();
    }
    /**
     * Adds a card to the hand.
     * @param {Card} card - Card to add.
     */
    addCard(card) {
        this.cards.push(card);
    }
    /**
     * Getter of the cards.
     * @return {Card[]} Array of cards.
     */
    getCards() {
        return this.cards;
    }
}
