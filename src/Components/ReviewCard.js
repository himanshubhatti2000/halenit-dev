import React from 'react'
import im from '../assests/images/user1.jpg'
function ReviewCard(){
    return(
        <div className="review-card">
            <div className="user">
                <img src={im} alt="user" />
                <h1>Philip Gallaghar</h1>
            </div>
            <div className="review-text"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum malesuada tellus sed ullamcorper. Duis aliquam auctor nisl, sit amet ornare augue ullamcorper ...</p>
            </div>
        </div>
    )
}

export default ReviewCard