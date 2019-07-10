import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import cookies from 'universal-cookie'
import {onLogout} from '../../action'

// const cookie = new cookies()

class Header extends Component {
  render(){
    return (
      <div>
        <Navbar fluid={true}>
      <Navbar.Header>
        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </Navbar.Header>

      <Navbar.Collapse>

        <div className="separator"></div>
        <Navbar.Form pullLeft>
          <FormGroup>
            <span className="input-group-addon"><i className="fa fa-search"></i></span>
            <FormControl type="text" placeholder="Type to search" />
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem>
            <Link to='/'>
            <p onClick={this.props.onLogout}>Logout</p>

            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </div>
    )
  }
}


const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(mapDispatchToProp, {onLogout})(Header);