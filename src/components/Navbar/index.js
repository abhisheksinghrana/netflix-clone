import React, { Component } from 'react';
import './Navbar.scss'
import ProfilePic from '../../assets/images/profile-pic.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBackground: 'transparent'
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY <= 70 ? "transparent" : "#141414";
            this.setState({ navBackground: backgroundcolor });
        });
    }

    render() {
        return (
            <div className="navbar-container" style={{ background: this.state.navBackground }}>
                <a href="./" className="app-logo">Netflix</a>
                <div className="right-section">
                    <img className="profile-icon" src={ProfilePic} alt="ProfilePic" />
                </div>
            </div>
        );
    }
}

export default Navbar;