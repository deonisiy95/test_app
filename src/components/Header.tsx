import * as React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="header_link_container">
                    <Link to="/">Home</Link>
                    <Link to="/data">Data</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>);
    }
}

export default Header;