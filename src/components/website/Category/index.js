import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({category}) => {
    return (
        <div className="container mx-auto p-1 mt-2">
            <h1 className="text-center mt-2 mb-4 text-3xl">DANH MỤC</h1>
        <div className="grid grid-cols-4 gap-2">
            {category.map(item=>{
                return(
                    <Link to={`/product/category/${item._id}`}>
                    <div className="relative overflow-hidden group">
                        <img className="h-[180px] w-full object-cover" src={item.image} alt="" />
                    <div className="absolute bottom-0 left-0 right-0 p-[70px] bg-gradient-to-t from-black"></div>
                    <div className="uppercase delay-150 ease-in-out duration-300 opacity-60 group-hover:opacity-100 group-hover:transform group-hover:translate-y-[-10px] absolute bottom-0 left-0 right-0 p-[30px] font-bold text-lg text-white text-center">
                        {item.name} <br/>
                    </div>
                    </div>
                    </Link>
                )
            })}
        </div>
        </div>
    )
}

export default CategoryList
