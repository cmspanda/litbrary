import {LitElement, css, html} from 'lit';

/**
 * A simple button
 * 
 * @property {String} text Button Text
 * @property {String}
 */
export default class Button extends LitElement {

    static properties = {
        text: {}, 
        action: {type: String},
        event: {type: String}, 
        id: {type: String, reflect: true},
    }

    /**
     * Below are the available style variables, fallbacks if applicable, and their defaults
     * Format: 
     * --declared-variable [fallback] (default value)
     * 
     * <pre>
     * --teaser-font-family [] ()
     * --teaser-primary-color
     * </pre>
     */
    static styles = css`
        :host {
            
        }
    `;

    constructor() {
        super();

        this.text = "Push Me";
        this.id = this.id || `lb-${crypto.randomUUID()}`;
    }

    /**
     * Action and event 
     */
    async firstUpdated() {
        
        let action = this.action || 'click';
        let eventName = this.event || 'lb-button-click';

        this.addEventListener(this.action, (() => {
            this.dispatchEvent(new CustomEvent(this.event, {
                detail: {
                    btnId: this.id, 
                    btnText: this.text,
                    eventName: this.event
                },
                bubbles: true,
                composed: true
            }))
        }))
    }
    
    render() {

        return html`
            <button>
                ${this.text}
            </button>
        `;
    }
}

customElements.define('lb-button', Button);

/*

*/