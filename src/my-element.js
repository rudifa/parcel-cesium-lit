// create a lit element
import {LitElement, html} from 'lit-element';

export class MyElement extends LitElement {
  render() {
    return html` <h1>Hello World!</h1>
      <p>from my-element.js</p>`;
  }
}
customElements.define('my-element', MyElement);
