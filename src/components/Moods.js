// import React from 'react'
// import {Link} from 'react-router-dom'
// // import Mood from './Mood'


// const Moods = (props) => {
//     console.log(props)

//     return (
//         <div>   
//             {props.moods.map(mood => 
//             <li key={mood.id}>
//           <Link to={`/moods/${mood.id}`}>{mood.date} - {mood.feeling}</Link>
//         </li> )}
//         </div>
//     )
// }

// export default Moods

import React from 'react'
import {Link} from 'react-router-dom'
// import Mood from './Mood'


class Moods extends React.Component {
    // console.log(props)

    render() {

    return (
        <div>   
            {this.props.moods.map(mood => 
            <li key={mood.id}>
          <Link to={`/moods/${this.mood.id}`}>{this.mood.date} - {this.mood.feeling}</Link>
        </li> )}
        </div>
    )
}

}
export default Moods

