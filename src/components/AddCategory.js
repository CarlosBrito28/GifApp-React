import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInpuntValue] = useState('');

    const handleInputChange = (e) =>{
        
        setInpuntValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();


        if( inputValue.trim().length > 2){
   setCategories(categ => [ inputValue,...categ]);
   setInpuntValue('');

        }
     
    }


  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange }
        />

    </form>
    
  )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
        
} 
