import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import ProductDetails from './components/pages/Home/Product/ProductDetails';
import Cart from './components/pages/Cart/Cart';
import Login from './components/pages/Login/Login';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
       <Route path='/login'>
         <Login></Login>

       </Route>
        
         <Route path="/product/:id">
           <ProductDetails></ProductDetails>
         </Route>
         
         <Route path="/cart/:id?"> 
           <Cart></Cart>
         </Route>
         <Route exact path="/" >
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