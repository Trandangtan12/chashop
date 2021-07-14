import React from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import firebase from "../../../firebase";

const AddProduct = ({ onAdd, category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = (data) => {
    const productImage = document.querySelector("#product-image").files[0];
    let storageRef = firebase.storage().ref(`images/${productImage.name}`);
    storageRef.put(productImage).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const product = {
          ...data,
          image: url,
        };
        alert("Thêm thành công!")
        onAdd(product);
        history.push("/admin/products");
      });
    });
  };

  return (
    <div className="mx-4 mt-4 text-black">
      <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="border border-gray-200 rounded-lg p-4 w-2/3">
        <div className="mb-2 ">
          <div className="mb-2">
          <label>Tên sản phẩm</label>
          </div>
          <div>
        <input
          {...register("name", { required: true })}
          type="text"
          className="border border-gray-300 p-2 w-full"
          id=""
        />
        </div>
        <div>
        {errors.name && (
          <span className="text-danger mt-2">This field is required</span>
        )}
        </div>
        
        </div>
        <div className="mb-2">
          <div className="mb-2">
          <label>Giá sản phẩm</label>
          </div>
          <div>
        <input
          {...register("price", { required: true })}
          type="number"
          className="border  border-gray-300 p-2 w-full"
          id=""
        />
        </div>
        <div>
        {errors.price && (
          <span className="text-danger mt-2">This field is required</span>
        )}
        </div>
        </div>

        <div className="mb-2">
          <div className="mb-2">
          <label>Số lượng</label>
          </div>
          <div>
        <input
          {...register("quantity", { required: true })}
          type="number"
          className="border  border-gray-300 p-2 w-full"
          id=""
        />
        </div>
        <div>
        {errors.quantity && (
          <span className="text-danger mt-2">This field is required</span>
        )}
        </div>
        </div>
        
        <div className="mb-2">
        <div className="mb-2">
          <label for="">Ảnh sản phẩm</label>
        </div>
        <input
          type="file"
          name=""
          id="product-image"
          className="border border-gray-300 p-2 w-full"
        />
        </div>
       <div className="mb-2">
         <div className="mb-2">
         <label>Danh mục sản phẩm</label>
         </div>
       <select className="p-2 border border-gray-300" name="" id="" {...register('cateId')}>
          {category.map(item=>{
            return <option value={item._id}>{item.name}</option>
          })}
        </select>
       </div>
       <div className="mb-2">
         <div className="mb-2">Mô tả sản phẩm: </div>
         <textarea className="border border-gray-300 w-full" name="" id=""  rows="7" {...register('description')}></textarea>
       </div>
       <div className="">
        <button type="submit" className="border rounded-lg border-gray-400 p-3 bg-gray-900 text-white w-full">
          Lưu
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
