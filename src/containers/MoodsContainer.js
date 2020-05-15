import React, { Component } from 'react'
import {connect} from 'react-redux'
import fetchMoods from '../actions/fetchMoods'
import Moods from '../components/Moods'
import Mood from '../components/Mood'
import MoodForm from '../components/MoodForm'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

class moodsContainer extends Component {

    componentDidMount() {
        this.props.fetchMoods()
    }

    render() {

        // const {moods} = this.props

        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path='/moods/new' component={MoodForm} />
                <Route path='/moods/:id' render={(routerProps) => <Mood {...routerProps} moods={this.props.moods} />} />
                <Route exact path='/moods' render={() => <Moods moods={this.props.moods} />} />
                </Switch>

                <ul>
                
                    <br></br>
                    <br></br>
                    {/* <Moods moods={moods} /> */}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        moods: state.moods
    }
}

export default connect(
    mapStateToProps,
    {fetchMoods}
    )(moodsContainer)