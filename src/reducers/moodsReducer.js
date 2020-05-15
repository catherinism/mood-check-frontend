export default function moodsReducer(state = {moods: []}, action) {
// debugger 
    switch (action.type) {
        case 'FETCH_MOODS':
            return {moods: action.payload}
            case 'ADD_MOODS':
                return{...state, moods: [...state.moods, action.payload]}
                case 'ADD_HAPPENINGS':
                    let moods = state.moods.map(mood => {
                        if (mood.id === action.payload.id) {
                            return action.payload
                        } else {
                            return mood
                        }
                    })
                    return {...state, moods: moods}
            default:
                return state
    }
 
}