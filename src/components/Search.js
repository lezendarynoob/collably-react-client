import React, { Component } from 'react';
import '../assets/styles/Search.css';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList';
import { connect } from 'react-redux';
import addTag from '../actions/addTag';
import removeTag from '../actions/removeTag';
import searchProjects from '../actions/searchProjects';

class Search extends Component {

    state = {
        tag: ''
    }
    
    handleChange = async (e) => {
        await this.setState({
            tag: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.addTag(this.state.tag);
        this.setState({
            tag: ''
        });
        try{
            await this.props.searchProjects();
        }
        catch(e){
            console.log(e);
        }

    }

    handleClick = (e) => {
        this.props.removeTag(e.target.id);
        this.props.searchProjects();
    }

    render() {
        const TagList = this.props.tags.map(tag => 
            <motion.button onClick = {this.handleClick} animate = {{scale: 1.1}} whileHover = {{scale: 0.9}} className = 'btn theme-grad-bg' key = {tag} id = {tag}> {tag} </motion.button>)

        return (
        <div className = 'search'>
            <Navbar />
            <main className = 'grid'>
                <form onSubmit = {this.handleSubmit}>
                    <input id = 'input' type = 'text' autoComplete = 'off' required value = {this.state.tag} onChange = {this.handleChange} />
                    <input type = 'submit' className = 'btn' value = 'Add' />
                </form>
                <div className = 'taglist'> {TagList} </div>
                { this.props.projects ? <ProjectList projects = {this.props.projects} /> : null }
                
            </main>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.project.searchTags,
        projects: state.project.searchProjects
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTag: (tag) => dispatch(addTag(tag)),
        removeTag: (tag) => dispatch(removeTag(tag)),
        searchProjects: () => dispatch(searchProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);