import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import cx from 'classnames';
import {Link} from 'react-router-dom'


class UserInfo extends Component {

  state = {
    isShowingUserMenu: false
  };

  render() {
    // let { user } = this.props;
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src="https://media.licdn.com/dms/image/C5103AQEeQSdpqrClBA/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=rE77SuhRzq0DlOChL412Kt1YDYgeWdfe-PMR8UqZBGA" alt="profileimage" className="photo" />
          <div className="userinfo">
            <div className="username">
              Aldy Azarya
            </div>
            <div className="title">Admin</div>
          </div>
          <span
            onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}
            className={cx("pe-7s-angle-down collapse-arrow", {
              active: isShowingUserMenu
            })}></span>
        </div>
        <Collapse in={isShowingUserMenu}>
          <ul className="nav user-nav">
            <li>
              <Link to="/dashboard/profile/myprofile">
                <p>My Profile</p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile/editprofile">
                <p>Edit Profile</p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile/themeoptions">
                <p>Theme Options</p>
              </Link>
            </li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.Auth.user
// });

export default UserInfo;