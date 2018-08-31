import React, { Component } from "react";
import Nav from '../components/nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './style.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Zoom from './zoom'
import ErrorPage from './error';
import OutsideClicker from '../components/outside-clicker';
import lightFeather from '../assets/icons/light-feather.png';
import darkFeather from '../assets/icons/dark-feather.png';
import Footer from '../components/footer';

class PageTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false,
            navigationOpen: false,
            navClasses: [],
            backgroundClasses: [],
            footerClasses: [],
            ulClasses: [],
            navCardClasses: [],
            showOptions: true,
            optionClick: false,
            optionOpen: false,
            optionClasses: [],
            featherClasses: ['feather']
        }
        this.toggleLightMode = this.toggleLightMode.bind(this);
        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.toggleOption = this.toggleOption.bind(this);
        this.checkOption = this.checkOption.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.removeFeather = this.removeFeather.bind(this);
    }

    toggleLightMode() {
        if (this.state.darkMode === true) {
            const i = this.state.backgroundClasses.indexOf('dark')
            const newBackground = this.state.backgroundClasses.splice(i, 0)
            const j = this.state.backgroundClasses.indexOf('dark')
            const newOption = this.state.backgroundClasses.splice(j, 0)
            this.setState({
                backgroundClasses: [...newBackground],
                ulClasses: [],
                navCardClasses: [],
                optionClasses: [...newOption],
                footerClasses: []
            });
        }
        this.setState({ darkMode: !this.state.darkMode });
    }

    toggleNavigation() {
        setTimeout(this.checkOption, 50);

        if (this.state.optionOpen === true) {
            this.setState({ optionOpen: false});
            const i = this.state.optionClasses.indexOf('drawer')
            const newOption = this.state.backgroundClasses.splice(i, 0)
            this.setState({ optionClasses: [...newOption]})
        }
        
        if (this.state.navigationOpen === true) {
            this.closeAll()            
        } else {
            this.setState({ navigationOpen: !this.state.navigationOpen })
        }
    }

    toggleOption() {
        if (this.state.navigationOpen === true) {
            this.setState({ navigationOpen: false});
            const i = this.state.navClasses.indexOf('drawer')
            const newNav = this.state.navClasses.splice(i, 0)
            this.setState({ navClasses: [...newNav]})
        }

        if (this.state.optionOpen === true) {
            this.closeAll()
        } else {
            this.setState({ optionOpen: !this.state.optionOpen })
        }
    }

    removeFeather() {
        this.setState({ featherClasses: ['feather'] })
    }

    checkOption() {
        const path = window.location.pathname.includes('portfolio')
        if (!path) {
            this.setState({ showOptions: false })
        } else {
            this.setState({ showOptions: true })
        }
    }

    closeAll() {
        setTimeout(this.checkOption, 50);        
        const i = this.state.optionClasses.indexOf('drawer')
        const newOption = this.state.optionClasses.splice(i, 0)
        const j = this.state.backgroundClasses.indexOf('blur')
        const newBackground = this.state.backgroundClasses.splice(j, 0)
        
        this.setState({
            navClasses: [],
            optionClasses: [...newOption],
            backgroundClasses: [...newBackground],
            navigationOpen: false,
            optionOpen: false
        });
    }

    componentWillMount() {
        this.checkOption();
    }

    componentDidMount() {
        setTimeout(() => {
            this.state.featherClasses.push('found')
        }, 600000)
        // maybe
        // if (window.location.pathname.includes('home')) {
        //     setTimeout(() => {
        //         this.toggleNavigation()
        //     }, 5000)
        // }
    }

    render() {
        if (this.state.darkMode) {
            this.state.backgroundClasses.push('dark')
            this.state.ulClasses.push('dark') 
            this.state.navCardClasses.push('dark')
            this.state.optionClasses.push('dark');
            this.state.footerClasses.push('dark');
        }
        if (this.state.navigationOpen) {
            this.state.navClasses.push('drawer');
            this.state.backgroundClasses.push('blur')
        }
        if (this.state.optionOpen) {
            this.state.optionClasses.push('drawer');
            this.state.backgroundClasses.push('blur')
        }

        return (
            <Router>
                <div id='App'>
                    <OutsideClicker func={this.closeAll}>
                        <Nav navClick={this.toggleNavigation}
                            closeAll={this.closeAll}
                            ulClick={this.toggleLightMode}
                            ulClasses={this.state.ulClasses.join(' ')}
                            navClasses={this.state.navClasses.join(' ')}
                            navCardClasses={this.state.navCardClasses.join(' ')}
                            showOptions={this.state.showOptions}
                            optionClick={this.toggleOption}
                            optionClasses={this.state.optionClasses.join(' ')}/>
                    </OutsideClicker>
                    <div id='pageContainer'
                        className={this.state.backgroundClasses.join(' ')}>
                        <div onClick={this.removeFeather}>
                            {this.state.darkMode ? 
                            (<img src={darkFeather}
                                className={this.state.featherClasses.join(' ')}/>) :
                            (<img src={lightFeather}
                                className={this.state.featherClasses.join(' ')}/>) }
                        </div>
                        <Route render={({ location }) => (
                            <div>
                                <TransitionGroup component='main' appear={true} timeout={300}>
                                    <CSSTransition key={location.key} classNames="slide" timeout={300} >
                                        <Switch location={location}>
                                            <Route exact path="/" component={Home}/>
                                            <Route exact path="/portfolio/:category/" component={Portfolio}/>
                                            <Route exact path="/portfolio/:category/:id" component={Zoom}/>
                                            <Route exact path="/about" component={About}/>
                                            <Route exact path="/contact" component={Contact}/>
                                            <Route component={ErrorPage}/>                            
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            </div>
                        )}/>
                        <Footer footerClasses={this.state.footerClasses.join(' ')}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default PageTemplate;