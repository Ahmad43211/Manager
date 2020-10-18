import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomers, deleteCustomer } from '../../actions/customer';

//import { MemoryRouter } from 'react-router-dom';

export class Customers extends Component {
  static propTypes = {
    customers: PropTypes.array.isRequired,
    getCustomers: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCustomers();
  }
  

  
  render() {
    return (
      <Fragment>
        <h2>CUSTOMERS FILTERED FOR DATES > 2019</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>net_promoter_score</th>
              <th>net_new_customers</th>
              <th>number_of_customers</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.net_promoter_score}</td>
                <td>{customer.net_new_customers}</td>
                <td>{customer.number_of_customers}</td>
                <td>{customer.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteCustomer.bind(this, customer.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});

export default connect(mapStateToProps, { getCustomers, deleteCustomer })(Customers);



