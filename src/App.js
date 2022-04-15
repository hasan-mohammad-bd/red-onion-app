import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './components/BreakFast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
import Order from './components/Order/Order';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Products from './components/Products/Products';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/products" element={<Products></Products>}>
            <Route path="/products/breakfast" element={<Breakfast></Breakfast>}></Route>
            <Route path="/products/lunch" element={<Lunch></Lunch>}></Route>
            <Route path="/products/dinner" element={<Dinner></Dinner>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
