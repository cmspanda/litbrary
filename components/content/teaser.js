import {LitElement, css, html} from 'lit';

/**
 * 
 * ### Slot Usage
 * - default: Any children will be rendered in the default slot. This is intended to allow 
 * for usage of a `<picture>` tag. 
 *   - Use either the `@image` property or slotted elements, do not use both
 * 
 * <pre>
 * - --teaser-font-family [--font-family] (sans-serif): Specify the font family to be used for this component
 * - --teaser-primary-color [--primary-text-color] (rgb(150150,150)): Primary text coloring for the component
 * </pre>
 * // TODO: Fill in all styles once complete
 * @property {String} title Text that will be dislplayed in the header
 * @property {String} text Body copy that acts at the main informative text
 * @property {String} image The image that will be shown with this teaser. If provided, an image tag will be created with this as the source. See note about slots for use of <picture>
 * @property {String} alt 
 * @property {String} background Provide a proper CSS value for the 'background' configuration; can be used to inject an image as a background and avoiding use of an <img> tag altogether.
 * @property {String} headingLevel Specify the level of the h tag to be used (e.g. "3" will render an <h3> tag for the heading, default is 2)
 */
export default class Teaser extends LitElement {

    static properties = {
        title: {}, 
        text: {}, 
        image: {}, 
        alt: {}, 
        background: {},
        headingLevel: {type: Number}
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
            /* Color processing: specific styling -> theme color -> default color */
            --this-font-family: var(--font-family, sans-serif);
            --this-color: var(--primary-text-color, rgb(150,150,150));
            --this-aspect-ratio: var(--default-aspect-ratio, 16:9);
            --teaser-content-background: none;
            --teaser-image-background: none; 
            
            
            
            font-family: var(--this-font-family);
            color: var(--teaser-text-color);
        }

        .teaser-content {
            background: var(--teaser-content-background);
        }

        .teaser-image {
            background: var(--teaser-image-background);
        }

        .image-container { 
            width: 100%;
        }

        img {
            width: 100%;
        }
    `;

    constructor() {
        super();

        this.title = "Component Teaser";
        this.text = "TBD";
        this.headingLevel = "2";
    }

    createHeaderLevel (level, title) {

        let headerHtml;

        switch(level) {
            case 1:  
                headerHtml = html`<h1 class="teaser-header">${title}</h1>`;
                break;
            case 2:  
                headerHtml = html`<h2 class="teaser-header">${title}</h2>`;
                break;
            case 3:  
                headerHtml = html`<h3 class="teaser-header">${title}</h3>`;
                break;
            case 4:  
                headerHtml = html`<h4 class="teaser-header">${title}</h4>`;
                break;
            case 5:  
                headerHtml = html`<h5 class="teaser-header">${title}</h5>`;
                break;
            default:
                headerHtml = html`<h class="teaser-header"2>${title}</h2>`;
        }

        return headerHtml;
    }

    // TODO: Determine that I can position content appropriatly for the following
    // 1. Background only image
    // 2. Img provide in attribute, uses img tag
    // 3. Picture tag provided in slot
    
    render() {
        return html`
            <div style="${this.background}" class="teaser lb-teaser teaser-container">
                <div class="teaser-content">
                    ${this.createHeaderLevel(this.headingLevel, this.title)}
                    <p>${this.text}</p>
                </div>
                <div class="teaser-image">
                    <slot></slot>
                    ${this.image ? html`<img src=${this.image} />` : ''}
                </div>
            </div>
        `;
    }
}

customElements.define('lb-teaser', Teaser);

/*

*/