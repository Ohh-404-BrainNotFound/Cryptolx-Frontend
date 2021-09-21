import React from 'react';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem/AddItem';
import EditItem from './EditItem/EditItem';
import Footer from './Footer/Footer';
import LoginComponent from './Login/Login';
import RegisterComponent from './Register/Register';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import ListingPage from './Listings/Listings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/sign-up' component={RegisterComponent} />
          <Route path='/dashboard/add-item' component={AddItem} />
          <Route path='/dashboard/edit-item' component={EditItem} />
          <Route path='/listing' component={ListingPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
