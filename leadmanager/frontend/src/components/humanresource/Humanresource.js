import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHumanresources, deleteHumanresource } from '../../actions/hr';

//import { MemoryRouter } from 'react-router-dom';

export class Humanresources extends Component {
  static propTypes = {
    humanresources: PropTypes.array.isRequired,
    getHumanresources: PropTypes.func.isRequired,
    deleteHumanresource: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getHumanresources();
  }
  

  render() {
    return (
      <Fragment>
        <h2>HUMANRESOURCES</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>number_of_employees</th>
              <th>number_of_open_positions</th>
              <th>time_to_hire(days)</th>
              <th>attrition(%)</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.humanresources.map((hr) => (
              <tr key={hr.id}>
                <td>{hr.number_of_employees}</td>
                <td>{hr.number_of_open_positions}</td>
                <td>{hr.time_to_hire}</td>
                <td>{hr.attrition}</td>
                <td>{hr.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteHumanresource.bind(this, hr.id)}
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
  humanresources: state.humanresources.humanresources,
});

export default connect(mapStateToProps, { getHumanresources, deleteHumanresource })(Humanresources);



