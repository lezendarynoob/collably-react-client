import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../assets/styles/Home.css';
import getProjects from '../actions/getProjects';

class Home extends Component {

    state = {
        loaded: false
    }

    async componentDidMount() {
        await this.props.getProjects();
        this.setState({
            loaded: true
        });
    }

    content() {

        let projectList = this.props.projects.map(project => {
            return(<div className = 'card gray-bg' key = {project.id}>
                <h1> {project.title} </h1>
                <p> created by: {project.createdBy} </p>
            </div>
            )
        });

        return (
            <div className = 'home'>
                <Navbar />
                <main className = 'grid'>
                    {projectList}
                </main>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.loaded ? this.content() : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => dispatch(getProjects())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);