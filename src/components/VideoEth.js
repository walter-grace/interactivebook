import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        return (
            <div>
                <h5>
                Interview with economist Thomas Piketty: capital and ideology I FT
                </h5>
                <ReactPlayer url='https://www.youtube.com/watch?time_continue=7&v=0UBk1e5qnr4&feature=emb_logo' />
            </div>
        );
    }
}

export default Video;