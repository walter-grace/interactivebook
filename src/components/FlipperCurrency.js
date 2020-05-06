import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'
import '../App.css'
import { Button, ButtonGroup } from 'reactstrap';
import VideoEth from '../components/VideoEth'
import ButtonPlayer from '../components/ButtonPlayer'
import fx from '../currency1.jpg'
import Videofx from './Videofx';

class FlipperCurrency extends Component {

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
                  <img className="image1" src={fx} alt="title" />
                </div>
                <div className="App-page App-page_pink">
                  <h6 className="h6">
                  If one needs to understand what does the future of warfare will look like, I believe it is right here. 
                  James Rickards is by far one of my favorite authors in the finance realm. 
                  This book goes into great length about the mishaps that happened right before 2008. 
                  Talks about how China and Russia are ultimately playing for a world dominate currency not the USD.
                  </h6>
                </div>
                <div className="App-page App-page_pink">
                  <h4 className="h6">
                  James believe the IMF will be bailing out the Central Banks with SDRs, or what I like to call IMF tokens. 
                  This was published in 2010, Rickards has been a strong advocate for gold monetary policy. 
                  Fantastic read for anyone interested in finance and currency.
                  </h4>
                </div>
                <div className="App-page App-page_pink">
                  <Videofx />
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

export default FlipperCurrency