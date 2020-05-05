import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import '../App.css'


class Video extends Component {
    render() {
        return (
            <div>
                <h5 className="h5">
                Interview with economist Thomas Piketty: capital and ideology I FT
                </h5>
                <ReactPlayer className="player"
                width="440px" 
                height="340px"
                url='https://www.youtube.com/watch?v=utnpOqE6Lk0' />
                <br/>
            </div>
        );
    }
}

export default Video;