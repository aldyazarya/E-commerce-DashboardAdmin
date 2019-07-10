import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';


import Dashboard from '../Dashboard';
import Components from '../Components';
import UserProfile from '../UserProfile';
import ProfileForm from '../UserProfile/ProfileForm'
import UserInfo from '../UserProfile/UserInfo'
// import MapsPage from '../MapsPage';
import Forms from '../Forms';
import List from '../List'

import addproduct from '../Forms/addproduct'
import listProduct from '../List/listProduct'
import paymentConfirmation from '../List/paymentConfirmation'







const Main =  ({
  mobileNavVisibility,
  hideMobileMenu,
  history,
  match
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
          {/* <Route exact path="/" component={Login}/> */}
        <div className="close-layer" onClick={hideMobileMenu}></div>
        <SideBar />

        <div className="main-panel">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/components" component={Components} />
          {/* <Route path="/dashboard/profile" component={UserProfile} /> */}
          <Route path="/dashboard/editprofile" component={ProfileForm} />
          <Route path="/dashboard/myprofile" component={UserInfo} />
          <Route path="/dashboard/themeoptions" component={ThemeOptions} />
          <Route path="/dashboard/addproduct" component={addproduct} />
          <Route path="/dashboard/listproduct" component={listProduct} />
          <Route path="/dashboard/paymentconfirmation" component={paymentConfirmation} />

          <Footer />
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));