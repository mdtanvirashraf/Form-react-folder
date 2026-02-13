import React from 'react';

const ProdactTable = ({product}) => {
    console.log(product)
    return (
        <div>
            <h3>{product.length}</h3>
            <table>
                <thead>
                    <th>No</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>PassWord</th>
                </thead>
                <tbody>
                    {
                        product.map((product,index)=><tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.password}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProdactTable;