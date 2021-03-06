import React from "react";
import { Link } from "react-router-dom";

const AdminCategory = (props) => {
  const onHandleRemove = (id) => {
    if(window.confirm("Bạn có chắc muốn xóa không?")){
      props.onDeleteCate(id);
      }
  };
  return (
    <div>
      <div className="mt-4 mx-4">
  <div className="w-full overflow-hidden rounded-lg shadow-xs">
    <div className="w-full overflow-x-auto">
      <div className="text-black text-4xl uppercase mb-4 font-medium mt-4">quản lý danh mục</div>
      <div className="mt-4 mb-4">
      <Link to="/admin/category/add"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Thêm danh mục
  </button></Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3">Tên sản phẩm</th>
            <th className="px-4 py-3">Active</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        {props.category.map((item) => {
          return (
          <tr className="bg-gra-50 hover:bg-gray-100 text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div className="relative hidden w-20 h-20 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full" src={item.image} alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                </div>
              </div>
            </td>
            {/* <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
            </td> */}
            <td className="px-4 py-3 text-sm">
            <Link to={`/admin/category/edit/${item._id}`}>
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
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
      <span className="col-span-2" />
      {/* Pagination */}
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li>
              <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
            </li>
            <li>
              <button className="px-3 py-1 text-white transition-colors duration-150 bg-blue-600 border border-r-0 border-blue-600 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
            </li>
            <li>
              <span className="px-3 py-1">...</span>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  </div>
</div>

    </div>
  );
};

export default AdminCategory;
