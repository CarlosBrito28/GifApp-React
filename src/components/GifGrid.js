import React, { useState,useEffect } from 'react'
import { getGift } from '../helpers/getGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() =>{
        getGift(category)
        .then(setImages)
    }, [ category ])


  return (
    <>
      
      <h3> { category } </h3>
         <div className="card-grid">

        
        
            {
                images.map( img =>(
                    
                   <GifGridItems
                   key = { img.id }  
                   {...img}
                   />
                ))
            }
        
         </div>        
    </>

  )
}
