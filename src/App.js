import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'
import title from './title.jpg'
import eth from './eth.jpg'
import capital from './capital.jpg'
import './App.css'
import { Button, ButtonGroup } from 'reactstrap';
import Video from './components/Video'
import currnecy1 from './currency1.jpg'
import VideoEth from './components/VideoEth'
import ButtonPlayer from './components/ButtonPlayer'
import Flipper from './components/Flipper'
import FlipperEth from './components/FlipperEth'
import FlipperCurrency from './components/FlipperCurrency'





class App extends Component {

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
                      <img className="image1" src={title} alt="title" />
                    </div>
                    <div className="App-page App-page_pink">
                      <Flipper />
                    </div>
                    <div className="App-page App-page_pink">
                      <Video />
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
                  <FlipperEth />
                <hr/>
                <FlipperCurrency />
            </div>
            
        )
    }

}

export default App