import React from 'react';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem/AddItem';
import EditItem from './EditItem/EditItem';
import Footer from './Footer/Footer';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/dashboard/add-item' component={AddItem} />
          <Route path='/dashboard/edit-item' component={EditItem} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
