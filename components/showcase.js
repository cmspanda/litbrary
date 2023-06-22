import {LitElement, css, html} from 'lit';

export default class Showcase extends LitElement {

    static properties = {
        title: {}, 
        description: {}
    }

    static styles = css`
        :host {
            font-family: sans-serif;
        }

        div.container {
            display: flex;
            flex-direction: column;
            min-height: 10vh;
            border: thin solid #999;
            margin: 1rem;
            padding: 1rem;
            border-radius: 4px;
        }

        h4 {
            font-weight: bold;
            font-size: 0.7em;
            margin: 0.25rem;
            color: rgb(150,150,150);
        }

        h2 { 
            font-weight: bold;
            margin: 0;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid black;
        }

        .description {
            color: rgb(51, 51, 51);
            padding: 1rem;
            background-color: #eee;
            font-family: sans-serif;
            border-top: 2px solid black;
        }

        .demo {
            padding: 1rem 0;
            min-height: 4rem;
            background: none;
        }
    `;

    constructor() {
        super();

        this.title = "Component Showcase";
        this.description = "TBD";
    }

    render() {
        return html`
            <div class="container">
                <h4>Component Showcase</h2>
                <h2>${this.title}</h2>
                <div class="demo">
                    <slot></slot>
                </div>
                <div class="description">${this.description}</div>
            </div>
        `;
    }
}
customElements.define('lb-showcase', Showcase);
