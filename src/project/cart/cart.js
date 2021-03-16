import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Col, Table, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./cart.css";
// import { PayPalButton } from "react-paypal-button-v2";
// import payPage from "payPage";


// function TotalPrice(){

// }

function Cart(props) {
  let [items, setItems] = useState([]);
  let initialSum = 0;
  for (let item of items) {
    initialSum += parseInt(item.price);
  }
  let [sum, setsum] = useState(initialSum);

  const RemoveItem = (id) => {
    setItems(prod.filter((item) => item.id != id));
    for (let item of items) {
      if (item.id == id) {
        setsum(initialSum - item.price);
      }
    }
  };

  // function emptyCart(){
  //   try{
  //     const res = await fetch("http://localhost:3000/cart/empty-cart", {
  //       method: "DELETE", 
  //     });
  //     await res.json();
  //     fetchCart();
  //     props.history.push("/");
  //   } catch (err){
  //     console.log(ERROR);
  //   }
  // }


  // userPurches(props){
  //   const date = props.item.date;
  //  return<>
  //  <tr>
  //    <td>
  //      {props.item.items}
  //    </td>
  //    </tr>
  //    </> 
  // }
  // const transitionSuccess = () => {
    
  //   let variables = {
  //     cartDetail: props.user.cartDetail, paymentData: data
  //   }
  //   axios.post(/.path???, variables).then(response => {
  //     if (Response.data.success) {

  //     } else {
  //       alert("Purches faild")
  //     }
  //   })

  // } 

  // const transactionError = () => {
  //   console.log('Payment rejected')
  // }

  // const transactionCancel = () => {
  //   console.log("Transaction canceled")
  // }

  return (
    <div>
      <p>
        <h1>Cart:</h1>
      </p>
      <Col xs={3}></Col>
      <Col md={{ span: 6, offset: 3 }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Item image</th>
              <th>Item Name</th>
              <th>Item description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {/* {props.item.map((element. index) =>{
              return <userPurches.item = {element} key = {index}/>
            })} */}
          </tbody>
        </Table>
        <Button onClick={(e)=> emptyCart()} style={{backgroundColor:"gray", color:"black", borderStyle:"solid", borderWidth:"2px"}}>Empty cart</Button>
        {/* <PayPalButton></PayPalButton> */}

{/* paypal button
<payPage 
toPay = {Total}
onSuccess = {transitionSuccess}
transactionError = {transactionError}
transactionCanceled = {transactionCancel}
/> */}

      </Col>

      <Col xs={3}></Col>

      {/* {clientName ${'thank you for buying!'}} */}
    </div>
  );
}
export default Cart;

// let cartitems = [];
// if (props.user.userdata && props.user.userdata.cart){
//   if )props.user.userdata.cart.length > 0) {
//     props.user.userdata.cart.forEach(item => {
//       cartitems.push(item.id)
//     });
//     axios
//   }
// }
