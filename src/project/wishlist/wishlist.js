import React, { useState } from "react";
import {Card, Button, Col, Table, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./wishlist.css";


function Wishlist(props) {
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
 <p><h1>Wishlist:</h1></p>
 <Col xs={3}></Col>
 <Col md={{ span: 6, offset: 3 }}>
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Item description</th>
    </tr>
  </thead>
  <tbody>
    <tr>

    </tr>
  </tbody>
</Table>
</Col>

<Col xs={3}></Col>

{/* {{clientName ${you have items on your wishlist!}} */}
</div>
);
}
export default Wishlist;