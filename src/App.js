import React, { Component } from "react"
import Navbar from "./components/Navbar"
import LinkInput from "./components/LinkInput"
import bgImage from "./assets/svgs/background-image.png"
import "./style/App.css"
import _ from "lodash"
import "dotenv"
import BitlySDK from "./sdk.js"
import Table from "./components/Table"

class App extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            data: []
        }

        this.linkShorten = this.linkShorten.bind(this)
    }

    async linkShorten(longUrl) {
        try {
            const bitlySDK = new BitlySDK({
                accessToken: process.env.REACT_APP_DEV_API_URL
            })

            const results = await bitlySDK.shorten(longUrl).then(function(result){
                return result
            })

            const information = await bitlySDK.info(results.url).then(function(result){
                return result
            })

            const clicks = await bitlySDK.clicks(results.url).then(function(result){
                return result
            })

            var obj = {
                info: information,
                res: results,
                clicks: clicks
            }

            this.state.data.push(obj)
            this.setState({ref: "refresh"})

        } catch (error) {
            alert("Action Unsuccessful - " + error)
        }
    }

    render() {
        const link = _.debounce((longUrl) => {this.linkShorten(longUrl)}, 300)
        return (
            <div className="App">
                <div className="background-image" style ={ { backgroundImage: "url("+bgImage+")" } }>
                    <Navbar />
                    <h1 class="maintitle"><b>SHORTEN. SHARE. MEASURE.</b></h1>
                    <h6 class="subtitle">Join Bitly, the world's leading link management platform.</h6>
                    <LinkInput onInputLinkSubmit={link}/>
                    <Table data={this.state.data}/>
                </div>
            </div>
        )
    }
}

export default App
