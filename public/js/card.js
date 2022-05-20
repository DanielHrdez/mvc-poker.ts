/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */
/**
 * Class that represents a card.
 */
export class Card {
    /**
     * Constructor of the class.
     * @param {Suit} suit - Suit of the card.
     * @param {Rank} rank - Rank of the card.
     */
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.image = document.createElement('img');
        this.image.src = `img/${rank}_${suit}.png`;
    }
    /**
     * String representation of the card.
     * @return {string} String representation of the card.
     */
    toString() {
        return `${this.rank} of ${this.suit}`;
    }
    /**
     * Compare two cards.
     * @param {Card} card - Card to compare.
     * @return {boolean} True if the cards has higher rank, false otherwise.
     */
    higherTo(card) {
        if (this.suit === card.suit) {
            return this.rank > card.rank;
        }
        return this.suit > card.suit;
    }
    /**
     * Compare if the card rank is equal to another card rank.
     * @param {Card} card - Card to compare.
     * @return {boolean} True if the cards has equal rank, false otherwise.
     */
    equalsRank(card) {
        return this.rank === card.rank;
    }
    /**
     * Getter of the rank.
     * @return {Rank} Rank of the card.
     */
    getRank() {
        return this.rank;
    }
    /**
     * Getter of the suit.
     * @return {Suit} Suit of the card.
     */
    getSuit() {
        return this.suit;
    }
}
