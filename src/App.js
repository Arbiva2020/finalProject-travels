import Header from "./project/header/header";
import Footer from "./project/footer/footer";
import ProductPage from "./project/productPage/productPage";
import SiteCard from "./project/siteCard/siteCard";
import About from "./project/about/about";
import HomePage from "./project/homePage/homePage";
import ContactUs from "./project/contactUs/contactUs";
import AccessibleTrips from "./project/accessibleTrips/accessibleTrips";
import Organized from "./project/organized/organized";
import Gallery from "./project/gallery/gallery";
import Store from "./project/store/store";
import SingleItem from "./project/singleItem/singleItem";
import WeAreHiring from "./project/weAreHiring/weAreHiring";
import MailMe from "./project/mailMe/mailMe";
import FromTheMedia from "./project/fromTheMedia/fromTheMedia";
import BlogB from "./project/blogMain/blogB";
import BlogSingle from "./project/blogSingle/blogSingle";
import OrderPage from "./project/orderPage/orderPage";
import Cart from "./project/cart/cart";
import LogIn from "./project/logIn/logIn";
import CerateAccount from "./project/createAccount/createAccount";
import LinkMe from "./project/linkMe/linkMe";
import ReviewsAndRatings from "./project/reviewsAndRatings/reviewsAndRatings";
import AddReview from "./project/addReview/addReview";
import ForgotPass from "./project/forgotPass/forgotPass";
import OrdersTable from "./project/ordersTable/ordersTable";
import Img from "./images/thenorthwest.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgA from "./images/thenorthwest.jpg";
import imgB from "./images/image.jpg";
import imgC from "./images/Eilat.jpg";
import imgD from "./images/lisr5a-explore-historic-israel-hero-1800x1000.jpg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import sandals from "./images/shoresh.jpg";
import TentFor2 from "./images/greenTent1.jpg";
import PocketKnife from "./images/59931.jpg";
import Sandals from "./images/shoresh.jpg";
import Hammock from "./images/367266.jpg";
import Shoe from "./images/zephyr-coyote.jpg";
import Coffee from "./images/64072_0_1.jpg";
import TentImg1 from "./images/greenTent1.jpg";
import TentImg2 from "./images/greenTent2.jpg";
import { useState } from "react";
import { lastDayOfWeek } from "date-fns";
// import * as api from './api';

function App() {
  const products = [
    {
      name: "SEA OF GALILEE",
      description:
        "The Sea of Galilee is situated in northeast Israel, between the Golan Heights and the Galilee region, in the Jordan Rift Valley, the valley caused by the separation of the African and Arabian plates.",
      days: "5 days, 4 nights.",
      price: 2500,
      attractions: "Jorden Kiacks",
      rating: 2,
      img: imgA,
      region: "north",
      keyWords: "kids, leak",
    },
    {
      name: "Eilat",
      description:
        "Eilat is part of the Southern Negev Desert, at the southern end of the Arabah, adjacent to the Egyptian village of Taba to the south, the Jordanian port city of Aqaba to the east, and within sight of Haql, Saudi Arabia, across the gulf to the southeast.",
      days: "4 days, 3 nights.",
      price: 3000,
      attractions: "Coral reef",
      rating: 4,
      img: imgC,
      region: "south",
      keyWords: "kids, sea, attractions",
    },
    {
      name: "Golan Hights",
      description:
        "The Golan Hights, or simply the Golan, is a region in the Levant, spanning about 1,800 square kilometers (690 sq mi).",
      days: "5 days, 4 nights.",
      price: 2700,
      attractions: "Banias",
      rating: 3,
      img: imgB,
      region: "north",
      keyWords: "kids, leak, hiking",
    },
    {
      name: "Jerusalem",
      description:
        "The Sea of Galilee is situated in northeast Israel, between the Golan Heights and the Galilee region, in the Jordan Rift Valley, the valley caused by the separation of the African and Arabian plates.",
      days: "5 days, 4 nights.",
      price: 2500,
      attractions: "Jorden Kiacks",
      rating: 2,
      img: imgD,
      region: "east",
      keyWords: "kids, religion, archeology",
    },
  ];

  const items = [
    {
      id: "111111",
      name: "2 pl tent",
      description: "High quality tent for two people",
      price: 250,
      avaliability: "Available",
      img: TentFor2,
      category: "Tents",
      categoryB: "camping",
      tentImg1: TentImg1,
      tentImg2: TentImg2,
    },
    {
      id: "222222",
      name: "Pocket knife",
      description: "strong and reliable, a must have!",
      price: 300,
      avaliability: "Available",
      img: PocketKnife,
      category: "Knives",
      categoryB: "camping",
    },
    {
      id: "333333",
      name: "Shoresh sandals",
      description: "the most convenient sandals for long walks",
      price: 270,
      avaliability: "Available",
      img: Sandals,
      category: "Showes",
      categoryB: "camping",
    },
    {
      id: "444444",
      name: "Hammock",
      description: "High quality fabric, ideal for a day out",
      price: 400,
      avaliability: "Available",
      img: Hammock,
      category: "Leasure",
      categoryB: "camping",
    },
    {
      id: "555555",
      name: "Hiking showes",
      description: "Stabel, flexible sole, greate for hiking everywhere",
      price: 500,
      avaliability: "Out of stock ",
      img: Shoe,
      category: "Showes",
      categoryB: "hiking",
    },
    {
      id: "666666",
      name: "Coffee kit",
      description: "Convenient, compact and light weighted",
      price: 200,
      avaliability: "Available",
      img: Coffee,
      category: "Leasure",
      categoryB: "camping",
    },
  ];

  const orders = [
    {
      OrderID: 111111,
      ProductsID: 222222,
      Products: ["Pocket knife", "Hammock"],
      Quantity: [1, 1],
      Price: 50,
      CustomerID: 333333,
      Date: new Date(),
    },
    {
      OrderID: 444444,
      ProductsID: 555555,
      Products: ["2 pl tent", "Coffee kit"],
      Quantity: [2, 1],
      Price: 100,
      CustomerID: 6666666,
      Date: new Date(),
    },
  ];

  const [gear, setGear] = useState(items[0]);
  const [id, setId] = useState();

  return (
    <div className="App">
      {/* <img src={shoresh} /> */}
      <div id="content">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route
              path="/productPage"
              exact
              component={() => <ProductPage product={products[0]} />}
            />
            <Route
              exact
              path="/siteCard"
              component={() => <SiteCard products={products} />}
            />
            <Route path="/contactUs" exact component={ContactUs} />
            <Route path="/accessibleTrips" exact component={AccessibleTrips} />
            <Route path="/organized" exact component={Organized} />
            <Route path="/gallery" exact component={Gallery} />
            <Route
              exact
              path="/store/:filter"
              component={() => <Store items={items} />}
            />
            <Route
              exact
              path="/store"
              component={() => (
                <Store
                  toSingleItem={(id) => {
                    setId(id);
                  }}
                  items={items}
                />
              )}
            />
            <Route
              path="/singleItem/:id"
              exact
              component={() => <SingleItem item={id} />}
            />
            <Route path="/weAreHiring" exact component={WeAreHiring} />
            <Route path="/mailMe" exact component={MailMe} />
            <Route path="/fromTheMedia" exact component={FromTheMedia} />
            <Route path="/blogSingle" exact component={BlogSingle} />
            <Route path="/blogB" exact component={BlogB} />
            <Route path="/orderPage" exact component={OrderPage} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/createAccount" exact component={CerateAccount} />
            <Route path="/linkMe" exact component={LinkMe} />
            <Route
              path="/reviewsAndRatings"
              exact
              component={ReviewsAndRatings}
            />
            <Route path="/addReview" exact component={AddReview} />
            <Route
              path="/ordersTable"
              exact
              component={() => <OrdersTable order={orders} />}
            />
            <Route path="/forgotPass" exact component={ForgotPass} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
