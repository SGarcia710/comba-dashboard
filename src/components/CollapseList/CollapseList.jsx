import React, { Component } from 'react';
import { ListGroup } from 'reactstrap'
import CollapseItem from './CollapseItem';

class CollapseList extends Component {
  render() {
    return (
      <ListGroup flush>
        <CollapseItem
          title="Proyecto 1"
        />
        <CollapseItem
          title="Proyecto 2"
        />
        <CollapseItem
          title="Proyecto 3"
        />

      </ListGroup>
    );
  }
}

export default CollapseList;
