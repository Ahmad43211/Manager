import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfitls, deleteProfitl } from '../../actions/profitl';

//import { MemoryRouter } from 'react-router-dom';

export class Profitls extends Component {
  static propTypes = {
    profitls: PropTypes.array.isRequired,
    getProfitls: PropTypes.func.isRequired,
    deleteProfitl: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProfitls();
  }
  

  render() {
    return (
      <Fragment>
        <h2>PROFIT ORDERED BY SUMMATION OF REVENUES</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>software_revenue(€)</th>
              <th>other_revenue(€)</th>
              <th>professional_service_revenue(€)</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.profitls.map((profitl) => (
              <tr key={profitl.id}>
                <td>{profitl.software_revenue}</td>
                <td>{profitl.other_revenue}</td>
                <td>{profitl.professional_service_revenue}</td>
                <td>{profitl.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteProfitl.bind(this, profitl.id)}
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
  profitls: state.profitls.profitls,
});

export default connect(mapStateToProps, { getProfitls, deleteProfitl })(Profitls);



