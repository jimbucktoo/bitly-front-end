import React, { Component } from "react"
import logo from "../assets/svgs/bitly.svg"
import "../style/App.css"

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav class="uiNavbar navbar navbar-expand-lg">
                    <a class="uiNavLogo navbar-brand" href="/"><img class="nav-logo" src={logo} alt="Logo"></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="uiNavLinks nav-link" href="/">Tour <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="uiNavLinks nav-link" href="/">Enterprise</a>
                            </li>
                            <li class="nav-item">
                                <a class="uiNavLinks nav-link" href="/">Resources</a>
                            </li>
                            <li class="nav-item">
                                <a class="uiNavLinks nav-link" href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Navbar
