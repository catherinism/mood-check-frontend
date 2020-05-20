import React from "react";
import {Card} from 'semantic-ui-react'


class MoodCard extends React.Component {
    state = {
        likes: true
    }

    onLike = (e) => {
        e.stopPropagation()
        this.setState((state) => {
            return {likes: !state.likes }
        })
    }



    render() {
        return (
            <div>
            <Card.Group stackable centered>
            <Card >
           
           <Card.Content>
               <i className={`far fa-2x ${this.props.mood.feeling}`}></i>
                <br></br><br></br>
                <Card.Header>
                    {this.props.mood.date}
                    <button onClick={this.onLike}> Like </button>
                    {this.state.likes ? "Like" : "Unlike" }
                    </Card.Header>
                    </Card.Content>
                    </Card>
                    </Card.Group>
                    </div>
                    )
                }
            }

export default MoodCard