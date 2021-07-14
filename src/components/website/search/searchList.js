import React from 'react'
import { Link } from 'react-router-dom'

const SearchList = ({onSearch, product}) => {
    return (
        <div>
            {product.filter(val => {
                  if(onSearch==""){
                      return ""
                  }else if(val.name.toLowerCase().includes(onSearch.toLowerCase())){
                    return val  
                  }
              }).map(item => {
                  return (
                      <li className="bg-white p-4 hover:bg-gray-200">
                         <a href={`/product/${item._id}`}>
                             <div className="flex justify-between">
                             <div className="w-40">{item.name}</div>
                             <div> <img src={item.image} className="w-20" alt="" /></div>
                             </div>
                             </a> 
                      </li>
                  )
              })} 
        </div>
    )
}

export default SearchList
