/**
 * Universidad de La Laguna
 * @author Daniel Hernandez de Leon
 */
import { Model } from './model/model.js';
import { View } from './view/view.js';
import { Controller } from './controller/controller.js';
const main = () => {
    const model = new Model();
    const view = new View(model);
    const controller = new Controller(model, view);
    view.setController(controller);
    view.init();
};
main();
