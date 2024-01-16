import React from 'react'
import { ItemDetail } from './ItemDetail';
import { ItemCount } from './ItemCount';
import { useEffect, useState } from 'react'

export const ItemDetailConteiner = () => {
    const getProductos = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data)    
        return data
    }
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(()=>{
        getProductos().then((product)=> setProduct(product))
    }, [])

    // const filteredProducts = product.filter((producto)=> producto.id == id)
    return (
    <div>
        <ItemCount/>
        <ItemDetail product = {product}/>
        {/* {filteredProducts.map((p)=>{
            <ItemDetail producto ={p}/> //no aparece el producto
            console.log(p)
        })} */}
        {/* {product.map((p)=>{
                return (
                    
                    
                )
            })
        } */}
    </div>
    )
}