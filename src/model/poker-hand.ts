/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {PokerHandClasses} from './poker-hand-classes';
import {Hand} from './hand';

/**
 * Class that represents a poker hand.
 */
export class PokerHand extends Hand {
  /**
   * True if has pair, false otherwise.
   * @return {boolean} True if has pair, false otherwise.
   */
  public hasPair(): boolean {
    for (let i = 0; i < this.cards.length - 1; i++) {
      for (let j = i + 1; j < this.cards.length; j++) {
        if (this.cards[i].equalsRank(this.cards[j])) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * True if has two pairs, false otherwise.
   * @return {boolean} True if has two pairs, false otherwise.
   */
  public hasTwoPairs(): boolean {
    let pairs = 0;
    for (let i = 0; i < this.cards.length - 1; i++) {
      for (let j = i + 1; j < this.cards.length; j++) {
        if (this.cards[i].equalsRank(this.cards[j])) {
          pairs++;
        }
      }
    }
    return pairs === 2;
  }

  /**
   * True if has three of a kind, false otherwise.
   * @return {boolean} True if has three of a kind, false otherwise.
   */
  public hasThreeOfAKind(): boolean {
    for (let i = 0; i < this.cards.length - 2; i++) {
      for (let j = i + 1; j < this.cards.length - 1; j++) {
        for (let k = j + 1; k < this.cards.length; k++) {
          if (this.cards[i].equalsRank(this.cards[j]) &&
              this.cards[i].equalsRank(this.cards[k])) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * True if has straight, false otherwise.
   * @return {boolean} True if has straight, false otherwise.
   */
  public hasStraight(): boolean {
    const firstCard = this.cards[0];
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].getRank() === firstCard.getRank() + i) {
        return true;
      }
    }
    return false;
  }

  /**
   * True if has flush, false otherwise.
   * @return {boolean} True if has flush, false otherwise.
   */
  public hasFlush(): boolean {
    for (let i = 0; i < this.cards.length - 1; i++) {
      if (this.cards[i].getSuit() !== this.cards[i + 1].getSuit()) {
        return false;
      }
    }
    return true;
  }

  /**
   * True if has full house, false otherwise.
   * @return {boolean} True if has full house, false otherwise.
   */
  public hasFullHouse(): boolean {
    return this.hasThreeOfAKind() && this.hasPair();
  }

  /**
   * True if has four of a kind, false otherwise.
   * @return {boolean} True if has four of a kind, false otherwise.
   */
  public hasFourOfAKind(): boolean {
    for (let i = 0; i < this.cards.length - 3; i++) {
      for (let j = i + 1; j < this.cards.length - 2; j++) {
        for (let k = j + 1; k < this.cards.length - 1; k++) {
          for (let l = k + 1; l < this.cards.length; l++) {
            if (this.cards[i].equalsRank(this.cards[j]) &&
                this.cards[i].equalsRank(this.cards[k]) &&
                this.cards[i].equalsRank(this.cards[l])) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * True if has straight flush, false otherwise.
   * @return {boolean} True if has straight flush, false otherwise.
   */
  public hasStraightFlush(): boolean {
    return this.hasStraight() && this.hasFlush();
  }

  /**
   * Classifies the hand.
   * @return {PokerHandClasses} Classified hand.
   */
  public classify(): PokerHandClasses {
    if (this.hasStraightFlush()) {
      return PokerHandClasses.STRAIGHT_FLUSH;
    } else if (this.hasFourOfAKind()) {
      return PokerHandClasses.FOUR_OF_A_KIND;
    } else if (this.hasFullHouse()) {
      return PokerHandClasses.FULL_HOUSE;
    } else if (this.hasFlush()) {
      return PokerHandClasses.FLUSH;
    } else if (this.hasStraight()) {
      return PokerHandClasses.STRAIGHT;
    } else if (this.hasThreeOfAKind()) {
      return PokerHandClasses.THREE_OF_A_KIND;
    } else if (this.hasTwoPairs()) {
      return PokerHandClasses.TWO_PAIRS;
    } else if (this.hasPair()) {
      return PokerHandClasses.PAIR;
    } else {
      return PokerHandClasses.HIGH_CARD;
    }
  }
}
