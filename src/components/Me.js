import React, { Component } from 'react';
import '../assets/styles/Me.css';
import Navbar from './Navbar';
import transport from '../config/transport';
import logout from '../actions/logout';
import { connect } from 'react-redux';

class Me extends Component {

    state = {
        loaded: false,
        username: '',
        displayName: '',
        bio: '',
        rating: ''
    }
    
    async componentDidMount(){
        let res = await transport.get('http://localhost:4000/profile/me');
        this.setState({
            loaded: true,
            username: res.data.username,
            displayName: res.data.displayName,
            bio: res.data.bio,
            rating: res.data.rating
        });
    }

    handleClick = async () => {
        await this.props.logout();
        this.props.history.push('/');
    }

    content(){
        return(
            <div className = 'info'>
                <h3> {this.state.username} </h3>
                <h1> {this.state.displayName} </h1>
                <p> Rating: {this.state.rating} </p>
                <p> {this.state.bio} </p>
                <span className = 'theme-grad-bg' onClick = {this.handleClick}>Sign Out</span>
            </div>
        )
    }

    render() {
        return (
        <div className = 'me'>
            <Navbar />
            <main className = 'grid'>
                {this.state.loaded ? this.content() : null}
            </main>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Me);