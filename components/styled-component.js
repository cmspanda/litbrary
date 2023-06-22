import {LitElement, css, html} from 'lit';

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
    color: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
        --text-color: blue;
    }

    p {
        color: var(--text-color, blue);
        padding: 2em; 
        border: 1px solid grey;
        min-width: 10rem;
        min-height: 2rem;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<p style="--text-color:${this.color}">Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);