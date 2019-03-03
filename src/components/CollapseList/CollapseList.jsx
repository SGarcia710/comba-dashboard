import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'

class CollapseList extends Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroupItem >
          <div className="row">
          <div className="col-10 text-left"> Proyeto 2</div>
          <div className="col-2 text-right "><i class="fas fa-trash mr-2"></i><i class="fas fa-pen"></i></div>
        </div>
        </ListGroupItem>
        <ListGroupItem >
          <div className="row">
          <div className="col-10 text-left"> Proyeto 2</div>
          <div className="col-2 text-right "><i class="fas fa-trash mr-2"></i><i class="fas fa-pen"></i></div>
        </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="row">
          <div className="col-10 text-left">Proyeto 2</div>
          <div className="col-2 text-right "><i class="fas fa-trash mr-2"></i><i class="fas fa-pen"></i></div>
        </div>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default CollapseList;
