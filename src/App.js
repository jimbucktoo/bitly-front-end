import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LinkInput from './components/LinkInput';
import bgImage from './assets/svgs/background-image.png';
import './style/App.css';
import _ from 'lodash';
import BitlySDK from './sdk.js';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            res: {}
        };

        this.linkShorten = this.linkShorten.bind(this)
    }

    async linkShorten(longUrl) {

        const bitlySDK = new BitlySDK({
            accessToken: '42ba4c1b14aef60604b62a2bc92591cf2f5a5355'
        });

        const results = await bitlySDK.shorten(longUrl).then(function(result){
            return result;
        });

        this.setState({res: results})
        console.log(this.state.res)
    };

    render() {
        const link = _.debounce((longUrl) => {this.linkShorten(longUrl)}, 300)
        return (
            <div className="App">
                <div className='background-image' style ={ { backgroundImage: "url("+bgImage+")" } }>
                    <Navbar />
                    <h1 class="title"><b>SHORTEN. SHARE. MEASURE.</b></h1>
                    <h6 class="subtitle">Join Bitly, the world's leading link management platform.</h6>
                    <LinkInput onInputLinkSubmit={link}/>
                </div>
            </div>
        );
    }
}

export default App;
