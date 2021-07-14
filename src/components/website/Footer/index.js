import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="clear-both">
      <div className="bg-black text-white mt-4">
      <div className="container mx-auto w-[1300px] h-[300px] pt-[65px]">
        <p className="font-bold mb-4"> CHẢ FASHION - THỜI TRANG NAM </p>
        <div className="grid grid-rows-1 grid-cols-5 gap-4">
          <div className="col-start-1 col-end-3">
            <p>
              <p className="text-xs">
                {" "}
                Công ty TNHH Dịch vụ và Thương mại An Thành.
              </p>
              <p className="text-xs">
                {" "}
                Số ĐKKD 0107861393, Sở KHĐT Tp. Hà Nội cấp ngày 04/10/2017
              </p>
              <p className="text-xs">
                {" "}
                Địa chỉ: Phòng 1002, tầng 10, Tòa nhà CHẢ số 545 đường Nguyễn
                Văn Cừ, P. Gia Thụy, Q. Long Biên, Hà Nội
              </p>
              <p className="text-xs"> Hotline: 024 3938 8512</p>
              <p className="text-xs"> Email: nemcskh@stripe-vn.com</p>
            </p>
          </div>
          <div className="text-xs">
            <p>
              {" "}
              <Link>Giới thiệu</Link>
            </p>
            <p>
              <Link>Sản phẩm</Link>
            </p>
            <p>
              {" "}
              <Link>Tuyển dụng</Link>
            </p>
            <p>
              {" "}
              <Link>Liên hệ</Link>
            </p>
          </div>
          <div className="text-xs">
            <div>
              <div> Chính sách giao nhận - Vận chuyển</div>
              <div>Hướng dẫn thanh toán</div>
              <div>Tra cứu đơn hàng</div>
              <div>Hướng dẫn chọn Size</div>
              <div>Quy định đổi hàng</div>
              <div>Quy định bảo hành và sửa chữa</div>
              <div>Khách hàng thân thiết</div>
            </div>
          </div>
          <div>
            <p>Chứng nhận</p>
            <img className="w-[150px] mt-2" src="https://theme.hstatic.net/200000182297/1000658038/14/bct.png?v=1401" alt=""/>
          </div>

        </div>
      </div>
      </div> 
      <div className="bg-gray-200 text-black">
      <div className="w-[1300px] mx-auto p-1">
    © 2020 - Bản quyền CHẢ
    </div>
    </div>
    </footer>
  );
};

export default Footer;
