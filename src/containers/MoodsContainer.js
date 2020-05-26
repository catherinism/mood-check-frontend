import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMoods} from '../actions/addMood'
import MoodCard from '../components/MoodCard'

class moodsContainer extends Component {

    componentDidMount() {
        // console.log("a")
        this.props.getMoods()
    }

    render() {
        
        return (
            <div>
                
            {this.props.moods.map(mood => <MoodCard key={mood.id} mood={mood} />)}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.moodsReducer)
    return ({
      moods: state.moodsReducer
    })
  }
  
  export default connect(mapStateToProps, { getMoods })(moodsContainer)