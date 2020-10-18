import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProductd } from '../../actions/productd';


export class Form extends Component {
  state = {
    development_frequency: '',
    estimation_accuracy: '',
    test_coverage: '',
    created_at: '',
  };

  static propTypes = {
    addProductd: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { development_frequency, estimation_accuracy, test_coverage, created_at } = this.state;
    const productd = { development_frequency, estimation_accuracy, test_coverage, created_at };
    this.props.addProductd(productd);
    this.setState({
      development_frequency: '',
      estimation_accuracy: '',
      test_coverage: '',
      created_at: '',
    });
  };

  render() {
    const { development_frequency, estimation_accuracy, test_coverage, created_at } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>development_frequency</label>
            <input
              className="form-control"
              type="number"
              name="development_frequency"
              onChange={this.onChange}
              value={development_frequency}
            />
          </div>
          <div className="form-group">
            <label>estimation_accuracy</label>
            <input
              className="form-control"
              type="number"
              name="estimation_accuracy"
              onChange={this.onChange}
              value={estimation_accuracy}
            />
          </div>
          <div className="form-group">
            <label>test_coverage(%)</label>
            <input
              className="form-control"
              type="number"
              name="test_coverage"
              onChange={this.onChange}
              value={test_coverage}
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

export default connect(null, { addProductd })(Form);