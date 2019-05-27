import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={props =>
                rest.is_authorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )
};

const mapStateToProps = (state: any) => {
    return {
        is_authorized: state.is_authorized,
    }
};

export default connect(mapStateToProps)(PrivateRoute)