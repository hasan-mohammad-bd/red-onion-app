import { Route, Routes } from "react-router-dom";
import "./App.css";
import BreakfastPage from "./components/BreakFast/BrackfastPage/BreakfastPage";
import Breakfast from "./components/BreakFast/Breakfast";
import Dinner from "./components/Dinner/Dinner";
import DinnerPage from "./components/DinnerPage/DinnerPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Lunch from "./components/Lunch/Lunch";
import LunchPage from "./components/LunchPage/LunchPage";
import Order from "./components/Order/Order";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Products from "./components/Products/Products";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="breakfast" element={<BreakfastPage></BreakfastPage>}></Route>
          <Route path="" element={<LunchPage></LunchPage>}></Route>
          <Route path="dinner" element={<DinnerPage></DinnerPage>}></Route>
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
