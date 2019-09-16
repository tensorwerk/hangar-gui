import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Form, Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as api from "../utils/API";

class CreateRepo extends Component {
  constructor() {
    super();
    this.createRepository = this.createRepository.bind(this);
  }
  state = {};

  createRepository(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    debugger;
    //api.post("/repository", data).then(res => console.log(res));
  }

  render() {
    return (
      <div className="wrapper-container">
        <p className="title">CREATE REPOSITORY</p>
        <div className="body-sec create-repo-container ">
          <div className="row">
            <div className="col">
              <Alert className="alert-custom" variant="warning">
                <i className="fas fa-code"></i>
                command to execute
                <CopyToClipboard text="command to execute">
                  <button className="btn-invisible">
                    <i className="far fa-copy"></i>
                  </button>
                </CopyToClipboard>
              </Alert>
              <Form onSubmit={this.createRepository}>
                <Form.Group controlId="">
                  <Form.Label>Repository Name</Form.Label>
                  <Form.Control
                    name="repo"
                    type="text"
                    placeholder="Enter repository name"
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter description" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Create Repository
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRepo;
