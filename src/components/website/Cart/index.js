import React from "react";

const CartPage = ({cartItems, addToCart, onRemoveCart, onRemoveCartAll}) => {
  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 200000 ? 0 : 20000;
  const totalPrice = itemsPrice + shippingPrice;
  const exactly = () => {
    alert("Đã tạo đơn hàng!")
  }
  return (
    <div className="mx-auto p-40">
      {cartItems.length === 0 && (
        <div>Bạn không có sản phẩm nào trong giỏ hàng!</div>
      )}
      <table className="w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3">Tên sản phẩm</th>
            <th className="px-4 py-3">Giá</th>
            <th className="px-4 py-3">Tình trạng</th>
            <th className="px-4 py-3">Số lượng</th>
            <th className="px-4 py-3">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {cartItems.map((item) => {
            return (
              <tr className="bg-gra-50 hover:bg-gray-100 text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-20 h-20 mr-3 md:block">
                      <img
                        className="object-cover w-full h-full"
                        src={item.image}
                        alt=""
                        loading="lazy"
                      />
                      
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(item.price)}</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    {" "}
                    Còn hàng{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button className="px-4 py-1 border border-gray-300" onClick={()=>onRemoveCart(item)}>-</button>
                  <button className="px-4 py-1 border border-gray-300">{item.qty}</button>
                  <button className="px-4 py-1 border border-gray-300" onClick={()=>addToCart(item)}>+</button>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button onClick={() => onRemoveCartAll(item)} className="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                    <i class="fas fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {cartItems.length !== 0 && (
        <>
        <div className="grid grid-cols-3 gap 4">
          <div></div>
          <div></div>
          <div>
          <div className="flex justify-between">
          <div>Giá sản phẩm: </div>
          <div>{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(itemsPrice)}</div>
        </div>

        <div className="flex justify-between">
          <div>Giá vẫn chuyển: </div>
          <div>{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(shippingPrice)}</div>
        </div>

        <div className="flex justify-between text-xl">
          <div>Tổng tiền: </div>
          <div className="font-semibold text-red-500">{new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(totalPrice)}</div>
        </div>

        <div className="mt-4">
          <button onClick={exactly} className="w-full p-4 bg-red-500 text-white">Mua hàng</button>
        </div>
          </div>
        </div>
        
        </>
      )}
    </div>
  );
};

export default CartPage;
