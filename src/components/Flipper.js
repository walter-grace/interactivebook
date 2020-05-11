import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'
import '../App.css'
import { Button, ButtonGroup } from 'reactstrap';
import Video from '../components/Video'
import ButtonPlayer from '../components/ButtonPlayer'
import capital from '../capital.jpg'

class Flipper extends Component {

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
                      <img className="image1" src={capital} alt="title" />
                    </div>
                    <div className="App-page App-page_pink">
                      <h6 className="h6">
 Piketty goes in-depth about societal systems through the ages.
In each chapter, Piketty uses history to map the distribution of incomes and wealth and show how the situation today parallels those earlier episodes. 
 One of his big overall message is we may need to re-think how some of our economic models might be outdated

                      </h6>
                    </div>
                    <div className="App-page App-page_pink">
                      <h4 className="h6">
	Piketty believes tax loopholes should be eliminated today through international agreement and better information. 
  He seems to contradicts himself a bit when arguing about higher tax rates increase growth.
  If nobody actually paid those taxes in the glorious years between 1950 and 1979, we never actually ran the high-tax experiment

                      </h4>
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
                      Try turning the page by sliding the page, double click to zoom out
                    </h3>
                  </div>
                  <hr/>
            </div>
            
        )
    }

}

export default Flipper