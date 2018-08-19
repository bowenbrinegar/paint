import React, { Component } from "react";
import './style.css';

class OptionsMenu extends Component {
    render() {
        return(
            <div id='optionsMenuContainer'
                 className={this.props.optionClasses}>
            </div>
        )
    }
}

export default OptionsMenu;