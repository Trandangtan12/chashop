import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { onSignUp } from "../auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onHandleSubmit = (data, e) => {
    onSignUp(data).then((dataInput) => {
      if (dataInput.error) {
        setError(dataInput.error);
      } else {
        e.target.reset();
        setError("");
        setSuccess(true);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Đăng ký tài khoản</h1>
            <div
              style={{ display: error ? "block" : "none" }}
              className="block bg-red-200 text-red-500 border border-red-light w-full p-3 rounded mb-4"
            >
              {error}
            </div>
            <div style={{ display: success ? "block" : "none" }}>
              Bạn đã đăng ký thành công click để{" "}
              <Link to="/signin">Đăng nhập</Link>
            </div>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Họ và tên"
              {...register("name")}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Mật khẩu"
              {...register("password")}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Đăng ký
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
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
