import React, { Component } from "react";
import './style.css'
import preferencesIcon from '../../assets/icons/prefrences.png'
import navigationIcon from '../../assets/icons/navigation.png'
import NavMenu from './navigation-menu';
import OptionsMenu from './options-menu'


class Nav extends Component {
    render() {
        return (
            <div>
                <div id='navBarContainer'>
                    <h1>Michel</h1>
                    <img onClick={this.props.navClick}
                        src={navigationIcon} />
                    {this.props.showOptions ? <img src={preferencesIcon} onClick={this.props.optionClick} /> : null}
                    <ul className={this.props.ulClasses}
                        onClick={this.props.ulClick}>
                        <li>
                            <span>Light</span>
                            <span>Dark</span>
                        </li>
                    </ul>
                </div>
                <NavMenu navMenuClasses={this.props.navClasses}
                         navCardClasses={this.props.navCardClasses}
                         navClick={this.props.navClick}/>
                <OptionsMenu optionClasses={this.props.optionClasses}/>
            </div>
        );
    }
}

export default Nav;