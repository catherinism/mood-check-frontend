export const addHappening = (happening, moodId) => {
    // debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/moods/${moodId}/happenings`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(happening)
        })
        .then(response => response.json())
        .then(mood => dispatch({type: 'ADD_HAPPENINGS', payload: mood}))
    }
}