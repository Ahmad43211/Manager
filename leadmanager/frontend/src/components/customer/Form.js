import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCustomer } from '../../actions/customer';




export class Form extends Component {
  state = {
    net_promoter_score: '',
    net_new_customers: '',
    number_of_customers: '',
    created_at: '',
  };

  static propTypes = {
    addCustomer: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { net_promoter_score, net_new_customers, number_of_customers, created_at } = this.state;
    const customer = { net_promoter_score, net_new_customers, number_of_customers, created_at };
    this.props.addCustomer(customer);
    this.setState({
      net_promoter_score: '',
      net_new_customers: '',
      number_of_customers: '',
      created_at: '',
    });
  };

  render() {
    const { net_promoter_score, net_new_customers, number_of_customers, created_at } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Customer</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>net_promoter_score</label>
            <input
              className="form-control"
              type="number"
              name="net_promoter_score"
              onChange={this.onChange}
              value={net_promoter_score}
            />
          </div>
          <div className="form-group">
            <label>net_new_customers</label>
            <input
              className="form-control"
              type="number"
              name="net_new_customers"
              onChange={this.onChange}
              value={net_new_customers}
            />
          </div>
          <div className="form-group">
            <label>number_of_customers</label>
            <input
              className="form-control"
              type="number"
              name="number_of_customers"
              onChange={this.onChange}
              value={number_of_customers}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              className="form-control"
              type="date"
              name="created_at"
              onChange={this.onChange}
              value={created_at}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCustomer })(Form);