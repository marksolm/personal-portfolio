/**
Title: header.js
Author: Soliman Abdelmalak
Date: 05/11/2021
Description: Export the Header class to my web pages.
*/
class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
                <h1>Soliman's Personal Portfolio</h1>
            </div>
            <div id="nav-container">
                <ul id="nav-list">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="resume.html">Resume</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li class="dropdown">
                         <a href="#">Important Pages</a> 
                        <div class="drop-down-menu">
                             <a href="Api-unit-tests.html">API Unit Tests</a>
                             <a href="bucket-list.html">bucket list</a>
                             <a href="./web-335/Abdelmalak-diagrams.html">Database Diagrams</a>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);1