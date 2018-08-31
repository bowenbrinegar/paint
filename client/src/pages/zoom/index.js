import React, { Component } from "react";
import './style.css';


class Zoom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.getRoute = this.getRoute.bind(this);
    }

    getRoute() {
        console.log(this.props.match.params.id)
        console.log(this.props.match.params.category)
    }

    componentDidMount() {
        setTimeout(this.getRoute, 150)
    }

    render() {
        return (
            <div className="page">
                <h1>Zoom</h1>
            </div>
        );
    }
}

export default Zoom;