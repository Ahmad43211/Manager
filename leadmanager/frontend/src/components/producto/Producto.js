import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos, deleteProducto } from '../../actions/producto';

//import { MemoryRouter } from 'react-router-dom';

export class Productos extends Component {
  static propTypes = {
    productos: PropTypes.array.isRequired,
    getProductos: PropTypes.func.isRequired,
    deleteProducto: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProductos();
  }
  

  render() {
    return (
      <Fragment>
        <h2>PRRODUCTS ORDERED BY LATEST DATES</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th> average_reaction_time(s)</th>
              <th> average_resolution_time(s)</th>
              <th>customer_escalations</th>
              <th>availability(%)</th>
              <th>open_support_tickets</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.average_reaction_time}</td>
                <td>{producto.average_resolution_time}</td>
                <td>{producto.customer_escalations}</td>
                <td>{producto.availability}</td>
                <td>{producto.open_support_tickets}</td>
                <td>{producto.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteProducto.bind(this, producto.id)}
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
  productos: state.productos.productos,
});

export default connect(mapStateToProps, { getProductos, deleteProducto })(Productos);


