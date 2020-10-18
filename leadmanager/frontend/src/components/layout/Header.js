import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <Link to="/login" className="nav-link">
          
          <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
            Logout
          </button>
          </Link>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <NavLink to="/marketing" className="navbar-brand">
            MARKETING
          </NavLink>

          <NavLink to="/customer" className="navbar-brand">
              CUSTOMERS
          </NavLink>

          <NavLink to="/productd" className="navbar-brand">
          PRODUCT DEVELOPMENT
          </NavLink>

          <NavLink to="/producto" className="navbar-brand">
          PRODUCT OPERATIONS
          </NavLink>

          <NavLink to="/hr" className="navbar-brand">
          HR
          </NavLink>

          <NavLink to="/profitl" className="navbar-brand">
          PROFIT & LOSS STATEMENT
          </NavLink>


                            
          
            
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
