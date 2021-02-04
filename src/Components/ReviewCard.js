import React from 'react'
function ReviewCard(props){
    return(
        <div className="review-card">
            <div className="user">
                <img src={props.image} alt="user" />
                <h1>{props.name}</h1>
            </div>
            <div className="review-text"> 
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default ReviewCard