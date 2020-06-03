import React, { Component } from 'react';
import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';
import transport from '../config/transport';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import login from '../actions/login';
import logo from '../assets/logo.png';


class Login extends Component{
    state = {
        username: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await transport.post('http://localhost:4000/auth/login', {
                username: this.state.username,
                password: this.state.password
            });
            if(res.data.message === 'done'){
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
    render(){
        return(
            <div className = 'login'>
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
                    <p> New to Collably? </p>
                    <Link to = '/signup' className = 'btn'> Sign up instead </Link>
                    <hr />
                    <p> Or sign in with your credentials </p>
                    <form onSubmit = {this.handleSubmit} >
                        <input type = 'text' onChange = {this.handleChange} id = 'username' placeholder = 'Username' required />
                        <input type = 'password' onChange = {this.handleChange} id = 'password' placeholder = 'Password' required />
                        <motion.input whileTap = {{scale: 0.9}} type = 'submit' className = 'btn' value = 'Sign In' />
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
    }
};

export default connect(null, mapDispatchToProps)(Login);