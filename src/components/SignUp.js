import React, { Component } from 'react';
import '../assets/styles/SignUp.css';
import { Link } from 'react-router-dom';
import transport from '../config/transport';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';
import login from '../actions/login';

class SignUp extends Component {
    state = {
        username: '',
        displayName: '',
        password: '',
        bio: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await transport.post('http://localhost:4000/auth/signup', {
                username: this.state.username,
                displayName: this.state.displayName,
                password: this.state.password,
                bio: this.state.bio
            });
            if(res.data.message === 'done'){
                await transport.post('http://localhost:4000/auth/login', {
                    username: this.state.username,
                    password: this.state.password
                });
                this.props.login();
                this.props.history.push('/');
            }
            else{
                toast.error(res.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }   
        }
        catch(err){
            console.log(err);
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    render() {
        return (
            <div className = 'signup' >
                <header>
                <Link to = '/'>
                <div className = 'logo'>
                    <span> <img src = {logo} alt = 'Collably logo' /> </span>
                    <span> <h2 className = 'theme-grad'> ollably </h2> </span>
                </div>
                </Link>
                </header>
                <main className = 'grid'>
                    <div className = 'container theme-grad-bg'>
                        <p> Already a member? </p>
                        <Link to = '/login' className = 'btn'> Login instead </Link>
                        <hr />
                        <p> Or sign up here </p>
                        <form onSubmit = {this.handleSubmit} >
                            <input type = 'text' onChange = {this.handleChange} id = 'username' placeholder = 'Username' required />
                            <input type = 'password' onChange = {this.handleChange} id = 'password' placeholder = 'Password' required />
                            <input type = 'text' onChange = {this.handleChange} id = 'displayName' placeholder = 'Display Name' required />
                            <textarea onChange = {this.handleChange} id = 'bio' placeholder = 'Tell us something interesting about yourself...' required />
                            <motion.input whileTap = {{scale: 0.9}} type = 'submit' className = 'btn' value = 'Sign Up' />
                        </form>
                    </div>
                </main>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login())
    };
};

export default connect(null, mapDispatchToProps)(SignUp);