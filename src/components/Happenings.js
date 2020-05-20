import React from 'react'
import {List} from 'semantic-ui-react'

const Happenings = (props) => {
    
    return (
    
        <div>
            
            {props.happenings && props.happenings.map(happening =>
            
            <List key={happening.id} celled horizontal>
                <List.Item>
                    <i  className={`fas fa-2x ${happening.name}`}></i>
                    </List.Item>
                    </List>
                    
                    )}
                    
                    </div>
                    )
                }

export default Happenings
