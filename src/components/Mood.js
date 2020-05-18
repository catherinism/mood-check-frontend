import React from 'react'
import HappeningsContainer from '../containers/HappeningsContainer'
import {Card} from 'semantic-ui-react'

const Mood = (props) => {
    // console.log(props)

    // let mood = props.moods[props.match.params.id - 1]
    // let mood = props.moods.filter(mood => mood.id == props.match.params.id)[0]

    let mood = props.moods.find(mood => mood.id == props.match.params.id)
    
    console.log(mood)

    return (
        <div>
            
            <Card.Group centered>
                <Card>
                    <Card.Content>
                        <Card.Meta> {mood ? mood.date : null}</Card.Meta>
                        <br></br>
                        <Card.Header><i className={`far fa-2x ${mood ? mood.feeling : null}`}></i></Card.Header>
                        </Card.Content>
                        
                        <Card.Content extra textAlign="left">
                            <i className={`fas fa-2x ${mood ? mood.weather : null}`}>
                                </i> {mood ? mood.note : null}
                                </Card.Content>
                                </Card>
                                </Card.Group>

                                <br></br>
                                
                                <HappeningsContainer mood={mood}/>
                                
                                </div>
                                )
                            }

export default Mood