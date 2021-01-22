import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Product from './Product/Product';
import {listProducts} from '../../../actions/productActions'
const Home = () => {
const dispatch=useDispatch()
const productList =useSelector(state=>state.productList)
const {loading,error,products}=productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
  
  return (
    <>
      <h1>Latest products list here </h1>
      {loading?<h2>Loading... </h2>:error? <h3>{error}</h3>:   <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>}
   
    </>
  );
};

export default Home;
