import React, { Component } from 'react';
import ModelDetails from './ModelDetails';

class ItemsList extends Component {
  render() {
    return (
        <div>
            {this.props.items.map((item, idx) => 
                <ModelDetails key={idx} item={item}/>
            )}
        </div>
    );
  }
}

export default ItemsList;
