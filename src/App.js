import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form,Table } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }


  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: '',
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({
      list: updatedList,
    });
  }

  render() {
    return (
      <Container className="main">
        <Row>
              <Col>
                <Form.Control
                  className="m-2 d-inline "
                  value={this.state.newItem}
                  onChange={(e) => this.updateInput('newItem', e.target.value)}
                  
                />
              </Col>
              <Col>
                <Button
                  className="d-inline btnmain"
                  variant="primary"
                  onClick={() => this.addItem()}
                >
                  Add
                </Button>
              </Col>
              </Row>
            <Row>
            <Col >
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>
                    To-Do
                  </th>
                </tr>
              </thead>
              <tbody>
              {' '}
              {this.state.list.map((item) => {
                return (
                  <tr>
                  <td>{item.value}</td>
                  <td><Button className="libtn"
                      variant="primary"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Remove{' '}
                    </Button>{' '}</td>
                
                  </tr>
                );
              })}{' '}
              </tbody>
           </Table>
            </Col>
        </Row>{' '}
        
      </Container>
    );
  }
}

export default App;
