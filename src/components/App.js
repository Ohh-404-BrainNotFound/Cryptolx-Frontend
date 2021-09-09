import React from 'react';
import Navbar from './Navbar/Navbar';
import AddItem from './Add/AddItem'
import EditItem from './Edit/EditItem';
function App() {
  return (
    <h1>
      <Navbar />
      <AddItem />
      {/* <EditItem /> */}
    </h1>
  );
}
export default App;
