import React, { Component } from "react";
import './style.css';
import NavCard from './nav-card'

class NavigationMenu extends Component {
    render() {
        return (
            <div id='navigationMenuContainer'
                 className={this.props.navMenuClasses}
                 onClick={this.props.navMenuClick}>
                 <NavCard navCardClasses={this.props.navCardClasses}
                          pageRef='/'
                          navClick={this.props.navClick}
                          title='Home'/>
                 <NavCard navCardClasses={this.props.navCardClasses}
                          pageRef='/portfolio/all'
                          navClick={this.props.navClick}
                          title='Portfolio'/>
                 <NavCard navCardClasses={this.props.navCardClasses}
                          pageRef='/about'
                          navClick={this.props.navClick}
                          title='About'/>                 
                 <NavCard navCardClasses={this.props.navCardClasses}
                          pageRef='/contact'
                          navClick={this.props.navClick}
                          title='Contact'/>
            </div>

        )
    }
}

export default NavigationMenu