import React, { Component } from 'react'
import HappeningForm from '../components/HappeningForm'
import Happenings from '../components/Happenings'

class HappeningsContainer extends Component {
    render() {
        return (    
            
            <div>
                <Happenings happenings={this.props.mood && this.props.mood.happenings}/>
                <h3>What factor/s affected your mood at the moment?</h3>
                <HappeningForm mood={this.props.mood}/>
                
            </div>
        )
    }
}

export default HappeningsContainer