import React from 'react'
import {Card} from 'semantic-ui-react'

const Moods = (props) => {
  // console.log(props)

  return props.moods.map(mood => {
    return (

      <div key={mood.id}>

       <Card.Group stackable centered>
         <Card href={`/moods/${mood.id}`}>

         <Card.Content>

          <i className={`far fa-2x ${mood.feeling}`}></i>
         <br></br><br></br>
           <Card.Header>
         {mood.date}
             </Card.Header>

             </Card.Content>
        </Card>
        </Card.Group> 
        </div>
      )
    })
  }

  export default Moods
  