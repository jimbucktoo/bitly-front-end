import React, { Component } from 'react';
import '../style/App.css';

class LinkInput extends Component {

    constructor(props) {
        super(props);
        this.state = { longUrl: 'longUrl' };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.props.onInputLinkSubmit(this.state.longUrl);
    }

    render() {
        return (
            <div className="uiLinkInput LinkInput">
                <div class="uiInput input-group input-group-lg">
                    <input type="text" class="uiInputBox form-control form-group" placeholder="Paste a link to shorten it" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={event => this.onInputChange(event.target.value)}></input>
    <div class="input-group-append">
        <button class="btn uiButton" onClick={this.handleSubmit} type="submit" id="inputGroupFileAddon04">SHORTEN</button>
    </div>
</div>
            </div>
            );
            }

            onInputChange(longUrl) {
                this.setState({longUrl});
            };
            }

            export default LinkInput;
