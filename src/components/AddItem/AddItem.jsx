import React from 'react';
import { useState } from 'react';
import {
  Menu,
  Dropdown,
  Form,
  Button,
  Icon,
  Header,
  Divider,
  Container,
} from 'semantic-ui-react';
import './AddItem.scss';
import addItem from '../../Provider/addItem';
function AddItem() {
  const [itemName, setitemName] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  return (
    <Container>
      <Header style={{ marginLeft: '50px' }}> Add item </Header>
      <Form>
        <Form.Field>
          <label style={{ color: 'grey', font: 'Gill Sans-Light' }}>
            Product Name
          </label>
          <input
            type='text'
            name='product-name'
            value={itemName}
            onChange={(e) => {
              setitemName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ color: 'grey', font: 'Gill Sans-Light' }}>
            Product Price Ξ
          </label>
          <input
            type='text'
            name='product-price'
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Field>
        <Button
          type='images'
          content='Upload Images'
          style={{
            backgroundColor: 'maroon',
            color: 'white',
            font: 'Gill Sans - Light',
          }}
          onClick={(e) => {
            setImages(e.target.value);
          }}
        />
        <Divider />
        <Button
          type='submit'
          style={{
            backgroundColor: 'orange',
            color: 'white',
            font: 'Gill Sans - Light',
          }}
          onClick={() => {
            addItem({
              name: itemName,
              price: price,
              images: images,
            });
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddItem;
