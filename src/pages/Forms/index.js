import React from 'react';
import { Route } from 'react-router-dom';

import addProduct from './addproduct'

const Forms = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/addproduct`} component={addProduct} />
    </div>
  </div>
);

export default Forms;