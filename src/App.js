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
                <Flipper/>
                <hr />
                <FlipperEth />
                <hr/>
                <FlipperCurrency />
            </div>
            
        )
    }

}

export default App