import React, { Component } from "react"
import TableItem from "./TableItem"
import "../style/App.css"

class Table extends Component {

    render() {
        return (
            <div className="uiTable Table">
                <div class="table-list list-group">
                    <TableItem data={this.props.data}/>
                </div>
            </div>
        )
    }
}

export default Table
