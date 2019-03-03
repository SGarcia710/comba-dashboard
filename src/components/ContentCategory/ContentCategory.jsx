import React, { Component } from 'react';
import {
  CardBody,
  Collapse,
  Card
} from 'reactstrap';
import CollapseList from '../../components/CollapseList/CollapseList'

class ContentCategory extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div className="row">
          <div className="col-12" >
            <Card className="card-stats">
              <CardBody>
                <div className="row mb-0" >
                  <div className="col-10 mb-0">
                    <div className="text-left">
                      <h4 className="mt-0">{this.props.title}</h4>
                    </div>
                  </div>
                  <div className="col-2  mb-0" >
                    <div className="text-right mt-2 mb-0">
                      <i class="fas fa-print fa-2x mr-2 text-warning" />
                      <i class="fas fa-plus fa-2x mr-2 text-danger"/>
                      {
                        this.state.collapse ?
                           <i class="fas fa-chevron-up fa-2x  text-secondary"  onClick={this.toggle}/>
                        :
                           <i class="fas fa-chevron-down fa-2x  text-secondary"  onClick={this.toggle}/>
                      }
                    </div>
                  </div>
                </div>
              <div className="row mt-0">
                <div className="col-12">
                  <Collapse isOpen={this.state.collapse}>
                    <CollapseList/>
                  </Collapse>
                </div>
              </div>
              </CardBody>
            </Card>
          </div>
        </div>
    );
  }
}

export default ContentCategory;
