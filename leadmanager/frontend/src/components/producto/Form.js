import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProducto } from '../../actions/producto';


export class Form extends Component {
  state = {
    average_reaction_time: '',
    average_resolution_time: '',
    customer_escalations: '',
    availability:'',
    open_support_tickets:'',
    created_at: '',
  };

  static propTypes = {
    addProducto: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { average_reaction_time, average_resolution_time, customer_escalations, availability, open_support_tickets,created_at } = this.state;
    const producto = { average_reaction_time, average_resolution_time, customer_escalations, availability, open_support_tickets, created_at };
    this.props.addProducto(producto);
    this.setState({
      average_reaction_time: '',
      average_resolution_time: '',
      customer_escalations: '',
      availability: '',
      open_support_tickets: '',
      created_at: '',
    });
  };

  render() {
    const { average_reaction_time, average_resolution_time, customer_escalations, availability, open_support_tickets, created_at } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>average_reaction_time(s)</label>
            <input
              className="form-control"
              type="number"
              name="average_reaction_time"
              onChange={this.onChange}
              value={average_reaction_time}
            />
          </div>
          <div className="form-group">
            <label>average_resolution_time(s)</label>
            <input
              className="form-control"
              type="number"
              name="average_resolution_time"
              onChange={this.onChange}
              value={average_resolution_time}
            />
          </div>
          <div className="form-group">
            <label>customer_escalations</label>
            <input
              className="form-control"
              type="number"
              name="customer_escalations"
              onChange={this.onChange}
              value={customer_escalations}
            />
          </div>
          <div className="form-group">
            <label>Availability(%)</label>
            <input
              className="form-control"
              type="number"
              name="availability"
              onChange={this.onChange}
              value={availability}
            />
          </div>
          <div className="form-group">
            <label>open_support_tickets</label>
            <input
              className="form-control"
              type="number"
              name="open_support_tickets"
              onChange={this.onChange}
              value={open_support_tickets}
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

export default connect(null, { addProducto })(Form);