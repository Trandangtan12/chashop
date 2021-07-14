import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import ProductAPI from "../../../api/productApi";
import firebase from '../../../firebase'

const EditProduct = ({onEdit, category}) => {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: products } = await ProductAPI.get(id);
        setProduct(products);
        reset(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
 
  const history = useHistory()
  const onHandleSubmit = (data) => {
      if(document.querySelector("#update-image").value == ""){
          const product = {
            ...data,
          }
          if(window.confirm("Bạn chắc chắn muốn sửa?")){
            onEdit(product, id);
            history.push("/admin/products");
          }
      }else{
    const productImage = document.querySelector("#update-image").files[0];
    let storageRef = firebase.storage().ref(`images/${productImage.name}`);
    storageRef.put(productImage).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const product = {
        ...data,
        image: url,
        };
        if(window.confirm("Bạn chắc chắn muốn sửa?")){
          onEdit(product, id);
          history.push("/admin/products");
        }
      });
    });
}
  };
  return (
    <div className="text-black mx-4 mt-4">
      <div className="">
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="  grid grid-cols-3 gap-4">
          <div className="rounded-lg p-4 col-span-2 border border-gray-200">
        <div className="mb-2 ">
          <div className="mb-2">
          <label>Tên sản phẩm</label>
          </div>
          <div>
        <input
          {...register("name", { required: true })}
          type="text"
          className="border border-gray-300 p-2 w-full"
          id="update-name"
          defaultValue={product.name}
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
          id="update-price"
          defaultValue={product.price}
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
          <label>số lượng</label>
          </div>
          <div>
        <input
          {...register("quantity", { required: true })}
          type="number"
          className="border  border-gray-300 p-2 w-full"
          id="update-quantity"
          defaultValue={product.quantity}
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
         <label>Danh mục sản phẩm</label>
         </div>
       <select id="update-cateId" className="p-2 border border-gray-300" name="" {...register('cateId')}>
          {category.map(item=>{
            return <option value={item._id}>{item.name}</option>
          })}
        </select>
       </div>
       <div className="mb-2">
         <div className="mb-2">Mô tả sản phẩm: </div>
         <textarea className="border border-gray-300 w-full" name="" id="update-description"  rows="7" {...register("description")}></textarea>
       </div>
       <div className="">
        <button type="submit" className="border rounded-lg border-gray-400 p-3 bg-gray-900 text-white w-full">
          Lưu
        </button>
        </div>
        </div>
        <div>
        <div className="mb-2">
          <label for="">Ảnh sản phẩm</label>
        </div>
        <img src={product.image} className="mb-2 mt-2" alt="" />
        <div className="mb-2">
        <input type="hidden" name="" id="update-hidden-image" defaultValue={product.image} {...register('image')}/>
        <input
          type="file"
          name=""
          id="update-image"
          className=""
        />
        </div>
      </div>
        </div>
      </form>
      </div>
      
    </div>
    
  );
};

export default EditProduct;
