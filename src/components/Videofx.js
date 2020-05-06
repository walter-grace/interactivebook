import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Videofx extends Component {
    render() {
        return (
            <div>
                <h5>
                Jim Rickards: Currency Wars and The Death of Money
                </h5>
                <ReactPlayer url="https://www.youtube.com/watch?v=FzbXkdi4Uo4" />
            </div>
        );
    }
}

export default Videofx;