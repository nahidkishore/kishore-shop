import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import { listProducts } from '../../../actions/productActions';
import Loading from '../LoadingAndMessage/Loader';
import Message from '../LoadingAndMessage/Message';
import { useParams } from 'react-router-dom';
import Paginate from '../Paginate/Paginate';

const Home = () => {
  const { keyword, pageNumber } = useParams();
  const pageNumberParam = pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumberParam));
  }, [dispatch, keyword, pageNumberParam]);

  return (
    <>
      <h1>Latest products list here </h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='mb-4'>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-2">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          ></Paginate>
        </>
      )}
    </>
  );
};

export default Home;
