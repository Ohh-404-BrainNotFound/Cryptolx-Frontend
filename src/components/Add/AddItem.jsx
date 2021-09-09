import React from 'react';
import { Menu, Dropdown, Form, Button, Icon } from 'semantic-ui-react';
import './AddItem.scss';
function AddItem() {
  return (
    <div>
        <h1 class="title" >Add Item       <span style={{color: 'maroon', paddingLeft: '30px'}}>></span></h1>
        <div class="form">
        <form class="ui form">
            <div class="field">
                <label style={{color: "grey", font:"Gill Sans-Light"}}>Product Name</label>
                <input type="text" name="product-name" />
            </div>
            <div class="field">
                <label style={{color: "grey", font:"Gill Sans-Light"}}>Product Price Ξ</label>
                <input type="text" name="product-price" />
            </div>
            <div class="field">
                <label style={{color: "grey", font:"Gill Sans - Light"}}>Product Detail</label>
                <textarea></textarea>
            </div>

            <div class="uploadTop">
            <button class="ui button" type="images" style={{backgroundColor: 'maroon', color: 'white', font:"Gill Sans - Light"}}>Upload Images</button>
            </div>
            <h5>_____________________</h5>
            <div class="submitTop">
                <button class="ui button" type="submit" style={{backgroundColor: 'orange', color: 'white', font:"Gill Sans - Light"}}>Submit</button>
            </div>
        </form>
        </div>
    </div>
  );
}

export default AddItem;
