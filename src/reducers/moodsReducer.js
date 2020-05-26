export default (state = [], action) => {
    // debugger 
        switch (action.type) {
            case 'GET_MOODS':
                console.log("heee")
                return action.moods
                
                case 'CREATE_MOOD':
                    return state.concat(action.mood);
                                             
                    // case 'ADD_HAPPENINGS':
                    //     let moods = state.moods.map(mood => {
                    //         if (mood.id === action.payload.id) {
                    //             return action.payload
                    //         } else {
                    //             return mood
                    //         }
                    //     })
                    //     return {...state, moods: moods}

                default:
                    return state
        }
        
    }