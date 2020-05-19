import React from "react";
import {Card} from 'semantic-ui-react'


class MoodCard extends React.Component {

    render() {
        return (
            <div>
            <Card.Group stackable centered>
            <Card href={`/moods/${this.props.mood.id}`}>
           
           <Card.Content>
           
            <i className={`far fa-2x ${this.props.mood.feeling}`}></i>
           <br></br><br></br>
             <Card.Header>
           {this.props.mood.date}
               </Card.Header>
               </Card.Content>
          </Card>
          </Card.Group> 

            </div>
        );
    }
};

export default MoodCard;  