import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProfitl } from '../../actions/profitl';



export class Form extends Component {
  state = {
    software_revenue: '',
    other_revenue: '',
    professional_service_revenue: '',
    created_at: '',
  };

  static propTypes = {
    addProfitl: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { software_revenue, other_revenue, professional_service_revenue, created_at } = this.state;
    const profitl = { software_revenue, other_revenue, professional_service_revenue, created_at };
    this.props.addProfitl(profitl);
    this.setState({
      software_revenue: '',
      other_revenue: '',
      professional_service_revenue: '',
      created_at: '',
    });
  };

  render() {
    const { software_revenue, other_revenue, professional_service_revenue, created_at } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Profit</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>software_revenue</label>
            <input
              className="form-control"
              type="number"
              name="software_revenue"
              onChange={this.onChange}
              value={software_revenue}
            />
          </div>
          <div className="form-group">
            <label>other_revenue</label>
            <input
              className="form-control"
              type="number"
              name="other_revenue"
              onChange={this.onChange}
              value={other_revenue}
            />
          </div>
          <div className="form-group">
            <label>professional_service_revenue</label>
            <input
              className="form-control"
              type="number"
              name="professional_service_revenue"
              onChange={this.onChange}
              value={professional_service_revenue}
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

export default connect(null, { addProfitl })(Form);