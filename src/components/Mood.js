import React from 'react'
import { Link } from 'react-router-dom'

const Mood = ({mood}) => {
    console.log(mood)

    return (
        <div>
           
            <h3><Link to={`moods/${mood.id}/quotes`}> {mood.feeling}</Link></h3>

        </div>
    )

}

export default Mood