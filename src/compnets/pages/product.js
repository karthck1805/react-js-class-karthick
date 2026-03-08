import React, { useState } from 'react'

function Product() {
    const [value , setValue] = useState('0');
    
    
    
    const getValues = () => {
        setValue(localStorage.getItem('name'));
        console.log(value);
    }

    return (
        <div>
            <h1>Product</h1>
            <p>{value}</p> 
          <button onClick={getValues}>getValues</button>

        </div>
    )
}

export default Product
