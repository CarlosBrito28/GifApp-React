import React, { useState,useEffect } from 'react'
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() =>{
        getGift();
    }, [])

    const  getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Dragon%20ball&limit=10&api_key=96t8goQ3FA3NyDpZEPSkcgib0Z4KJFjo';
        const resp = await fetch ( url );
        const {data} = await resp.json();

        const gifs = data.map (img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log( gifs);
        setImages( gifs);


    }
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
