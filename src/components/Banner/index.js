import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="banner-section">
                <div className="banner-image"></div>
                {/* <div className="banner-content">
                    <div className="title"></div>
                    <div className="actions">
                        <button>Play</button>
                        <button>Info</button>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Banner;