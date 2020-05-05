import React, { Component } from 'react'
import {connect} from 'react-redux'
import fetchMoods from '../actions/fetchMoods'
import Moods from '../components/Moods'
import MoodsInput from '../components/MoodInput'

class moodsContainer extends Component {

    componentDidMount() {
        this.props.fetchMoods()
    }

    render() {

        return (
            <div>
                moodsContainer
                <MoodsInput/>
                <Moods moods={this.props.moods}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        moods: state.moods
    }
}

export default connect(mapStateToProps, {fetchMoods})(moodsContainer)