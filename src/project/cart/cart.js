import React from "react";
import {Card, Button, Col, Table, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./cart.css";


function Cart(props) {
    let [items, setItems] = useState(props.items);
    let initialSum = 0;
    for (let item of items){
        initialSum += parseInt(item.price);
    }
    let [sum, setsum] = useState(initialSum);
    
    const RemoveItem = (id) =>{
        setItems(prod.filter(item => item.id != id));
        for(let item of items){
            if(item.id == id){
                setsum(initialSum-item.price);
            }
        }
    };

return(
<div>
 <p><h1>Cart:</h1></p>
 <Col xs={3}></Col>
 <Col md={{ span: 6, offset: 3 }}>
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</Table>
</Col>

<Col xs={3}></Col>

{/* {clientName ${'thank you for buying!'}} */}
</div>
);
}
export default Cart;