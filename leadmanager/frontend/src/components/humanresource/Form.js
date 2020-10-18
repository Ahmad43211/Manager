import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addHumanresource } from '../../actions/hr';
 

export class Form extends Component {
  state = {
    number_of_employees: '',
    number_of_open_positions: '',
    time_to_hire: '',
    attrition:'',
    created_at: '',
  };

  static propTypes = {
    addHumanresource: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { number_of_employees, number_of_open_positions, time_to_hire, attrition, created_at } = this.state;
    const hr = { number_of_employees, number_of_open_positions, time_to_hire, attrition,  created_at };
    this.props.addHumanresource(hr);
    this.setState({
      number_of_employees: '',
      number_of_open_positions: '',
      time_to_hire: '',
      attrition: '',
      created_at: '',
    });
  };

  render() {
    const { number_of_employees, number_of_open_positions, time_to_hire, attrition,  created_at } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add HR</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>number_of_employees(s)</label>
            <input
              className="form-control"
              type="number"
              name="number_of_employees"
              onChange={this.onChange}
              value={number_of_employees}
            />
          </div>
          <div className="form-group">
            <label>number_of_open_positions</label>
            <input
              className="form-control"
              type="number"
              name="number_of_open_positions"
              onChange={this.onChange}
              value={number_of_open_positions}
            />
          </div>
          <div className="form-group">
            <label>time_to_hire(days)</label>
            <input
              className="form-control"
              type="number"
              name="time_to_hire"
              onChange={this.onChange}
              value={time_to_hire}
            />
          </div>
          <div className="form-group">
            <label>Attrition(%)</label>
            <input
              className="form-control"
              type="number"
              name="attrition"
              onChange={this.onChange}
              value={attrition}
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

export default connect(null, { addHumanresource })(Form);