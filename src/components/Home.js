import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../assets/styles/Home.css';

class Home extends Component {

    state = {
        loaded: false
    }


    render() {
        return (
        <div className = 'home'>
            <Navbar />
            <main className = 'grid'>
                
            </main>
        </div>
        );
    }
}



export default connect(null, null)(Home);