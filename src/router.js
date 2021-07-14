import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NotFoundPage from "./components/404";
import AboutPage from "./components/website/pages/AboutPage";
import HomePage from "./components/website/pages/HomePage";
import ProductPage from "./components/website/pages/ProductPage";
import Header from "./components/website/Header";
import Layoutadmin from "./components/Layouts/layoutadmin";
import Layoutwebsite from "./components/Layouts/layoutwebsite";
import DetailProductPage from "./components/website/pages/DetailProductPage";
import AdminProduct from "./components/admin/products";
import AddProduct from "./components/admin/products/add";
import SignUp from "./components/user/SignUp";
import EditProduct from "./components/admin/products/edit";
import Footer from "./components/website/Footer";
import SignIn from "./components/user/SignIn";
import Dashboard from "./components/admin/Dashboard";
import PrivateRouter from "./components/auth/PrivateRouter";
import AddCategory from "./components/admin/category/add";
import AdminCategory from "./components/admin/category";
import EditCategory from "./components/admin/category/edit";
import CategoryPage from "./components/website/pages/CategoryPage";
import UserDoashboard from "./components/user/UserDoashboard";
import AdminRouter from "./components/auth/AdminRouter";
import CartPage from "./components/website/Cart";
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <AdminRouter path="/admin/:path?">
          <Layoutadmin>
            <Switch>
              <Route exact path="/admin">
                <Redirect to="/admin/dashboard" />
              </Route>
              <Route exact path="/admin/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/admin/products">
                <AdminProduct {...props} />
              </Route>
              <Route exact path="/admin/category">
                <AdminCategory {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProduct {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategory {...props} />
              </Route>
              <Route exact path={`/admin/product/edit/:id`}>
                <EditProduct {...props}/>
              </Route>
              <Route exact path={`/admin/category/edit/:id`}>
                <EditCategory {...props}/>
              </Route>
            </Switch>
          </Layoutadmin>
        </AdminRouter>
        <Route>
          <Layoutwebsite>
            <Header {...props} />
            <Switch>
              <Route exact path="/">
                <HomePage {...props} />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/products">
                <ProductPage {...props}/>
              </Route>
              <Route exact path={`/product/:id`}>
                <DetailProductPage {...props}/>
              </Route>
              <Route exact path={`/product/category/:id`}>
                   <CategoryPage {...props}/>
              </Route>
              <Route exact path="/signup">
                <SignUp/>
              </Route>
              <Route exact path="/signin">
                <SignIn/>
              </Route>
              <Route exact path="/cart">
                <CartPage {...props}/>
              </Route>
              <PrivateRouter exact path ="/user/dashboard">
                  <UserDoashboard />
              </PrivateRouter>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
            <Footer />
          </Layoutwebsite>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
