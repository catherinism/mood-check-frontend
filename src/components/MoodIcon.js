import React, { Component } from 'react'


export default class MoodIcon extends Component {

    state = {
        like: 0
    }

    increment = () => {
        const newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }
    
    render(){
       return (
           <div>
            <button onClick={this.increment}>like</button>Likes: {this.state.count}
         </div>
        )
     }
}