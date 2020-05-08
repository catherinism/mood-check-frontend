import React from 'react'

const Quotes = (props) => {
    console.log(props.quotes)

    return (
        <div>
            {props.quotes && props.quotes.map(quote =>
            <li key={quote.id}>{quote.phrase}</li>
            )}
        </div>
        )
}

export default Quotes
