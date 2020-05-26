import React, { Component } from 'react'
import HappeningsContainer from '../containers/HappeningsContainer'
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchMood} from '../actions/addMood'

class Mood extends Component {

    componentDidMount() {
        this.props.fetchMood(this.props.match.params.moodId)
      }

  render() {
   let mood = this.props.mood[0]

  return (
    <div>
            <Card.Group centered>
                <Card>
                    <Card.Content>
                        <Card.Meta> {mood ? mood.date :null}</Card.Meta>
                        <br></br>
                        <Card.Header><i className={`far fa-2x ${mood ? mood.feeling :null}`}></i></Card.Header>
                        </Card.Content>
                        
                        <Card.Content extra textAlign="left">
                            <i className={`fas fa-2x ${mood ? mood.weather : null}`}>
                                </i> {mood ? mood.note :null}
                                </Card.Content>
                                </Card>
                                </Card.Group>

                                <br></br>
                                
                                <HappeningsContainer mood={mood}/>
                                
                                </div>
                                
                            )
                            
  }
}

const mapStateToProps = state => {
    console.log(state.moodsReducer)
    return ({
        mood: state.moodsReducer
    })
}

export default connect(mapStateToProps, {fetchMood})(Mood)