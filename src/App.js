import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import authCheck from './actions/authCheck';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {

  state = {
    loaded: false
  };

  async componentDidMount() {
    await this.props.authCheck();
    this.setState({
      loaded: true
    });
  }
  
  content() {
    return(
      <div className="App">
        <ToastContainer transition = {Zoom}/>
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {this.props.isAuthenticated ? Home : Landing} />
            <Route path = '/login' component = {Login} />
            <Route path = '/signup' component = {SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  render(){
    return(
      this.state.loaded ? this.content(): null
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    authCheck: () => dispatch(authCheck())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
