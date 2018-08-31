import React, { Component } from "react";
import './style.css'
import Grid from '../../components/grid'
import { MuiThemeProvider } from 'material-ui';
import data from './paintings.json'
import Jumbotron from "../../components/jumbotron";
import { TransitionGroup, CSSTransition } from "react-transition-group";



const layouts = {
          "lg": [
            {
              "x": 0,
              "y": 0,
              "w": 6,
              "h": 8,
              "i": "0",
              "static": false
            },
            {
              "x": 6,
              "y": 0,
              "w": 6,
              "h": 8,
              "i": "1",
              "static": false
            },
            {
              "x": 0,
              "y": 1,
              "w": 6,
              "h": 8,
              "i": "2",
              "static": false
            },
            {
              "x": 6,
              "y": 1,
              "w": 6,
              "h": 8,
              "i": "3",
              "static": false
            }
        ],
        "md": [
            {
              "x": 0,
              "y": 0,
              "w": 6,
              "h": 5,
              "i": "0",
              "static": false
            },
            {
              "x": 6,
              "y": 0,
              "w": 6,
              "h": 5,
              "i": "1",
              "static": false
            },
            {
              "x": 0,
              "y": 1,
              "w": 6,
              "h": 5,
              "i": "2",
              "static": false
            },
            {
              "x": 6,
              "y": 1,
              "w": 6,
              "h": 5,
              "i": "3",
              "static": false
            }
        ],
        "sm": [
            {
              "x": 0,
              "y": 0,
              "w": 3,
              "h": 4,
              "i": "0",
              "static": false
            },
            {
              "x": 6,
              "y": 0,
              "w": 3,
              "h": 4,
              "i": "1",
              "static": false
            },
            {
              "x": 0,
              "y": 1,
              "w": 3,
              "h": 4,
              "i": "2",
              "static": false
            },
            {
              "x": 6,
              "y": 1,
              "w": 3,
              "h": 4,
              "i": "3",
              "static": false
            }
        ],
        "xs": [
            {
              "x": 0,
              "y": 0,
              "w": 3,
              "h": 3,
              "i": "0",
              "static": false
            },
            {
              "x": 6,
              "y": 0,
              "w": 3,
              "h": 3,
              "i": "1",
              "static": false
            },
            {
              "x": 0,
              "y": 1,
              "w": 3,
              "h": 3,
              "i": "2",
              "static": false
            },
            {
              "x": 6,
              "y": 1,
              "w": 3,
              "h": 3,
              "i": "3",
              "static": false
            }
        ]
    };
  
  const gridLayout = {
    "layouts": layouts,
    "rowHeight": 30,
    "breakpoints": {
        "lg": 1200,
        "md": 996,
        "sm": 768,
        "xs": 480,
        "xxs": 0
    },
    "cols": {
        "lg": 12,
        "md": 12,
        "sm": 6,
        "xs": 6,
        "xxs": 2
    },
    "isDraggable": false,
    // "verticalCompact": true,
    "isResizable": false,
  }

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.setState({ data: data})
    }

    render() {
        return (
            <div className="page">
                <div id='homeComponentContainer'>
                    <TransitionGroup appear={true} timeout={300}>
                        <CSSTransition classNames="slide" timeout={300} >
                            <Jumbotron />
                        </CSSTransition>
                    </TransitionGroup>
                    <MuiThemeProvider>
                        <Grid layout={this.state.data} {...gridLayout}/>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default HomeComponent;