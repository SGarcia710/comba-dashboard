import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap'

class CollapseItem extends Component {
  render() {
    return (
      <ListGroupItem >
        <div className="row">
          <div className="col-10 text-left"> {this.props.title}</div>
          <div className="col-2 text-right "><i class="fas fa-pen mr-2"></i><i class="fas fa-trash "></i></div>
        </div>
      </ListGroupItem>
    );
  }
}

export default CollapseItem;
