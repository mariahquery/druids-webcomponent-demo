import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("druids-avatar")
export class Avatar extends LitElement {
  // Properties ---------------------------------------------------------------

  /**
   * Set a name (First and Last)
   */
  @property({ type: String, reflect: true })
  name: string | undefined = undefined;

  /**
   * Set a role
   */
  @property({ type: String, reflect: true })
  role: string | null = null;

  /**
   * Set a src for the img
   */
  @property({ type: String, reflect: true })
  src: string | undefined = undefined;

  /**
   * Set size for the icon.
   */
  @property({ type: String, attribute: "size", reflect: true })
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" = "md";

  // Lifecyle ---------------------------------------------------------------

  render() {
    return html`<div
      class=${classMap({
        wrapper: true,
      })}
    >
      <div class="image">
        <img class="avatar-img" src=${ifDefined(this.src)} alt=${this.title} />
      </div>
    </div>`;
  }

  // Templates ---------------------------------------------------------------

  static styles = css`
    :host {
      --xs-image-width: 20px;
      --xs-image-height: 20px;
      --sm-image-width: 24px;
      --sm-image-height: 24px;
      --md-image-width: 28px;
      --md-image-height: 28px;
      --lg-image-width: 36px;
      --lg-image-height: 36px;
      --xl-image-width: 44px;
      --xl-image-height: 44px;
      --xxl-image-width: 104px;
      --xxl-image-height: 104px;
    }

    :host([disabled]) {
      .wrapper {
        cursor: not-allowed !important;
      }
    }

    :host([size="xs"]) {
      .wrapper {
        .avatar-img {
          width: var(--xs-image-width);
          height: var(--xs-image-height);
        }
      }
    }

    :host([size="sm"]) {
      .wrapper {
        .avatar-img {
          width: var(--sm-image-width);
          height: var(--sm-image-height);
        }
      }
    }

    :host([size="md"]) {
      .wrapper {
        .avatar-img {
          width: var(--md-image-width);
          height: var(--md-image-height);
        }
      }
    }

    :host([size="lg"]) {
      .wrapper {
        .avatar-img {
          width: var(--lg-image-width);
          height: var(--lg-image-height);
        }
      }
    }

    :host([size="xl"]) {
      .wrapper {
        .avatar-img {
          width: var(--xl-image-width);
          height: var(--xl-image-height);
        }
      }
    }

    :host([size="xxl"]) {
      .wrapper {
        .avatar-img {
          width: var(--xxl-image-width);
          height: var(--xxl-image-height);
        }
      }
    }

    .avatar-img {
      border-radius: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "druids-avatar": Avatar;
  }
}
