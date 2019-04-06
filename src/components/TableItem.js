import React, { Component } from "react"
import "../style/App.css"
import clickIcon from "../assets/svgs/click-icon.svg"

class TableItem extends Component {

    render() {
        const data = this.props.data
        if (data.length !== 0) {
            return (
                data.map(bitlink => {
                    return(
                        <div key={bitlink.info.created_at} class="uiTableItem list-group-item list-group-item-action">
                            <div class="wrap underline title mb-1">{(bitlink.info.title !== null) ? bitlink.info.title : bitlink.res.long_url }</div>
                            <small><a class="wrap underline long-url" href={bitlink.res.long_url}>{bitlink.res.long_url}</a></small>
                            <div class="wrap d-flex w-100 justify-content-between">
                                <a class="bitlink" href={bitlink.res.url}>{bitlink.res.url}</a>
                                <div class="clicks">
                                    <small>{bitlink.clicks[0].global_clicks}</small>
                                    <img class="click-icon" src={clickIcon} alt="Clicks"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return <div></div>
        }
    }
}

export default TableItem
