import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsList from './ItemsList';

class ItemsListContainer extends Component {
  render() {
    return (
      <ItemsList items={this.props.items} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state
  }
}

export default connect(mapStateToProps)(ItemsListContainer)
