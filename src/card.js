import React from "react"


function Card(props) {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h2>{props.data.age}</h2>
        </div>
    )
}

export default Card;