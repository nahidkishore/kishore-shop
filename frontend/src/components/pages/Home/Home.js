import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import { listProducts } from '../../../actions/productActions';
import Loading from '../LoadingAndMessage/Loader';
import Message from '../LoadingAndMessage/Message';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest products list here </h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
