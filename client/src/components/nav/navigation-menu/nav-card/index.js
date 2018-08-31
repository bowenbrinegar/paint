import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './style.css';

class NavCard extends Component {
    render() {
        return(
            <NavLink exact
                 id='navCard' 
                 className={this.props.navCardClasses}
                 activeClassName='linkActive'
                 onClick={this.props.navClick}
                 to={this.props.pageRef}>
                 <h1>{this.props.title}</h1>
            </NavLink>
        )
    }
}

export default NavCard;