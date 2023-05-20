class MeuComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // BASE DO COMPONENTE
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Felipe";

    // ESTILO DO COMPONENTE
    const style = document.createElement("style");
    style.textContent = `
      h1{
        color: red
      }
    `;

    // ENVIA PARA SHADOW
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("meu-componente", MeuComponent);
