/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */
import { PokerHandClass } from './poker-hand-class.js';
/**
 * Class that represents a poker hand.
 */
export class PokerHand {
    /**
     * True if has pair, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has pair, false otherwise.
     */
    static hasPair(hand) {
        const cards = hand.getCards();
        for (let i = 0; i < cards.length - 1; i++) {
            for (let j = i + 1; j < cards.length; j++) {
                if (cards[i].equalsRank(cards[j])) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * True if has two pairs, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has two pairs, false otherwise.
     */
    static hasTwoPairs(hand) {
        const cards = hand.getCards();
        let pairs = 0;
        for (let i = 0; i < cards.length - 1; i++) {
            for (let j = i + 1; j < cards.length; j++) {
                if (cards[i].equalsRank(cards[j])) {
                    pairs++;
                }
            }
        }
        return pairs === 2;
    }
    /**
     * True if has three of a kind, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has three of a kind, false otherwise.
     */
    static hasThreeOfAKind(hand) {
        const cards = hand.getCards();
        for (let i = 0; i < cards.length - 2; i++) {
            for (let j = i + 1; j < cards.length - 1; j++) {
                for (let k = j + 1; k < cards.length; k++) {
                    if (cards[i].equalsRank(cards[j]) &&
                        cards[i].equalsRank(cards[k])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /**
     * True if has straight, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has straight, false otherwise.
     */
    static hasStraight(hand) {
        const cards = hand.getCards();
        const firstCard = cards[0];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].getRank() === firstCard.getRank() + i) {
                return true;
            }
        }
        return false;
    }
    /**
     * True if has flush, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has flush, false otherwise.
     */
    static hasFlush(hand) {
        const cards = hand.getCards();
        for (let i = 0; i < cards.length - 1; i++) {
            if (cards[i].getSuit() !== cards[i + 1].getSuit()) {
                return false;
            }
        }
        return true;
    }
    /**
     * True if has full house, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has full house, false otherwise.
     */
    static hasFullHouse(hand) {
        return this.hasThreeOfAKind(hand) && this.hasPair(hand);
    }
    /**
     * True if has four of a kind, false otherwise.
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has four of a kind, false otherwise.
     */
    static hasFourOfAKind(hand) {
        const cards = hand.getCards();
        for (let i = 0; i < cards.length - 3; i++) {
            for (let j = i + 1; j < cards.length - 2; j++) {
                for (let k = j + 1; k < cards.length - 1; k++) {
                    for (let l = k + 1; l < cards.length; l++) {
                        if (cards[i].equalsRank(cards[j]) &&
                            cards[i].equalsRank(cards[k]) &&
                            cards[i].equalsRank(cards[l])) {
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
     * @param {Hand} hand Hand to classify.
     * @return {boolean} True if has straight flush, false otherwise.
     */
    static hasStraightFlush(hand) {
        return this.hasStraight(hand) && this.hasFlush(hand);
    }
    /**
     * Classifies the hand.
     * @param {Hand} hand Hand to classify.
     * @return {PokerHandClass} Classified hand.
     */
    static classify(hand) {
        if (this.hasStraightFlush(hand)) {
            return PokerHandClass.STRAIGHT_FLUSH;
        }
        else if (this.hasFourOfAKind(hand)) {
            return PokerHandClass.FOUR_OF_A_KIND;
        }
        else if (this.hasFullHouse(hand)) {
            return PokerHandClass.FULL_HOUSE;
        }
        else if (this.hasFlush(hand)) {
            return PokerHandClass.FLUSH;
        }
        else if (this.hasStraight(hand)) {
            return PokerHandClass.STRAIGHT;
        }
        else if (this.hasThreeOfAKind(hand)) {
            return PokerHandClass.THREE_OF_A_KIND;
        }
        else if (this.hasTwoPairs(hand)) {
            return PokerHandClass.TWO_PAIRS;
        }
        else if (this.hasPair(hand)) {
            return PokerHandClass.PAIR;
        }
        else {
            return PokerHandClass.HIGH_CARD;
        }
    }
}
