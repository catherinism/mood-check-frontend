import React from 'react'

const Happenings = (props) => {
    console.log(props)

    return (
        <div>
            {props.happenings && props.happenings.map(happening =>
            <li key={happening.id}> <i className={`far fa-2x ${happening.name}`}></i> {happening.name}</li>
            
            
            )}
            
        </div>
        )
}

export default Happenings
