import React, { Component } from "react";
//import {  } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Form, Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

class CreateRepo extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper-container">
        <p className="title">CREATE REPOSITORY</p>

        <div className="body-sec create-repo-container ">
          <div className="row">
            <div className="col">
              <Alert
                className="alert-custom"
                variant="warning"
                style={{
                  borderRadius: "0px",
                  borderLeft: "5px solid #f5a540"
                }}
              >
                {/* <i className="fas fa-edit"></i> */}
                {/* <i class="fas fa-exclamation-circle"></i> */}
                <i className="fas fa-code"></i>
                pip install hangar
                <CopyToClipboard text="pip install hangar">
                  <button
                    style={{
                      float: "right",
                      border: "none",
                      backgroundColor: "transparent"
                    }}
                  >
                    <i className="far fa-copy"></i>
                  </button>
                </CopyToClipboard>
              </Alert>
              <Form>
                <Form.Group controlId="">
                  <Form.Label>Repository Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter repository name"
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="email" placeholder="Enter description" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Enter username" />
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
