import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <h1>Welcome to Shop Pro</h1>
          <Home></Home>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
