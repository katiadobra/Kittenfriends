import React, { Component } from 'react';
import Card from '../../components/Card/Card';

class ItemsList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="list-holder">
        {list.map(cat => {
          return <Card key={cat.id} data={cat} />;
        })}
      </div>
    );
  }
}

export default ItemsList;
