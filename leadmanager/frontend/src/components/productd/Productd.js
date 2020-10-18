import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductds, deleteProductd } from '../../actions/productd';

//import { MemoryRouter } from 'react-router-dom';

export class Productds extends Component {
  static propTypes = {
    productds: PropTypes.array.isRequired,
    getProductds: PropTypes.func.isRequired,
    deleteProductd: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProductds();
  }
  

 
  render() {
    return (
      <Fragment>
        <h2>EXTRACTING LATEST 5 ENTRIES</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>development_frequency</th>
              <th>Estimation_accuracy(%)</th>
              <th>Test_coverage(%)</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.productds.map((productd) => (
              <tr key={productd.id}>
                <td>{productd.development_frequency}</td>
                <td>{productd.estimation_accuracy}</td>
                <td>{productd.test_coverage}</td>
                <td>{productd.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteProductd.bind(this, productd.id)}
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
  productds: state.productds.productds,
});

export default connect(mapStateToProps, { getProductds, deleteProductd })(Productds);


