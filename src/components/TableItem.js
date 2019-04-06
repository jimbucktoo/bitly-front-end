import React, { Component } from "react";
import "../style/App.css";
import clickIcon from "../assets/svgs/click-icon.svg";

class TableItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        if (data.length !== 0) {
            return (
                data.map(bitlink => {
                    return(
                        <a key={bitlink.info.created_at} href={bitlink.url} class="uiTableItem list-group-item list-group-item-action">
                            <div class="underline title mb-1">{(bitlink.info.title !== null) ? bitlink.info.title : bitlink.res.long_url }</div>
                            <small class="underline long-url">{bitlink.res.long_url}</small>
                            <div class="d-flex w-100 justify-content-between">
                                <div class="bitlink">{bitlink.res.url}</div>
                                <div class="clicks">
                                    <small>{bitlink.clicks[0].global_clicks}</small>
                                    <img class="click-icon" src={clickIcon}/>
                                </div>
                            </div>
                        </a>
                    )
                })
            )
        } else {
            return <div></div>
        }
    }
}

export default TableItem
