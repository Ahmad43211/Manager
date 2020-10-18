import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarketings, deleteMarketing } from '../../actions/marketing';

//import { MemoryRouter } from 'react-router-dom';

export class Marketings extends Component {
  static propTypes = {
    marketings: PropTypes.array.isRequired,
    getMarketings: PropTypes.func.isRequired,
    deleteMarketing: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getMarketings();
  }
  
  render() {
    return (
      <Fragment>
        <h2>MARKETING ORDERED BY LATEST DATES</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Social_media_followers</th>
              <th>web_site_visitors</th>
              <th>website_to_lead_ratio(%)</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.marketings.map((marketing) => (
              <tr key={marketing.id}>
                <td>{marketing.social_media_followers}</td>
                <td>{marketing.website_visitors}</td>
                <td>{marketing.website_to_lead_ratio}</td>
                <td>{marketing.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteMarketing.bind(this, marketing.id)}
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
  marketings: state.marketings.marketings,
});

export default connect(mapStateToProps, { getMarketings, deleteMarketing })(Marketings);



