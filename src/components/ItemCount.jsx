import React from 'react'
import { useState } from 'react'
export const ItemCount = () => {
    const stockProducto = 10
    const [cantidad, setCantidad] = useState(0)
    const sumar=()=>{
        let newCantidad = cantidad;

        (newCantidad < stockProducto) ? setCantidad(newCantidad +1) : console.log('Supero el stock')
        
    }
    const restar=()=>{
        let newCantidad = cantidad; // hago la copia del estado.
        (newCantidad > 0) ? setCantidad(newCantidad -1)  : console.log('No se aceptan nuemeros negativos')
    }
    const onAdd = ()=>{
        const newCantidad = cantidad
        alert(`La cantidad seleccionada es: ${newCantidad}`)
    }
    return (
        <>
            <button onClick= {restar}>-</button>
            <span>{cantidad}</span>
            <button onClick= {sumar}>+</button>
            <button onClick={onAdd}>Aceptar</button>
        </>
)   
}
