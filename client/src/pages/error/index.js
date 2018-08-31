import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group'
import './style.css'


class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            messageClasses: ['message'],
        }
    }

    render() {
        return (
            <div id='pageErrorContainer'>
                <h1>404</h1>
                <h1>404</h1>
                <h1>404</h1>
                <h1>404</h1>
                <h1>404</h1>
                <h1>404</h1>
                <h1>404</h1>
            </div>
        );
    }
}

export default ErrorPage;