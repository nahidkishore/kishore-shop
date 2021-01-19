import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <h1>Welcome to Shop Pro</h1>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
