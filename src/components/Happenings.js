import React from 'react'

const Happenings = (props) => {
    
    console.log(props)
    
    return (
    
        <div>
            
            {props.happenings && props.happenings.map(happening =>
            <i key={happening.id} className={`fas fa-2x ${happening.name}`}></i> 
            )}
            
            </div>
        )
}

export default Happenings
