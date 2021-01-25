import Footer from './components/pages/Home/Footer/Footer';
import Header from './components/pages/Home/Header/Header';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductDetails from './components/pages/Home/Product/ProductDetails';

import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/shipping'>
            <ShippingScreen></ShippingScreen>
          </Route>
          <Route path='/payment'>
            <PaymentScreen></PaymentScreen>
          </Route>
          <Route path='/placeorder'>
            <PlaceOrderScreen></PlaceOrderScreen>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/profile'>
            <ProfileScreen></ProfileScreen>
          </Route>

          <Route path='/product/:id'>
            <ProductDetails></ProductDetails>
          </Route>

          <Route path='/cart/:id?'>
            <CartScreen></CartScreen>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
// "/cart/:id?" eitar question(?) mane cart component is optional, normally cart section e jaoya jabe,abar id number soho kono item add koreo jaoya jabe
