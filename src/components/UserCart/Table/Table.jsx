import React  from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TableComponent = (props) => {

console.log(props);
    return(
        <div>
      <Table celled >
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
                    <Table.Cell>
                        {element.name}
                    </Table.Cell>
                    <Table.Cell>
                        {element.price}
                    </Table.Cell>
                    <Table.Cell>
                <Button
                  icon="trash"
                  color="red"
                  onClick={() => props.deleteItem(element.id)}
                />
                </Table.Cell>
                <Table.Cell>
                <Link to={`/product/${element.id}`}>
                 <Button
                  icon="eye"
                  color="blue"
                />
                    </Link>
              </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
    )
}

export default TableComponent;

