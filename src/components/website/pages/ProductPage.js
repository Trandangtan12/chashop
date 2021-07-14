import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../Pagination'

const ProductPage = (props) => {
    const {posts} = props;
    const [sort, setSort] = useState("")
    return (
        <div>
        <div className="mx-auto w-[1300px]">
          <div className="flex justify-between items-center my-4">
          <h1 className="text-3xl uppercase">tất cả sản phẩm</h1>
          <div className="flex justify-between p-2 border-gray-300 border">
            <span>Sắp xếp giá theo: </span>
            <div className="mx-2">
            <button className="mx-1 hover:text-black text-gray-300 focus:text-black" onClick={()=>{setSort("desc")}} value="desc"><i class="fas fa-arrow-down"></i></button>
            <button className="mx-1 hover:text-black text-gray-300 focus:text-black" onClick={()=>{setSort("asc")}} value="asc"><i class="fas fa-arrow-up"></i></button>
            </div>
          </div>
            </div>
              <div className="grid grid-cols-4 gap-4">
                {posts.sort(function(a , b) {
                  if(sort == "asc"){
                   return a.price - b.price
                  }else if(sort == "desc"){
                   return b.price - a.price;
                  }
                }).map(item => {
                  return(
                    <Link to={`/product/${item._id}`}>
                    <div className="border border-gray-300 p-3">
                      <img className="h-[300px] w-full object-cover" src={item.image} alt=""/>
                      <p className="font-bold mt-2 truncate uppercase">{item.name}</p>
                      <p className=" mt-2 uppercase text-red-600">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</p>
                    </div>
                    </Link>
                   )
                })}
              </div>
              <div className="mt-4 mb-4">
              <Pagination {...props} />
              </div>
        </div>
        </div>
    )
}

export default ProductPage
