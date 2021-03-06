import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        return (
            <div>
                <h5>
                Ethereum Vs. Bitcoin: What Sets Them Apart? | CNBC
                </h5>
                <ReactPlayer url="https://www.youtube.com/watch?v=0UBk1e5qnr4" />
            </div>
        );
    }
}

export default Video;