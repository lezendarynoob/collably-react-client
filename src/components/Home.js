import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../actions/logout';

class Home extends Component {

    render() {
        return (
        <div className = 'home'>
            <h1> Welcome </h1>
            <button onClick = {this.props.logout}> logout </button>
        </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mapDispatchToProps)(Home);