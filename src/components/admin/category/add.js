import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import firebase from "../../../firebase";

const AddCategory = ({ onAddCate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = (data) => {
    const categoryImage = document.querySelector("#category-image").files[0];
    let storageRef = firebase.storage().ref(`images/${categoryImage.name}`);
    storageRef.put(categoryImage).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const category = {
          ...data,
          image: url,
        };
        onAddCate(category);
        history.push("/admin/category");
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
          <label for="">Ảnh sản phẩm</label>
        </div>
        <input
          type="file"
          name=""
          id="category-image"
          className="border border-gray-300 p-2 w-full"
          {...register("image")}
        />
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

export default AddCategory;
