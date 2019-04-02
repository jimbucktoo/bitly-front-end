import React, { Component } from 'react';
import '../style/App.css';

class LinkInput extends Component {
    render() {
        return (
            <div className="uiLinkInput LinkInput">
                <div class="uiInput input-group input-group-lg">
                    <input type="text" class="uiInputBox form-control" placeholder="Paste a link to shorten it" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                    <div class="input-group-append">
                        <button class="btn uiButton" type="button" id="inputGroupFileAddon04">SHORTEN</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkInput;
