import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const CategoryPage = ({product, category}) => {
    const {id} = useParams()
    return (
        <div>
            <div className="mx-auto w-[1300px]">
            {category.filter(cateName => cateName._id == id).map(item => {
                return (
          <h1 className="text-center mt-4 mb-4 text-3xl uppercase">{item.name}</h1>
                )
        })}
              <div className="grid grid-cols-4 gap-4">
            {product.filter(product => product.cateId == id).map(item => {
                return(
                    <Link to={`/product/${item._id}`}>
                    <div className="border border-gray-300 p-3">
                      <img className="h-[300px] w-full object-cover" src={item.image} alt=""/>
                      <p className="font-bold mt-2 uppercase truncate">{item.name}</p>
                      <p className=" mt-2 uppercase text-red-600">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</p>
                    </div>
                    </Link>
                   )
                })}
        </div>
        </div>
        </div>
        
    )
}

export default CategoryPage
