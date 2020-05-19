import React from 'react'
import MoodCard from './MoodCard'

const Moods = (props) => {

    return props.moods.map(mood => {
      return (

        <div key={mood.id}>
    <MoodCard mood={mood} />
              
        </div>
      )
    })
}

export default Moods