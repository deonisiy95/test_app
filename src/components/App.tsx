import * as React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Data from "./Data";
import Header from "./Header";
import PrivateRoute from "../containers/PrivateRoute";

interface Props extends React.Props<App> {}

export default class App extends React.Component<Props, {}> {
    public render() {
        return (
            <Router>
                <Header>
                    <div>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/data" component={Data} />
                        <Route path="/login" component={Login} />
                    </div>
                </Header>
            </Router>

        );
    }
}