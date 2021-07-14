import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import CategoryAPI from "../../../api/categories";
import firebase from '../../../firebase'

const EditCategory = ({onEditCate}) => {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data: catergories } = await CategoryAPI.get(id);
        setCategory(catergories);
        reset(catergories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
 
  const history = useHistory()
  const onHandleSubmit = (data) => {
      if(document.querySelector("#update-image").value == ""){
          const category = {
          ...data
          }
          onEditCate(category, id)
        history.push("/admin/category");
      }else{
    const categoryImage = document.querySelector("#update-image").files[0];
    let storageRef = firebase.storage().ref(`images/${categoryImage.name}`);
    storageRef.put(categoryImage).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const category = {
       ...data,
        image: url,
        };
        onEditCate(category, id);
        history.push("/admin/category");
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
          defaultValue={category.name}
        />
        </div>
        <div>
        {errors.name && (
          <span className="text-danger mt-2">This field is required</span>
        )}
        </div>
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
        <img src={category.image} className="mb-2 mt-2" alt="" />
        <div className="mb-2">
        <input type="hidden" name="" id="update-hidden-image" defaultValue={category.image} {...register('image')}/>
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

export default EditCategory;
