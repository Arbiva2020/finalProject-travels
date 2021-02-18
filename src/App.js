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
import WeAreHiring from "./project/weAreHiring/weAreHiring";
import MailMe from "./project/mailMe/mailMe";
import FromTheMedia from "./project/fromTheMedia/fromTheMedia";
import BlogB from "./project/blogB/blogB";
import Blog from "./project/blog/blog";
import OrderPage from "./project/orderPage/orderPage";
import Cart from "./project/cart/cart";
import LogIn from "./project/logIn/logIn";
import CerateAccount from "./project/createAccount/createAccount";
import LinkMe from "./project/linkMe/linkMe";
import Img from "./images/thenorthwest.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgA from "../src/images/thenorthwest.jpg";
import imgB from "../src/images/image.jpg";
import imgC from "../src/images/Eilat.jpg";
import imgD from "../src/images/lisr5a-explore-historic-israel-hero-1800x1000.jpg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test_1 from "./project/test_1/test_1";


function App() {


  const products =[
    
    {
    name: "SEA OF GALILEE", 
    description: "The Sea of Galilee is situated in northeast Israel, between the Golan Heights and the Galilee region, in the Jordan Rift Valley, the valley caused by the separation of the African and Arabian plates.",
    days: "5 days, 4 nights.",
    price: 2500,
    attractions: "Jorden Kiacks",
    rating: 2,
    img: imgA
  },  {
    name: "Eilat", 
    description: "Eilat is part of the Southern Negev Desert, at the southern end of the Arabah, adjacent to the Egyptian village of Taba to the south, the Jordanian port city of Aqaba to the east, and within sight of Haql, Saudi Arabia, across the gulf to the southeast.",
    days: "4 days, 3 nights.",
    price: 3000,
    attractions: "Coral reef",
    rating: 4,
    img: imgC
  },   {
    name: "Golan Hights", 
    description: "The Golan Hights, or simply the Golan, is a region in the Levant, spanning about 1,800 square kilometers (690 sq mi).",
    days: "5 days, 4 nights.",
    price: 2700,
    attractions: "Banias",
    rating: 3,
    img: imgB
  },  {
  name: "Jerusalem", 
  description: "The Sea of Galilee is situated in northeast Israel, between the Golan Heights and the Galilee region, in the Jordan Rift Valley, the valley caused by the separation of the African and Arabian plates.",
  days: "5 days, 4 nights.",
  price: 2500,
  attractions: "Jorden Kiacks",
  rating: 2,
  img: imgD
}]

  // const items = [
//     {
//       Item: "2 pl tent",
//       description: "High quality tent for two people"
//       price (NIS): 250,
//       avaliability: "true/false"
//       img: null,
//     },
//     {
//       name: "Pocket knife",
//       description: "strong and reliable, a must have!"
//       price (NIS): 300,
//       avaliability: "true/false"
//       img: null,
//     },
//   ];

  return (
    <div className="App">
      <div id="content">
      
      <BrowserRouter>
      <Header />
      <Switch>
      <Route path='/' exact component = {HomePage}/>
      <Route path='/about' exact component = {About}/>
      <Route path='/productPage' exact component ={()=><ProductPage product ={products[0]}/>} />
      <Route exact path="/siteCard" component={() => <SiteCard products={products} />}/>
      <Route path='/contactUs' exact component = {ContactUs}/>
      <Route path='/accessibleTrips' exact component = {AccessibleTrips}/>
      <Route path='/organized' exact component = {Organized}/>
      <Route path='/gallery' exact component = {Gallery}/>
      <Route path='/store' exact component = {Store}/>
      <Route path='/weAreHiring' exact component = {WeAreHiring}/>
      <Route path='/mailMe' exact component = {MailMe}/>
      <Route path='/fromTheMedia' exact component = {FromTheMedia}/>
      <Route path='/blog' exact component = {Blog}/>
      <Route path='/blogB' exact component = {BlogB}/>
      <Route path='/orderPage' exact component = {OrderPage}/>
      <Route path='/cart' exact component = {Cart}/>
      <Route path='/logIn' exact component = {LogIn}/>
      <Route path='/createAccount' exact component = {CerateAccount}/>
      <Route path='/linkMe' exact component = {LinkMe}/>
      <Route path='/test_1' exact component = {Test_1}/>
      {/* <Route path='/orderPage' exact component = {OrderPage}/>
      <Route path='/' exact component = {}/> */}
      {/* <HomePage /> */}
      {/* {<ProductPage product={product} />} */}
      {/* <SiteCard products = {products}/> */}
      {/* <img src={Img} /> */}
      {/* <About /> */}
      </Switch>
      </BrowserRouter>
      <Footer />
       </div>
    </div>
  );
}

export default App;


