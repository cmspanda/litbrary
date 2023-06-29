import { LitElement, css, html } from "lit";

// TODO: Validate the following styles: 
// - Inline in a header/footer
// -- With an associated submenu
// - Left Menu, full height
// - Inline Context?

export default class Navigation extends LitElement {
    static properties = {
        items: {type: Object}
    }

    static styles = css`
        :host {
            --this-hover-color: var(--nav-hover-color, var(--hover-color, rgb(200,200,200)));
        }

        nav {
            position: relative;
        }

        ul ul {
            padding-inline-start: 1em;
            padding-top: 0.5em;
        }

        li {
            list-style-type: none;
            padding: 0.5em 1em;
        }

        ul li {
            display: inline-block;
            line-height: 1.5em;
        }

        ul li > ul {
            display: none;
        }

        ul li:hover > ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 2.4em;
        }

        ul li:hover {
            background-color: var(--this-hover-color);
        }
    `

    constructor() {
        super();

        // Reactive properties
        this.items = [];
    }

    createListItem(item) {
        return html`
            <li>
                <a href="${item.link}">${item.text}</a>
                ${this.createList(item.children)}
            </li>
        `
    };

    createList(items) {
        if (items && items.length > 0) {
            return html`
                <ul>
                    ${items.map(item => { 
                        return this.createListItem(item);
                    })}
                </ul>
            `
        }
    }

    render() {
        return html`
            <nav>
                <ul>
                    ${this.createList(this.items)}
                </ul>
            </nav>
        `;
    }
}

customElements.define('lb-navigation', Navigation);