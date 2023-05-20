class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // BASE DO COMPONENTE <h1> Jaque </h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

    // ESTILIZAR O COMPONENTE
    const style = document.createElement("style");
    style.textContent = `
      h1{
        color: red;
      }
    `;

    // ENVIAR PARA A SHADOW
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
