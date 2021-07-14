import React from 'react'
import { Link } from 'react-router-dom'

const List = ({product}) => {
  // const onHandleRemove = (id) => {
  //   props.onDelete(id)
  //   console.log(id);
  // }
  // <button onClick={()=>onHandleRemove(item._id)}>Delete</button>
    return (
      <div>
      <div className="mx-auto w-[1300px]">
          <h1 className=" mt-4 mb-4 text-3xl uppercase">thời trang nam nổi bật</h1>
              <div className="grid grid-cols-4 gap-4">
                {product.filter(product=> product.cateId == "60aa160e4cf852178cfdba1b").map(item => {
                  return(
                    <Link to={`/product/${item._id}`}>
                    <div className="border border-gray-300 p-3">
                      <img className="h-[300px] w-full object-cover" src={item.image} alt=""/>
                      <p className="font-bold mt-2 uppercase">{item.name}</p>
                      <p className=" mt-2 uppercase text-red-600">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</p>
                    </div>
                    </Link>
                   )
                }).slice(0,4)}
              </div>
        </div>

        <div className="mx-auto w-[1300px]">
          <h1 className=" mt-4 mb-4 text-3xl uppercase">Thời trang nữ nôi bật</h1>
              <div className="grid grid-cols-4 gap-4">
                {product.filter(product=> product.cateId == "60bcf792296f4555f04a6ee0").map(item => {
                  return(
                    <Link to={`/product/${item._id}`}>
                    <div className="border border-gray-300 p-3">
                      <img className="h-[300px] w-full object-cover" src={item.image} alt=""/>
                      <p className="font-bold mt-2 uppercase truncate">{item.name}</p>
                      <p className=" mt-2 uppercase text-red-600">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</p>
                    </div>
                    </Link>
                   )
                }).slice(0,4)}
              </div>
        </div>

        <div className="mx-auto w-[1300px]">
          <h1 className="mt-4 mb-4 text-3xl uppercase">Giày</h1>
              <div className="grid grid-cols-4 gap-4">
                {product.filter(product=> product.cateId == "60bcf7e7296f4555f04a6ee1").map(item => {
                  return(
                    <Link to={`/product/${item._id}`}>
                    <div className="border border-gray-300 p-3">
                      <img className="h-[300px] w-full object-cover" src={item.image} alt=""/>
                      <p className="truncate font-bold mt-2 uppercase">{item.name}</p>
                      <p className=" mt-2 uppercase text-red-600">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</p>
                    </div>
                    </Link>
                   )
                }).slice(0,4)}
              </div>
        </div>

        <div className="mx-auto w-[1300px]">
          <h1 className="mt-4 mb-4 text-3xl uppercase">Túi xách, Balo thời trang</h1>
              <div className="grid grid-cols-4 gap-4">
                {product.filter(product=> product.cateId == "60c098865e65bb25a0421967").map(item => {
                  return(
                    <Link to={`/product/${item._id}`}>
                    <div className="border border-gray-300 p-3">
                      <img className="h-[300px] w-full object-cover" src={item.image} alt=""/>
                      <p className="truncate font-bold mt-2 uppercase">{item.name}</p>
                      <p className=" mt-2 uppercase text-red-600">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</p>
                    </div>
                    </Link>
                   )
                }).slice(0,4)}
              </div>
        </div>
        </div> 
    )
}

export default List
