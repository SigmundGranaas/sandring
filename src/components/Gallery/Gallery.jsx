import React from 'react'
import {Link} from 'react-router-dom'


const Gallery = (props) => {
    const images = props.images;
    console.log(images)
    return(
        <div>
            {images.map(image => 
                <div key={image.id}>
                    <h1><Link to={`/gallery/${image.id}`}>{image.id}</Link></h1>
                </div>    
            )}
        </div>
    );
}

export default Gallery;