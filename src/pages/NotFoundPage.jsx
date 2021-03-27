import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/index';

const NotFoundPage = () => (
  <section className="page-not-found">
    <div className="content-block">
      <h1 className="page-not-found__title">Page not found</h1>
      <nav className="page-not-found__nav">
        <Link to="/catalog">
          <Button type='button' className='btn page-not-found__btn' name="Back to Catalog"/>
        </Link>
      </nav>
    </div>
    <h4 className="textError">404</h4>
  </section>
);

export default NotFoundPage;
