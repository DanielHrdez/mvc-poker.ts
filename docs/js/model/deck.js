/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */
import { Suit } from './suit.js';
import { Rank } from './rank.js';
import { Card } from './card.js';
import { Hand } from './hand.js';
/**
 * Class that represents a deck of cards.
 */
export class Deck {
    /**
     * Constructor of the class.
     */
    constructor() {
        this.cards = [];
        for (const suit of Object.values(Suit)) {
            for (const rank of Object.values(Rank)) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }
    /**
     * Deals a hand of cards.
     * @param {number} numberHands - Number of hands to deal.
     * @param {number} numberCards - Number of cards to deal per hand.
     * @return {Hand[]} Array of hands.
     */
    dealHands(numberHands, numberCards) {
        const hands = [];
        for (let i = 0; i < numberHands; i++) {
            const hand = new Hand();
            for (let j = 0; j < numberCards; j++) {
                const card = this.popCard();
                if (card) {
                    hand.addCard(card);
                }
            }
            hands.push(hand);
        }
        return hands;
    }
    /**
     * String representation of the deck.
     * @return {string} String representation of the deck.
     */
    toString() {
        let str = '';
        for (const card of this.cards) {
            str += `${card.toString()}\n`;
        }
        return str;
    }
    /**
     * Pops a card from the deck.
     * @return {Card | undefined} Popped card.
     */
    popCard() {
        return this.cards.pop();
    }
    /**
     * Adds a card to the deck.
     * @param {Card} card - Card to add.
     */
    addCard(card) {
        this.cards.push(card);
    }
    /**
     * Shuffles the deck.
     */
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[random]] = [this.cards[random], this.cards[i]];
        }
    }
    /**
     * Sorts the deck.
     */
    sort() {
        this.cards.sort((card1, card2) => card1.higherTo(card2) ? 1 : -1);
    }
    /**
     * Moves the cards from the deck to the hand.
     * @param {Hand} hand - Hand to move cards.
     * @param {number} numberCards - Number of cards to move.
     */
    moveCards(hand, numberCards) {
        for (let i = 0; i < numberCards; i++) {
            const card = this.popCard();
            if (card) {
                hand.addCard(card);
            }
        }
    }
}
