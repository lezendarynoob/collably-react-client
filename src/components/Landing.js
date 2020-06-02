import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../assets/styles/Landing.css';

const Landing = () => {
    return (
        <div className = 'landing'>
            <header>
                <div className = 'logo'>
                    <span> <img src = {logo} alt = 'Collably logo' /> </span>
                    <span> <h2 className = 'theme-grad'> ollably </h2> </span>
                </div>
            </header>
            <main className = 'grid'>
                <section className = 'motto'>
                    <h1> Built for <br /> <span className = 'theme-grad'> Innovators </span> </h1>
                    <p> You love working on projects and we love making it easy for you.
                        Let Collably take care of your online team-collaboration needs meanwhile
                        you and your team collaborate on exciting projects in real time! </p>
                </section>
                <section className = 'cta'>
                    <motion.div className = 'svg-container' animate = {{scale: 1.1}} transition = {{duration: 1}}/>
                    <Link to = '/login'> <span className = 'btn theme-grad-bg'> Login </span> </Link>
                    <Link to = '/signup'> <span className = 'btn'> Sign Up </span> </Link>
                </section>
            </main>
        </div>
    );
};

export default Landing;