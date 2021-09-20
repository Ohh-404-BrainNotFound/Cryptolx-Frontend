import React from 'react';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem/AddItem';
import EditItem from './EditItem/EditItem';
import Footer from './Footer/Footer';
// import LoginComponent from './Login/Login';
// import RegisterComponent from './Register/Register';
// import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' component={Home} /> */}
          {/* <Route path='/login' component={LoginComponent} /> */}
          {/* <Route path='/sign-up' component={RegisterComponent} /> */}
          <Route path='/dashboard/add-item' component={AddItem} />
          <Route path='/dashboard/edit-item' component={EditItem} />
        </Switch>
        <Dashboard />
        <Footer />
      </Router>
    </>
  );
}
export default App;
