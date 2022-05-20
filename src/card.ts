/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {Suit} from './suit';
import {Rank} from './rank';

/**
 * Class that represents a card.
 */
export class Card {
  private suit: Suit;
  private rank: Rank;
  private image: HTMLImageElement;

  /**
   * Constructor of the class.
   * @param {Suit} suit - Suit of the card.
   * @param {Rank} rank - Rank of the card.
   */
  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
    this.image = new Image();
    this.image.src = `img/${rank}_${suit}.png`;
  }

  /**
   * String representation of the card.
   * @return {string} String representation of the card.
   */
  public toString(): string {
    return `${this.rank} of ${this.suit}`;
  }

  /**
   * Compare two cards.
   * @param {Card} card - Card to compare.
   * @return {boolean} True if the cards has higher rank, false otherwise.
   */
  public higherTo(card: Card): boolean {
    if (this.suit === card.suit) {
      return this.rank > card.rank;
    }
    return this.suit > card.suit;
  }
}
