/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */

import {Model} from '../model/model.js';
import {View} from '../view/view.js';

/**
 * Class that represents the controller.
 */
export class Controller {
  private model: Model;
  private view: View;
  private dealHands: [HTMLButtonElement, HTMLButtonElement];
  private handsDealed: number = 0;
  private MILLISECONDS_TO_WAIT: number = 3000;

  /**
   * Constructor of the class.
   * @param {Model} model - Model of the game.
   * @param {View} view - View of the game.
   */
  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
    this.dealHands = [
      document.getElementById('deal-hand-1') as HTMLButtonElement,
      document.getElementById('deal-hand-2') as HTMLButtonElement,
    ];
    this.actionPerformed();
    this.buttonsStyle();
  }

  /**
   * Performs the action of the button.
   */
  private actionPerformed(): void {
    this.dealHands[0].addEventListener('click', () => {
      this.handsDealed++;
      this.model.dealHand1();
      if (this.handsDealed == 2) {
        const winner = this.model.checkWinner();
        this.view.setWinner(winner);
        setTimeout(() => {
          this.handsDealed = 0;
          this.view.reset();
          this.model.reset();
        }, this.MILLISECONDS_TO_WAIT);
      }
    });
    this.dealHands[1].addEventListener('click', () => {
      this.handsDealed++;
      this.model.dealHand2();
      if (this.handsDealed == 2) {
        const winner = this.model.checkWinner();
        this.view.setWinner(winner);
        setTimeout(() => {
          this.handsDealed = 0;
          this.view.reset();
          this.model.reset();
        }, this.MILLISECONDS_TO_WAIT);
      }
    });
  }

  /**
   * Sets the buttons style.
   */
  private buttonsStyle(): void {
    this.dealHands.forEach((button) => {
      button.style.position = 'absolute';
      button.style.left = '50%';
      button.style.top = '50%';
      button.style.transform = 'translate(-50%, -50%)';
      button.style.width = '10%';
      button.style.height = '10%';
      button.style.backgroundColor = '#000000';
      button.style.border = 'none';
      button.style.borderRadius = '5px';
      button.style.color = 'white';
      button.style.fontSize = '20px';
      button.style.fontWeight = 'bold';
      button.style.cursor = 'pointer';
    });
    this.dealHands[0].style.left = '17.5%';
    this.dealHands[0].style.top = '82.5%';
    this.dealHands[1].style.left = '82.5%';
    this.dealHands[1].style.top = '17.5%';
  }
}
