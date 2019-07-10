import React from 'react'
import {Route} from 'react-router-dom'
import listProduct from './listProduct'
import paymentConfirmation from './paymentConfirmation'



const List = ({match}) => {
    // eslint-disable-next-line no-unused-expressions
    <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/listproduct`} component={listProduct} />
      <Route path={`${match.url}/paymentconfirmation`} component={paymentConfirmation} />
    </div>
  </div>
};

export default List;