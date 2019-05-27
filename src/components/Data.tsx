import * as React from "react";
import { List } from "react-virtualized";
import {generateUserList} from "../helpers/generator";

interface State {
    list: Array<{
        id: number,
        name: string,
        number: number,
        is_online: boolean
    }>
}

const listHeight = 600;
const rowHeight = 35;
const rowWidth = 800;

let USERS = generateUserList(10000);

class Data extends React.Component<{}, State>{

    constructor(props: any) {
        super(props);

        this.state = {
            list: USERS
        }
    }

    renderRow = ({ index, key, style }: any) => {

        let item = this.state.list[index];

        return (
            <div key={key} className="row" style = {style}>
                <div className="row_item row_item_id">{item.id}</div>
                <div className="row_item row_item_name">{item.name}</div>
                <div className="row_item row_item_number">{item.number}</div>
                <div className="row_item row_item_online">{item.is_online ? 'true' : 'false'}</div>
            </div>
        )
    };

    handleSearch = (event: any) => {

        let searchQuery = event.target.value.toLowerCase();
        let found_user_list = USERS.filter(function(element) {
            let searchValue = element.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            list: found_user_list
        });
    };

    render(){
        return (
            <div>
                <div className="search_wrap">
                    <div>Search by name: </div>
                    <input type="text" className="search" onChange={this.handleSearch} />
                </div>
                <div className="list">
                    <div className="row">
                        <div className="row_item_header row_item_id">ID</div>
                        <div className="row_item_header row_item_name">Name</div>
                        <div className="row_item_header row_item_number">Number</div>
                        <div className="row_item_header row_item_online">Is Online</div>
                    </div>
                    <List
                        width={rowWidth}
                        height={listHeight}
                        rowHeight={rowHeight}
                        rowRenderer={this.renderRow}
                        rowCount={this.state.list.length}
                        overscanRowCount={10} />
                </div>
            </div>);
    }
}

export default Data;