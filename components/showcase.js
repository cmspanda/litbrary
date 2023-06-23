import {LitElement, css, html} from 'lit';

export default class Showcase extends LitElement {

    static properties = {
        title: {}, 
        description: {}
    }

    static styles = css`
        :host {
            
            /* Color processing: specific styling -> theme color -> default color */
            --showcase-font-family: var(--font-family, sans-serif);
            --showcase-background: var(--primary-background, none);
            --showcase-outer-border-color: var(--primary-border-color, #999);
            --showcase-inner-border-color: var(--accent-border-color, #999);
            --showcase-text-color: var(--primary-text-color, rgb(150,150,150));
            --showcase-heading-color: var(--primary-heading-color, var(--showcase-text-color, rgb(150,150,150)));
            --showcase-description-background: var(--accent-background, #444);
            
            font-family: var(--showcase-font-family);
            color: var(--showcase-text-color);
        }

        /* TODO: Lookup dark mode handling */

        div.container {
            display: flex;
            flex-direction: column;
            min-height: 10vh;
            border: thin solid var(--showcase-outer-border-color);
            margin: 1rem;
            padding: 1rem;
            border-radius: 4px;
        }

        h4 {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 2em;
            margin: 0;
            color: var(--showcase-heading-color);
        }

        h2 { 
            font-weight: bold;
            margin: 0;
            color: var(--showcase-heading-color);
        }

        .description {
            padding: 1rem;
            background: var(--showcase-description-background);
        }

        .demo {
            padding: 1rem 0;
            min-height: 4rem;
            background: none;
            border-top: 2px solid var(--showcase-inner-border-color);
            border-bottom: 2px solid var(--showcase-inner-border-color);
            margin: 1rem 0;
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
