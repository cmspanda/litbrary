import {LitElement, html} from 'lit';

export default class MyElement extends LitElement {
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}
customElements.define('my-element', MyElement);
