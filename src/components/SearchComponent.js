import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
class Search extends Component {
  state = {};
  render() {
    return (
      <Col>
        <Form>
          <Form.Control
            type="text"
            placeholder={this.props.placeholder}
            aria-describedby="inputGroupPrepend"
            onChange={e => this.props.searchItem(e)}
            onKeyPress={e => {
              e.key === "Enter" && e.preventDefault();
            }}
          />
        </Form>
      </Col>
    );
  }
}

export default Search;
