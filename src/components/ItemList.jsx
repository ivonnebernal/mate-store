import React from 'react'
import { Item } from './Item'
export const ItemList = ({product}) => {
    
    return (
    <div>
        {product.map((p)=>{
                return (
                    <div key={p.id}>
                        
                        <Item producto ={p}/>
                    </div>
                    
                )
            })
        }
    </div>
  )
}
