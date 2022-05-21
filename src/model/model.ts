/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {Card} from './card.js';
import {Deck} from './deck.js';
import {Hand} from './hand.js';
import {PokerHandClass} from './poker-hand-class.js';
import {PokerHand} from './poker-hand.js';

/**
 * Class that represents the model.
 */
export class Model {
  private deck: Deck;
  private hands: Hand[];
  private CARDS: number = 5;

  /**
   * Constructor of the class.
   */
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.hands = [
      new Hand(),
      new Hand(),
    ];
  }

  /**
   * Deals the hand of the player 1.
   */
  public dealHand1(): void {
    this.hands[0] = this.deck.dealHands(1, this.CARDS)[0];
  }

  /**
   * Deals the hand of the player 2.
   */
  public dealHand2(): void {
    this.hands[1] = this.deck.dealHands(1, this.CARDS)[0];
  }

  /**
   * Return the cards of the hands.
   * @return {Card[]} Array of cards.
   */
  public getCards(): Card[] {
    let result: Card[] = [];
    const cards1 = this.hands[0].getCards();
    const cards2 = this.hands[1].getCards();
    if (cards2.length === 0) {
      for (let i = 0; i < this.CARDS; i++) {
        result.push(new Card());
      }
    } else {
      result = result.concat(cards2);
    }
    if (cards1.length === 0) {
      for (let i = 0; i < this.CARDS; i++) {
        result.push(new Card());
      }
    } else {
      result = result.concat(cards1);
    }
    return result;
  }

  /**
   * Return the winner.
   * @return {[number, PokerHandClass]} Player.
   */
  public checkWinner(): [number, PokerHandClass] {
    const firstHandClass = PokerHand.classify(this.hands[0]);
    const secondHandClass = PokerHand.classify(this.hands[1]);
    if (firstHandClass > secondHandClass) {
      return [1, firstHandClass];
    }
    if (firstHandClass < secondHandClass) {
      return [2, secondHandClass];
    }
    const firstHandFirstCard = this.hands[0].getCards()[0];
    const secondHandFirstCard = this.hands[1].getCards()[0];
    return [
      firstHandFirstCard.higherTo(secondHandFirstCard) ? 1 : 2,
      firstHandClass,
    ];
  }

  /**
   * Reset the model.
   */
  public reset(): void {
    this.hands = [
      new Hand(),
      new Hand(),
    ];
    this.deck = new Deck();
    this.deck.shuffle();
  }
}
