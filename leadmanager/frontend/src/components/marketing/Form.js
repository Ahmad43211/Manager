import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMarketing } from '../../actions/marketing';




export class Form extends Component {
  state = {
    social_media_followers: '',
    website_visitors: '',
    website_to_lead_ratio: '',
    created_at: '',
  };

  static propTypes = {
    addMarketing: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { social_media_followers, website_visitors, website_to_lead_ratio, created_at } = this.state;
    const marketing = { social_media_followers, website_visitors, website_to_lead_ratio, created_at };
    this.props.addMarketing(marketing);
    this.setState({
      social_media_followers: '',
      website_visitors: '',
      website_to_lead_ratio: '',
      created_at: '',
    });
  };

  render() {
    const { social_media_followers, website_visitors, website_to_lead_ratio, created_at } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Marketing</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>social_media_followers</label>
            <input
              className="form-control"
              type="number"
              name="social_media_followers"
              onChange={this.onChange}
              value={social_media_followers}
            />
          </div>
          <div className="form-group">
            <label>website_visitors</label>
            <input
              className="form-control"
              type="number"
              name="website_visitors"
              onChange={this.onChange}
              value={website_visitors}
            />
          </div>
          <div className="form-group">
            <label>website_to_lead_ratio(%)</label>
            <input
              className="form-control"
              type="number"
              name="website_to_lead_ratio"
              onChange={this.onChange}
              value={website_to_lead_ratio}
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

export default connect(null, { addMarketing })(Form);