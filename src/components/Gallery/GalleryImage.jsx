import React from 'react'


const GalleryImage =(props) => {
    const image = props.image
    return(
        <div>
            {image.map(image => 
            <div key={image.id}>
                     <h1> {image.title.rendered}</h1>
                     <img src={image.guid.rendered} alt={image.caption.rendered}/>
            </div>
            )} 
        </div>
    );
}

export default GalleryImage;