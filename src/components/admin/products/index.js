import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination";

const AdminProduct = (props) => {
  const onHandleRemove = (id) => {
    if(window.confirm("Bạn có chắc muốn xóa không?")){
    props.onDelete(id);
    }
  };
  return (
    <div>
      <div className="mt-4 mx-4">
  <div className="w-full overflow-hidden rounded-lg shadow-xs">
    <div className="w-full overflow-x-auto">
      <div className="text-black text-4xl uppercase mb-4 font-medium mt-4">quản lý sản phẩm</div>
      <div className="mt-4 mb-4">
      <Link to="/admin/product/add"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Thêm sản phẩm
  </button></Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3">STT</th>
            <th className="px-4 py-3">Tên sản phẩm</th>
            <th className="px-4 py-3">Giá sản phẩm</th>
            <th className="px-4 py-3">Số lượng</th>
            <th className="px-4 py-3">Tình trạng</th>
            <th className="px-4 py-3">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        {props.posts.map((item, index) => {
          return (
          <tr className="bg-gra-50 hover:bg-gray-100 text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3 text-sm">{index + 1}</td>
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div className="relative hidden w-20 h-20 mr-3 md:block">
                  <img className="object-cover w-full h-full" src={item.image} alt="" />
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{props.category.filter(category => category._id == item.cateId).map(cate => {return cate.name})}</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</td>
            <td className="px-4 py-3 text-sm">{item.quantity}</td>
            
            <td className="px-4 py-3 text-xs">
              {item.quantity == 0 ? <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100"> hết hàng </span> : <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> còn hàng </span>}
            </td>
            <td className="px-4 py-3 text-sm">
            <Link to={`product/edit/${item._id}`}>
            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100"><i class="fas fa-pen"></i> Sửa </span>
              </Link>
              <button
                onClick={() => onHandleRemove(item._id)}
                className="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100"
              >
               <i class="fas fa-trash-alt"></i> Delete
              </button>
              
            </td>
          </tr>
          )
          })}
        </tbody>
      </table>
    </div>
   
      {/* Pagination */}
      
       <Pagination {...props}/>
     
  </div>
</div>

    </div>
  );
};

export default AdminProduct;
