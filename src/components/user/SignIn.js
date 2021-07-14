import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import { onSignIn, authenticate, isAuthenticate } from "../auth";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [redirectToRef, setRedirectToRef] = useState(false)
  const {user} = isAuthenticate()
  const onHandleSubmit = (data) => {
   setLoading(true);
   onSignIn(data).then(dataUser => {
     if(dataUser.error){
       setError(dataUser.error)
       setLoading(false)
     }else{
      authenticate(dataUser, ()=>{
        setRedirectToRef(true)
       })
     }
   })
  };
  const redirectUser = () => {
    if(redirectToRef){
       if(user.role == 1){
         return <Redirect to="/admin/dashboard"/>
       }else{
         return <Redirect to="/user/dashboard"/>
       }
    }
  }
  return (
    <div>
    {redirectUser()}
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Đăng nhập</h1>
            {loading && (
              <div className="block bg-red-100 text-red-700 border border-red-light w-full p-3 rounded mb-4">
                ...loading
              </div>
            )}
            <div
              style={{ display: error ? "block" : "none" }}
              className="block bg-red-200 text-red-500 border border-red-light w-full p-3 rounded mb-4"
            >
              {error}
            </div>
            <input
              {...register("email")}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              {...register("password")}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Mật khẩu"
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Đăng nhập
            </button>
            <div className="text-center text-sm text-grey-dark mt-4">
              Bằng cách đăng ký, bạn đồng ý với
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Điều khoản dịch vụ
              </a>{" "}
              và
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Đăng ký
            </a>
            
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default SignIn;
