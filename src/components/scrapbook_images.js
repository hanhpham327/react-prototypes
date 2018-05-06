import React from 'react';


export default props=> {
    console.log('scrapbook images props: ', props);
    const {src, style}=props.about
    return (
        <img className='scrapbook-image' src={src} style={style} />
    )
}

// function scrapbook_images(props){
//     console.log(props)
//     return (
//         <div>
//             Holding Text
//         </div>
//     )
// }

// export default scrapbook_images