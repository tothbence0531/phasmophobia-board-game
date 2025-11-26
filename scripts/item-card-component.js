const itemCardComponentTemplate = document.createElement("template");
itemCardComponentTemplate.innerHTML = /*html*/ `
  <div class="grid-item">
    <img />
    <h2></h2>
    <p></p>
  </div>

  <style>
    .grid-item {
      padding: var(--pbg-comp-item-card-component-padding);
      background: var(--pbg-comp-item-card-component-background);
      box-shadow: var(--pbg-comp-item-card-component-box-shadow);
    }

    h2 {
      margin-top: var(--pbg-comp-item-card-component-heading-margin);
    }

    p {
      color: var(--pbg-comp-item-card-component-text-color);
      text-align: justify;
      margin: 0;
    }

    img {
      max-width: 100%;
      transition: var(--pbg-comp-item-card-component-image-transition);
    }

    img:hover {
      transform: scale(1.1);
      transition: var(--pbg-comp-item-card-component-image-transition);
    }
  </style>
`;

class ItemCardComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
    this.shadow.append(itemCardComponentTemplate.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["title", "text", "image"];
  }

  attributeChangedCallback() {
    this.update();
  }

  connectedCallback() {
    this.update();
  }

  update() {
    const titleEl = this.shadow.querySelector("h2");
    const imageEl = this.shadow.querySelector("img");
    const textEl = this.shadow.querySelector("p");

    titleEl.textContent = this.getAttribute("title") || "Missing title";
    textEl.textContent = this.getAttribute("text") || "Missing text";

    const img = this.getAttribute("image");
    imageEl.src = img || "";
    imageEl.alt = this.getAttribute("title") || "Item image";
  }
}

customElements.define("pbg-item-card", ItemCardComponent);
