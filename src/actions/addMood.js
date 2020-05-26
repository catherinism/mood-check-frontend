export const updatedForm = moodFormData => {
    return {
        type: 'UPDATED_FORM',
        moodFormData
    }
}

export const resetForm = () => {
  return {
      type: 'RESET_FORM'
  }
}

const addMood = mood => {
    return {
        type: 'CREATE_MOOD',
        mood
    }
}

export const setMoods = moods => {
    return {
      type: 'GET_MOODS',
      moods
    }
  }
    
    export const getMoods = () => {
    //   console.log("c")
      return dispatch => {
        //   console.log('inside fetch moods')
      return fetch('http://localhost:3000/api/v1/moods')
        .then(response => response.json())
        .then(moods => dispatch(setMoods(moods)))
           .catch(error => console.log(error))
      }
  // console.log("e")
  }
  
  export const fetchMood = (moodId) => {
      
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/moods/${moodId}`)
      .then(response => response.json())
      .then(mood => {
        dispatch(setMoods([mood]))
      })
    }
  }

export const createMood = (mood, routerHistory) => {
    console.log("im here")

    return dispatch => {
        return fetch('http://localhost:3000/api/v1/moods', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify({mood: mood})
        })
        .then(response => response.json())
        .then(mood => {
            // dispatch({type: 'ADD_MOODS', payload: mood})
            dispatch(addMood(mood))
            dispatch(resetForm())
            routerHistory.replace(`/moods/${mood.id}`)   
        })
        .catch(error => console.log(error))
    }
}