import React, { useState } from 'react';
import ProdactFrom from './ProdactFrom';
import ProdactTable from './ProdactTable';

const ProdactManagement = () => {
    const [product,setProduct]=useState([])
    const handeAddProduct=(newproduct)=>{
        const newproducts=[...product,newproduct];
        setProduct(newproducts)

    }


    return (
        <div>
            <h1>ProdactManagement</h1>
            <ProdactFrom handeAddProduct={handeAddProduct}></ProdactFrom>
            <ProdactTable product={product}></ProdactTable>
        </div>
    );
};

export default ProdactManagement;