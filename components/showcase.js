import {LitElement, css, html} from 'lit';

/**
 * This showcase component is used to showcase and describe the use of a component. 
 * The associated component should be included as a slotted child. 
 * 
 * ### Slot Usage
 * - default: Content provided as slotted children will be displayed with a title above and 
 * description below the slotted element(s). This is intended to be the component to showcase. 
 * 
 * @property {String} title The title of the component being presented
 * @property {String} description The description of the component being presented
 */
export default class Showcase extends LitElement {

    static properties = {
        title: {}, 
        description: {}
    }

    /**
     * Below are the available style variables, fallbacks if applicable, and their defaults
     * Format: 
     * `--declared-variable [fallback] (default value)`
     * 
     * <pre>
     * --font-family [] (sans-serif)
     * --primary-background [] (none)
     * --primary-border-color [] (#999)
     * --accent-border-color [] (#999)
     * --primary-text-color [] (rgb(150,150,150))
     * --primary-heading-color [--primary-text-color] (rgb(150,150,150)
     * --accent-background [] (#444)
     * </pre>
     */
    static styles = css`
        :host {
            
            --this-font-family: var(--font-family, sans-serif);
            --this-background: var(--primary-background, none);
            --this-outer-border-color: var(--primary-border-color, #999);
            --this-inner-border-color: var(--accent-border-color, #999);
            --this-text-color: var(--primary-text-color, rgb(150,150,150));
            --this-heading-color: var(--primary-heading-color, var(--primary-text-color, rgb(150,150,150)));
            --this-description-background: var(--accent-background, #444);
            
            font-family: var(--this-font-family);
            color: var(--this-text-color);
        }

        /* TODO: Lookup dark mode handling */

        div.container {
            display: flex;
            flex-direction: column;
            min-height: 10vh;
            border: thin solid var(--this-outer-border-color);
            margin: 1rem;
            padding: 1rem;
            border-radius: 4px;
        }

        h4 {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 2em;
            margin: 0;
            color: var(--this-heading-color);
        }

        h2 { 
            font-weight: bold;
            margin: 0;
            color: var(--this-heading-color);
        }

        .description {
            padding: 1rem;
            background: var(--this-description-background);
        }

        .demo {
            padding: 1rem 0;
            min-height: 4rem;
            background: none;
            border-top: 2px solid var(--this-inner-border-color);
            border-bottom: 2px solid var(--this-inner-border-color);
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
