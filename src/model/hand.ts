/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {Card} from './card';

/**
 * Class that represents a hand of cards.
 */
export class Hand {
  protected cards: Card[];
  protected label: string;

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
  public toString(): string {
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
  public popCard(): Card | undefined {
    return this.cards.pop();
  }

  /**
   * Adds a card to the hand.
   * @param {Card} card - Card to add.
   */
  public addCard(card: Card): void {
    this.cards.push(card);
  }
}
