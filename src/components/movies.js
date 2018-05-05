import React from 'react';
import movie_container from './movie-container'
function movieComponent(props){
    console.log(props.info)
    //we are using CONTENT (props) from the movie-container
    const {info}=props;
    return (
        <div>
            <img src={info['im:image'][2].label}/>            
            <h3>{info['im:name'].label}
            </h3>
            <p>{info.summary.label}</p>

        </div>
    )
}
export default movieComponent