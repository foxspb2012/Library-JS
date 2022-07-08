import {createElement} from '../render';

const createContainerTemplate = () => '<section class="main container"></section>';

export default class ContainerView {
  getTemplate() {
    return createContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
