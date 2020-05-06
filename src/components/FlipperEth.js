import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'
import '../App.css'
import { Button, ButtonGroup } from 'reactstrap';
import VideoEth from '../components/VideoEth'
import ButtonPlayer from '../components/ButtonPlayer'
import eth from '../eth.jpg'
class FlipperEth extends Component {

    constructor(props) {
        super(props)
        this.totalPages = 5
        this.state = {
            selected: 0,
        }
        this.handleSelectedChange = this.handleSelectedChange.bind(this)
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }

    handleSelectedChange(selected) {
        this.setState({selected})
    }

    previous() {
        this.setState(state => ({
            selected: state.selected - 1
        }))
    }

    next() {
        this.setState(state => ({
            selected: state.selected + 1
        }))
    }

    render() {
        return (
            <div>
            <div className="App">
            <FlippingPages
                className="App-pages"
                direction="horizontal"
                selected={this.state.selected}
                onSelectedChange={this.handleSelectedChange}
                /* touch-action attribute is required by pointer events
                polyfill */
                touch-action="none"
            >
                <div className="App-page App-page_red">
                  <img className="image1" src={eth} alt="title" />
                </div>
                <div className="App-page App-page_pink">
                  <h6 className="h6">
                  If you've ever wondered why do we see 'HTTP' in links when you're on the internet, it's because 'HTTP' is an application built on top of the TCP/IP (internet protocol). This creation by Tim Bernes-Lee became a way for Web Browsers (Netscape, Internet Explorer,Firefox) to connect to Web Servers (Google,YouTube,Facebook). Now there's a new technology with an extreme focus on the elimination of the central server that 'HTTP' needs. Instead of the one computer/entity verifying the data. A consensus of nodes must verify first. 
                  Think in the central database world if Google gets hacked.. we're in big trouble.. in the blockchain world that can't happen.
                  </h6>
                </div>
                <div className="App-page App-page_pink">
                  <h4 className="h6">
                  Blockchain technology will be and is the next evolution on the Internet. 
                  How the protocols on the internet are built now are very weak, with strong development of applications. Which limits the size of the network. Now what's coming with blockchain, is a protocol layer with incredible depth, and easier to build applications with smart contracts for example. This is single handedly one of the most incredible technologies I've ever read about. This book is for anyone who wants to learn about the futures of protocols and the endless possibilities of the new digital asset world. 
                  If you're a young kid reading this post, I give you one piece of advice. 
                  Go down this wormhole as far as it will take you, and I promise the future is on the other side.
                  </h4>
                </div>
                <div className="App-page App-page_pink">
                  <VideoEth />
                </div>
                <div className="App-page App-page_pink">
                  <h5 className="h7">
                   Head back to the website
                  </h5>
                    <ButtonPlayer />
                </div>
            </FlippingPages>

            {/* Buttons are required for keyboard navigation */}
            <div>
            <ButtonGroup className="content">
            <Button color="primary" size="large"
                onClick={this.previous}
                disabled={!this.state.selected}
                >Previous</Button> 
                {'     '}
            <Button color="primary"
                onClick={this.next}
                disabled={this.state.selected + 1 === this.totalPages}
                >Next</Button>
                </ButtonGroup>
                <h3 className="h7">
                  Try turning the page by sliding the page diagonally, double click to zoom out
                </h3>
              </div>
        </div>
        <hr/>
        </div>
            
        )
    }

}

export default FlipperEth