import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Search.css';

const ProjectList = (props) => {

    let list = props.projects.map(project => {
        return (
            <motion.div animate = {{scale: 1.1}} className = 'gray-bg card' key = {project.id}>
                <h1> {project.title} </h1>
                <p> created by: {project.createdBy} </p>
            </motion.div>
        )
    });

    return (
        <div className = 'projectlist grid'>
            {list}
        </div>
    )
}

export default ProjectList;