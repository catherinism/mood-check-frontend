export default function fetchMoods() {
    console.log("c")
    return (dispatch) => {
        // console.log('inside fetch moods')
    fetch('http://localhost:3000/api/v1/moods')
      .then(response => response.json())
      .then(moods => {
          console.log("d");
          dispatch({
          type: 'FETCH_MOODS',
          payload: moods
        })
    })
    }
console.log("e")
}