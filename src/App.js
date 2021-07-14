import "./App.css";
import React, { useState, useEffect } from "react";
import Routes from "./router";
import ProductAPI from "./api/productApi";
import CategoryAPI from "./api/categories";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        //  let response = await fetch("http://localhost:3001/data");
        //  let data = await response.json();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    console.log("số lần gọi!!!");
  }, []);

  const removeItem = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newData = products.filter((item) => item._id != id);
      setProducts(newData);
    } catch (error) {
      console.log(error);
    }
  };
  const removeCate = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newData = categories.filter((item) => item._id != id);
      setCategory(newData);
    } catch (error) {
      console.log(error);
    }
  };
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data: category } = await CategoryAPI.getAll();
        //  let response = await fetch("http://localhost:3001/data");
        //  let data = await response.json();
        setCategory(category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const onHandleAdd = async (product) => {
    console.log(product); 
    try {
      await ProductAPI.add(product);
      setProducts([product, ...products]);
    } catch (error) {
      console.log(error);
    }
  };
  
  const onHandleAddCategory = async (category) => {
    console.log(category); 
    try {
      await CategoryAPI.add(category);
      setCategory([...categories, category]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEdit = async (product, id) => {
    console.log(product);
    try {
      await ProductAPI.update(product, id);
      const newProducts = products.map((item) =>
        item._id === id ? product : item 
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEditCate = async (category, id) => {
    console.log(category);
    try {
      await CategoryAPI.update(category, id);
      const newCategory = categories.map((item) =>
        item._id === id ? category : item
      );
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  //Cart
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
   
  };
  const onRemoveCart = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const onRemoveCartAll = (product) => {
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      const exist = cartItems.filter(x => x._id !== product._id)
      setCartItems(exist);
    }

  }

  //Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indeOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indeOfFirstPost, indexOfLastPost)
  const paginate = pageNumbers => setCurrentPage(pageNumbers);
  return (
    <div className="container mx-auto">
      <div>
        <main role="main">
          <Routes
            product={products}
            category={categories}
            onDelete={removeItem}
            onAdd={onHandleAdd}
            onEdit={onHandleEdit}
            onAddCate={onHandleAddCategory}
            onEditCate={onHandleEditCate}
            onDeleteCate={removeCate}
            addToCart={addToCart}
            cartItems={cartItems}
            onRemoveCart={onRemoveCart}
            onRemoveCartAll={onRemoveCartAll}
            posts={currentPosts}
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </main>
      </div>
    </div>
  );
}
export default App;
