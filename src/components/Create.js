import React, { Component } from 'react';
import '../assets/styles/Create.css';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import transport from '../config/transport';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

class Create extends Component {

    state = {
        title: '',
        description: '',
        universities: [],
        minQual: '',
        countries: [],
        minAge: 0,
        maxAge: 0,
        skills: [],
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleList = (e) => {
        let list = e.target.value.split(' ');
        this.setState({
            [e.target.id] : list
        })
    }

    handleClick = async () => {
        try{
            let title = this.state.title;
            let res = await transport.post('http://localhost:4000/project/addProject', {
                title: this.state.title,
                description: this.state.description,
                universities: this.state.universities,
                minQual: this.state.minQual,
                countries: this.state.countries,
                minAge: this.state.minAge,
                maxAge: this.state.maxAge,
                skills: this.state.skills
            });
            if(res.data.message === 'done'){
                this.props.dispatch({type: 'CREATE_PROJECT', project: {
                    title: title,
                    createdBy: res.data.createdBy
                }});
            }
            this.setState({
                title: '',
                description: '',
                universities: [],
                minQual: '',
                countries: [],
                minAge: 0,
                maxAge: 0,
                skills: [],
            });
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
        catch(e){
            console.log(e);
        }
    }

    render() {
        return (
        <div className = 'create'>
            <Navbar />
            <main className = 'grid gray-bg'>
                <div className = 'container'>
                    <input type = 'text' id = 'title' placeholder = 'Title' onChange = {this.handleChange} required />
                    <textarea id = 'description' placeholder = 'Description' onChange = {this.handleChange} required />
                    <p> Enter targeted universities (if any), seperated by space </p>
                    <input type = 'text' id = 'universities' placeholder = 'Universities' onChange = {this.handleList} />
                    <input type = 'text' id = 'minQual' placeholder = 'Min. Qualification' onChange = {this.handleChange} />
                    <p> Enter targeted countries (if any), seperated by space </p>
                    <input type = 'text' id = 'countries' placeholder = 'Countries' onChange = {this.handleList} />
                    <input type = 'number' id = 'minAge' placeholder = 'Min. Age' onChange = {this.handleChange} />
                    <input type = 'number' id = 'maxAge' placeholder = 'Max. Age' onChange = {this.handleChange} />
                    <p> Enter required skills (if any), seperated by space </p>
                    <input type = 'text' id = 'skills' placeholder = 'Skills' onChange = {this.handleList} />
                    <br />
                    <motion.button whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}} className = 'btn theme-grad-bg' onClick = {this.handleClick}> Add </motion.button>
                    <br />
                    <br />
                </div>
            </main>
        </div>
        )
    }
}

export default connect()(Create);