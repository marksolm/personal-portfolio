class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
             
                <div> 
                    <a href="mailto:marksolm08@gmail.com" id="button">Email Me</a> 
                    Copyright &copy; Marksolm 2021 
                </div>
                
            </div>
        `;
}

customElements.define("footer-component", Footer);