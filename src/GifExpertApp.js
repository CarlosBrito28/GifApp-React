import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState( ['Dragon Ball']);

  //  const handleAdd = () =>{
        //setCategories(['HunterXHunter',...categories,'Naruto']);//naruto se agrega al final y xhunter al inicio del arreglo

        //otra forma de hacer esto seria 

    //    setCategories(categ => ['Naruto',...categ, 'HunterXHunter']);
    //}
  return (


    <div>
        <h2 className="animate__animated animate__zoomInDown">Gif Expert App</h2>
        <AddCategory  setCategories={ setCategories }/>

        <hr />
     

        <ol>
            {
                categories.map( category => (
                  <GifGrid 
                  key={ category}
                  category={category}
                   />

                ))
            }
        </ol>


    </div>
  )
}
