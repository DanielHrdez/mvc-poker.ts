/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {Suit} from './suit.js';
import {Rank} from './rank.js';

/**
 * Class that represents a card.
 */
export class Card {
  private suit: Suit | undefined;
  private rank: Rank | undefined;
  private image: HTMLImageElement;

  /**
   * Constructor of the class.
   * @param {Suit} suit - Suit of the card.
   * @param {Rank} rank - Rank of the card.
   */
  constructor(suit?: Suit, rank?: Rank) {
    this.suit = suit;
    this.rank = rank;
    this.image = document.createElement('img');
    if (this.suit && this.rank) {
      this.image.src = `cards-img/${rank}${suit}.png`;
    } else {
      this.image.src = 'cards-img/red_back.png';
    }
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
    if (!this.suit || !this.rank || !card.suit || !card.rank) {
      throw new Error('Card is not initialized');
    }
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
  public equalsRank(card: Card): boolean {
    return this.rank === card.rank;
  }

  /**
   * Getter of the rank.
   * @return {Rank} Rank of the card.
   */
  public getRank(): Rank {
    if (!this.rank) {
      throw new Error('Card is not initialized');
    }
    return this.rank;
  }

  /**
   * Getter of the suit.
   * @return {Suit} Suit of the card.
   */
  public getSuit(): Suit {
    if (!this.suit) {
      throw new Error('Card is not initialized');
    }
    return this.suit;
  }

  /**
   * Getter of the image.
   * @return {HTMLImageElement} Image of the card.
   */
  public getImage(): HTMLImageElement {
    return this.image;
  }
}
