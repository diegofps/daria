import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ModelDetails extends Component {
  render() {
    return (
        <ul style={{textAlign:"left"}}>
            <li><b>Name:</b> {this.props.item.name}</li>
            <li><b>Manufacturer:</b> {this.props.item.manufacturer}</li>
            <li><b>Year:</b> {this.props.item.year}</li>
            <li><b>Origin:</b> {this.props.item.origin}</li>
        </ul>
    );
  }
}

ModelDetails.propTypes = {
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  year: PropTypes.number,
  origin: PropTypes.string,
};

export default ModelDetails
