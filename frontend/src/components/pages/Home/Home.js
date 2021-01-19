import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../../products';
import Product from './Product/Product';

const Home = () => {
  return (
    <>
      <h1>Latest products list here </h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
          <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
