import React from 'react';

const ImageList=(props)=>{
    const images=props.images.map((image)=>{
        return <img key={image.id} src={image.webformatURL} alt="image" />
    })
    return(
        <div>
            {images}
        </div>
    )
}

export default ImageList;

//therefore while fetching the webformatURl of the image,we need to attach a key to the imahe,so
//that it ,when we have t0o update or acccess a image we can di it with the help of key.
//we cancnot apply key for every element ,its only for a list of elements.
//in our api we have a unique id for every image and we are going to use as a key.
//we have to assign key to the root element that we are returning from the list of records, i.e if we have
//root div tag,assign key to that div tag.