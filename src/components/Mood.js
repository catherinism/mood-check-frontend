import React from 'react'
import { Redirect } from 'react-router-dom'
import QuotesContainer from '../containers/QuotesContainer'

const Mood = (props) => {
    // console.log(props)

    let mood = props.moods[props.match.params.id - 1]
    console.log(mood)

    return (
        <div>
            <li>
                {mood ? mood.feeling : null} - {mood ? mood.url : null}
            </li>
            <QuotesContainer mood={mood}/>

        </div>
    )

}

export default Mood