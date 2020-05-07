import React, { Component } from 'react'
import QuoteInput from '../components/QuoteInput'
import Quotes from '../components/Quotes'

class QuotesContainer extends Component {
    render() {
        return (    
            <div>
                <QuoteInput/>
                <Quotes quotes={this.props.mood && this.props.mood.quotes}/>
            </div>
        )
    }
}

export default QuotesContainer