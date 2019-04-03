import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LinkInput from './components/LinkInput';
import bgImage from './assets/svgs/background-image.png';
import BitlySDK from './sdk.js';
import './style/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='background-image' style ={ { backgroundImage: "url("+bgImage+")" } }>
                    <Navbar />
                    <h1 class="title">SHORTEN. SHARE. MEASURE.</h1>
                    <h6 class="subtitle">Join Bitly, the world's leading link management platform.</h6>
                    <LinkInput />
                </div>
            </div>
        );
    }
}

export default App;
