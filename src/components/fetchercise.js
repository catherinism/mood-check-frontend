import React from 'react'

function doStuff(){
    fetch("https://api.github.com/users/catherinism")
    console.log("Data is coming!")
    .then(res => res.json())
    .then(data => console.log(data))
}

export default doStuff()