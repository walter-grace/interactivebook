import React, { Component } from 'react';
import { Button } from 'reactstrap'
import '../App.css'
import './styles.css'
import { Moving } from './Example';


class ButtonPlayer extends Component {
    render() {
        return (
            <div>
                
               <Button color="primary" href="https://barrington-book-club.netlify.app/">Book Club Website</Button>{' '}
               <div className="example-container">
                <br/>
               <Moving/>
               </div>
            </div>
        );
    }
}

export default ButtonPlayer;