import React from 'react'
import {Route, Link} from 'react-router-dom'
import Mood from './Mood'


const Moods = ({moods}) => {
    console.log(moods)

    return (
        <div>   
            {/* {props.moods.map(mood => 
            <li key={mood.id}>
                <Link to={`/moods/${mood.id}`}>{mood.feeling}</Link> 
                
            </li> )} */}

            {moods && moods.map(mood => {
                return (
                    <Mood mood={mood} key={mood.id} />
                )
            })}
        </div>
    )
}

export default Moods
