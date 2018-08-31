import React, { Component } from "react";
import './style.css';
import ErrorPage from '../error';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            possible: ['all', 'modern', 'landscape', 'portriat']
        }
        this.checkRoute = this.checkRoute.bind(this);
    }

    checkRoute() {
        const i = this.state.possible.indexOf(this.props.match.params.category)
        if (i < 0) { this.setState({isError: true}) }
    }

    componentDidMount() {
        this.checkRoute()
    }

    render() {
        if (this.state.isError) {
            return (<ErrorPage />)
        }

        return (
            <div className="page">
                <h1>Portfolio</h1>
            </div>
        );
    }
}

export default Portfolio;