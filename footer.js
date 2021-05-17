/**
Title: footer.js
Author: Soliman Abdelmalak
Date: 05/11/2021
Description: Export the footer class to my web pages.
*/
class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                <a href="mailto:marksolm08@gmail.com" id="button">Email Me</a> 
                Copyright &copy; Marksolm 2021 
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);