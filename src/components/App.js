import React from 'react';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem/AddItem';
import EditItem from './EditItem/EditItem';
import Footer from './Footer/Footer';
import Login from "./Auth/AuthPage"
import LoginComponent from './WorkableComponents/Login/Login';
import RegisterComponent from './Register/Register';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import orderPage from './Orders/Orders';
import 'semantic-ui-css/semantic.min.css';
import ListingPage from './Listings/Listings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProvider from '../Provider/userCheck';

function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard/add-item' component={AddItem} />
          <Route exact path='/dashboard/edit-item' component={EditItem} />
          <Route exact path='/listing' component={ListingPage} />
          <Route exact path='/orders' component={orderPage} />
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
    </>
  );
}
export default App;
