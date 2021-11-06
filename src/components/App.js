import React from "react";
import Navbar from "./Navbar/Navbar";
import AddItem from "./AddItem/AddItem";
import EditItem from "./EditItem/EditItem";
import Footer from "./Footer/Footer";
import Login from "./Auth/AuthPage";
import LoginComponent from "./WorkableComponents/Login/Login";
import RegisterComponent from "./Register/Register";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import OrderPage from "./Orders/Orders";
import "semantic-ui-css/semantic.min.css";
import ListingPage from "./Listings/Listings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "../Provider/userCheck";
import ProductPage from "./Product/ProductPage";
import failurePage from "./Failure/failurePage";
import successPage from "./Success/successPage";
import UserCart from "./UserCart/UserCart";
import Sold from "./Sold/Sold";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard/add-item" component={AddItem} />
            <Route
              exact
              path="/dashboard/edit-item/:itemid"
              component={EditItem}
            />
            <Route exact path="/listing" component={ListingPage} />
            <Route exact path="/dashboard/orders" component={OrderPage} />
            <Route exact path="/dashboard/cart" component={UserCart} />
            <Route exact path="/product/:productid" component={ProductPage} />
            <Route exact path="/failure" component={failurePage} />
            <Route exact path="/success" component={successPage} />
            <Route exact path="/dashboard/sold" component={Sold} />
          </Switch>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}
export default App;
