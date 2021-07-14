import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({product}) => {
 const [search, setSearch] = useState("")
    return (
        <li className="p-5 inline-block group relative">
            <Link className="border-r border-gray-300 pr-5 text-gray-500 font-semibold hover:text-black ">
              <i className="fas fa-search text-black"></i>
            </Link>
            <ul
              className="absolute z-50 left-0 w-max mt-14 opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible group-hover:mt-5
                transition-all duration-500 shadow-md -ml-10"
            >
              <li className="bg-white">
                <input
                  placeholder="Tìm kiếm..."
                  className="border-1 p-2 w-[400px] border-white"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) =>setSearch(e.target.value)}
                />
                <button className="bg-black p-2">
                  <i className="fas fa-search text-white"></i>
                </button>
              </li>
              {product.filter(val => {
                  if(search==""){
                      return ""
                  }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                    return val 
                  }
              }).map(item => {
                  return (
                    <li className="bg-white p-4 hover:bg-gray-200">
                    <Link to={`/product/${item._id}`}>
                        <div className="flex justify-between">
                        <div className="w-40">{item.name}</div>
                        <div> <img src={item.image} className="w-20" alt="" /></div>
                        </div>
                        </Link> 
                 </li>
                  )
              })}
            </ul>
            
          </li>
    )
}

export default Search
