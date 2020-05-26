// export const setMoods = moods => {
//   return {
//     type: 'GET_MOODS',
//     moods
//   }
// }
  
//   export const fetchMoods = () => {
//     console.log("c")
//     return dispatch => {
//         // console.log('inside fetch moods')
//     return fetch('http://localhost:3000/api/v1/moods')
//       .then(response => response.json())
//       .then(moods => 
//         //   console.log("d");
//          dispatch(setMoods(moods)))
//          .catch(error => console.log(error))
//     }
// // console.log("e")
// }

// export const getMood = (moodId) => {
//   return dispatch => {
//     return fetch(`http://localhost:3000/api/v1/moods/${moodId}`)
//     .then(response => response.json())
//     .then(mood => {
//       dispatch(setMoods([mood]))
//     })
//   }
// }