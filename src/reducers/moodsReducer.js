export default function moodsReducer(state = {moods: []}, action) {
// debugger 
    switch (action.type) {
        case 'FETCH_MOODS':
            return {moods: action.payload}
            default:
                return state
    }
 
}