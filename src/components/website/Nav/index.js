import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import Logo from "../../../audio/horizontal_on_white_by_logaster.png";
import { onSignOut, isAuthenticate } from "../../auth";
import Search from "../search";

const Nav = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    isAuthenticate() && setIsLogged(true)
  }, [pathname, isLogged]);
  const {user} = isAuthenticate()
  return (
    <nav className="bg-white shadow-md z-50">
      <div className="max-w-7x1 flex justify-between items-center w-[1300px] mx-auto relative bg-white">
        <NavLink to="/" className="font-bold text-3x1">
          <img src={Logo} className="w-[150px]" alt="" />
        </NavLink>
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              activeClassName="text-black"
              className="p-5 inline-block text-gray-500 font-semibold hover:text-black"
            >
              TRANG CHỦ{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="text-black"
              className="p-5 inline-block text-gray-500 font-semibold hover:text-black"
            >
              GIỚI THIỆU{" "}
            </NavLink>
          </li>
          <li className="group relative">
            <Link
              to="/products"
              className="p-5 inline-block text-gray-500 font-semibold hover:text-black"
            >
              {" "}
              SẢN PHẨM <i className="fas fa-angle-down"></i>
            </Link>
            <ul
              className="absolute z-50 left-0 w-[200px] mt-14 opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible group-hover:mt-0
                transition-all duration-500 shadow-md"
            >
              {props.category.map((item) => {
                return (
                  <li>
                    <Link to={`/product/category/${item._id}`} className="block p-2 bg-white">{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
       
       <Search {...props}/>

          <li className="pr-5 pt-5  inline-block group relative">
            <Link className="border-r border-gray-300 pr-5 text-gray-500 font-semibold hover:text-black ">
              <i className="fas fa-user text-black"></i> Tài khoản
            </Link>
            <ul
              className="absolute z-50 left-0 w-[200px] mt-14 opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible group-hover:mt-5
                transition-all duration-500 shadow-md bg-white"
            >
                 
              {!isLogged && (
                <>
                  <li className="p-2">
                    <Link to="/signin">Đăng nhập</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/signup"> Đăng ký </Link>
                  </li>
                </>
              )}
              
              {isLogged && (
                <>
                <li className="p-2">
                    <Link to={user.role === 1 ? "/admin/dashboard" : "/user/dashboard"}>Dashboard</Link>
              </li>
                   <li className="p-2">
                <a
                  href=""
                  onClick={() =>
                    onSignOut(() => {
                      setIsLogged(false)
                      history.push("/");
                    })
                  }
                >
                  Đăng xuất
                </a>
              </li>
                </>
              )}
            
            </ul>
          </li>
          <li className="pr-5 pt-5 inline-block">
            <Link to="/cart" className="text-gray-500 font-semibold hover:text-black">
              <i className="fas fa-cart-plus text-black"></i> Giỏ hàng ( {props.cartItems.length} )
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
