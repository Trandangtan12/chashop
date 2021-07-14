import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import HeaderAdmin from "../admin/HeaderAdmin";
import SideBar from "../admin/SideBar";

const Layoutadmin = ({ children }, props) => {
  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .header-right {\n        width: calc(100% - 3.5rem);\n    }\n    .sidebar:hover {\n        width: 16rem;\n    }\n    @media only screen and (min-width: 768px) {\n        .header-right {\n            width: calc(100% - 16rem);\n        }        \n    }\n",
          }}
        />
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-white">
          <HeaderAdmin {...props}/>
          <SideBar />
          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layoutadmin;
