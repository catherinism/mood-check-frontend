import React from 'react'

const Moods = (props) => {
    console.log(props)

    return (
        <div>   
            {props.moods.map(mood => <li key={mood.id}> {mood.feeling} </li>)}
        </div>
    )
}

export default Moods
