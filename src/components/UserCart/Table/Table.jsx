import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getEthPrice } from "../../../Services/generalServices";


const TableComponent = (props) => {
  const [ethPrice, setEthPrice] = useState(0);
  const getPrice = async () => {
    let price = await getEthPrice();
    setEthPrice(price)
  }

  useEffect(() => {
    getPrice()
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>View</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.info.map((element, index) => (
            <Table.Row>
              <Table.Cell>{element.name}</Table.Cell>
              <Table.Cell>{parseFloat(element.price / ethPrice).toPrecision(6) }</Table.Cell>
              <Table.Cell>
                <Button
                  icon="trash"
                  color="red"
                  onClick={() => {
                    return props.deleteItem(element.productDocId);
                  }}
                />
              </Table.Cell>
              <Table.Cell>
                <Link to={`/product/${element.id}`}>
                  <Button icon="eye" color="blue" />
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableComponent;
