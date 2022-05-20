/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {NUMBER_SUITS} from './suit';
import {NUMBER_RANKS} from './rank';
import {Card} from './card';
import {Hand} from './hand';

/**
 * Class that represents a deck of cards.
 */
export class Deck {
  private cards: Card[];

  /**
   * Constructor of the class.
   */
  constructor() {
    this.cards = [];
    for (let suit = 0; suit < NUMBER_SUITS; suit++) {
      for (let rank = 0; rank < NUMBER_RANKS; rank++) {
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
  public dealHands(numberHands: number, numberCards: number): Hand[] {
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
  public toString(): string {
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
  public popCard(): Card | undefined {
    return this.cards.pop();
  }

  /**
   * Adds a card to the deck.
   * @param {Card} card - Card to add.
   */
  public addCard(card: Card): void {
    this.cards.push(card);
  }

  /**
   * Shuffles the deck.
   */
  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[random]] = [this.cards[random], this.cards[i]];
    }
  }

  /**
   * Sorts the deck.
   */
  public sort(): void {
    this.cards.sort((card1, card2) => card1.higherTo(card2) ? 1 : -1);
  }

  /**
   * Moves the cards from the deck to the hand.
   * @param {Hand} hand - Hand to move cards.
   * @param {number} numberCards - Number of cards to move.
   */
  public moveCards(hand: Hand, numberCards: number): void {
    for (let i = 0; i < numberCards; i++) {
      const card = this.popCard();
      if (card) {
        hand.addCard(card);
      }
    }
  }
}
