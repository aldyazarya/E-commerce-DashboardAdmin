import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/dashboard' ? 'active' : null}>
          <Link to="/dashboard">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={location.pathname === '/dashboard/addproduct' ? 'active' : null}>
          <Link to="/dashboard/addproduct">
            <i className="pe-7s-note2"></i>
            <p>Add Product</p>
          </Link>
        </li>
        <li className={this.isPathActive('/dashboard/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Components
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/dashboard/components/buttons') ? 'active' : null}>
                  <Link to="/dashboard/components/buttons">Buttons</Link>
                </li>
                <li className={this.isPathActive('/dashboard/components/grid') ? 'active' : null}>
                  <Link to="/dashboard/components/grid">Grid System</Link>
                </li>
                <li className={this.isPathActive('/dashboard/components/icons') ? 'active' : null}>
                  <Link to="/dashboard/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/dashboard/components/notifications') ? 'active' : null}>
                  <Link to="/dashboard/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/dashboard/components/panels') ? 'active' : null}>
                  <Link to="/dashboard/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/dashboard/components/sweetalert') ? 'active' : null}>
                  <Link to="/dashboard/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/dashboard/components/typography') ? 'active' : null}>
                  <Link to="/dashboard/components/typography">Typography</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/dashboard/addproduct') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Forms <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                
                <li className={this.isPathActive('/dashboard/addproduct') ? 'active' : null }>
                  <Link to="/dashboard/addproduct"> Add Product</Link>
                </li>

              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/dashboard/listproduct') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>List <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/dashboard/listproduct') ? 'active' : null}>
                  <Link to="/dashboard/listproduct">List Product</Link>
                </li>
                <li className={this.isPathActive('/dashboard/paymentconfirmation') ? 'active' : null}>
                  <Link to="/dashboard/paymentconfirmation">Payment Confirmation</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);