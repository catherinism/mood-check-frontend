import React from "react";
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'

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

        const {mood} = this.props
        return (
            <div>
            <Card.Group stackable centered>
            <Card href={`/moods/${mood.id}`}>
           
           <Card.Content>
               <i className={`far fa-2x ${mood.feeling}`}></i>
                <br></br><br></br>
                <Card.Header>
                    {mood.date}
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

const mapStateToProps = state => {
    return ({
        moods: state.moods
    })
}

export default connect(mapStateToProps)(MoodCard)