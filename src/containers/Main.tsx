import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../actions/sessionActions";

interface Props extends React.Props<Main> {
    is_authorized: boolean,
    logOut: () => void
}

class Main extends React.Component<Props, {}>{
    render(){

        const { is_authorized } = this.props;

        return (
            <div>
                <div className="header">
                    <div className="header_link_container">
                        <Link to="/">Home</Link>
                        <Link to="/data">Data</Link>
                        {!is_authorized ? (
                            <Link to="/login" className="login_button">Sign In</Link>
                        ): (
                            <div onClick={() => { this.props.logOut() }} className="login_button">Sign Out</div>
                        )}

                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
            );
    }
}

const mapStateToProps = (state: any) => (
    {
        is_authorized: Boolean(state.is_authorized),
    }
);

const mapDispatchToProps = (dispatch: any) => (
    {
        logOut: () => dispatch(logOut()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

