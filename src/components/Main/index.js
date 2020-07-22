import React, { Component } from 'react';
import Navbar from '../Navbar';
import Home from '../Home';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div>
            <Navbar />
            <Home />
        </div>;
    }
}

export default Main;