export default function fetchMoods() {
    return (dispatch) => {
        console.log('inside fetch moods')
    fetch('http://localhost:3000/api/v1/moods')
      .then(response => response.json())
      .then(moods => dispatch({
          type: 'FETCH_MOODS',
          payload: moods
      }))
    }

}

