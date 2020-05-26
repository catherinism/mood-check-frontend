const initialState = {
    feeling: "fa-smile",
    date: '',
    note: '',
    weather: "fa-sun"
}

export default(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATED_FORM':
            console.log("updated form")
            return action.moodFormData

            case 'RESET_FORM':
                console.log("reset form")
                return initialState

                default: 
                    return state
    }
}