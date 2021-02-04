import React from 'react'
function HeadingContainer(props){
    return(
        <div className="heading-container">
                    <div className="heading">
                        <div className="title-des">
                            <h1>{props.title}</h1>
                            <p>{props.desc} </p>
                        </div>
                        <div className="img-file">
                            <img src={props.loc} alt={props.title}/>
                        </div>
                    </div>
                </div>
    )
}
export default HeadingContainer