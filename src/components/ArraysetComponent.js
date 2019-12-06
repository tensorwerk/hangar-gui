import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import repo from "../assets/repo-64.png";
import repoDark from "../assets/repo-light-theme-64.png";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context/theme-context";
import * as api from "../utils/API";
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Col, Row } from "react-bootstrap";

class Arrayset extends Component {
  state = {
    arraysets: []
  };

  componentDidMount() {
    this.getArraySets();
  }

  getArraySets() {
    api
      .get(`/arrayset?repo_name=${this.props.match.params.repoId}`)
      .then(data => {
        this.setState({
          arraysets: data
        });
      });
  }
  render() {
    return (
      <ThemeConsumer>
        {({ isDarkMode }) => (
          <div className="wrapper-container">
            <Breadcrumb>
              <img
                width={18}
                height={18}
                className="align-self-center mr-2"
                src={isDarkMode ? repo : repoDark}
                alt="Generic placeholder"
              />
              <Link to="/dashboard" className="breadcrumb-item">
                Repositories
              </Link>
              <Link
                to={`/dashboard/${this.props.match.params.repoId}`}
                className="breadcrumb-item"
                active="true"
              >
                Arraysets
              </Link>
            </Breadcrumb>
            <div className="title-sec">
              <span className="title">ARRAYSETS</span>
            </div>
            <Dropdown className="select-branch">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-dark">
                <b>Branch</b> : master
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">dev</Dropdown.Item>
                <Dropdown.Item href="#/action-2">dev-2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">dev-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="search-sec col-md-12">
              <Row>
                <Col className="col-md-6">
                  <Form.Control 
                    className="form-search"
                    type="text"
                    placeholder="Search for a sample"
                    aria-describedby="inputGroupPrepend"
                  />
                </Col>
              </Row>
            </div>
            <div className="arrayset-container body-sec">
              <div className="row">
                {this.state.arraysets.map(item => (
                  <div className="col-md-6" key={item.arrayset_name}>
                    <div className="dataset-container">
                      <h5>
                        <Link
                          className="link-name"
                          to={`/dashboard/${this.props.match.params.repoId}/${item.arrayset_name}/samples`}
                        >
                          {item.arrayset_name}
                        </Link>
                      </h5>
                      <Table className="dataset-table">
                        <tbody>
                          <tr>
                            <td style={{ width: "30%" }}>Is shape dynamic</td>
                            <td style={{ width: "10%" }}>:</td>
                            <td style={{ width: "30%" }}>
                              {item.variable.toString()}
                            </td>
                          </tr>

                          <tr>
                            <td style={{ width: "30%" }}>Shape</td>
                            <td style={{ width: "10%" }}>:</td>
                            <td
                              style={{ width: "30%" }}
                            >{`[${item.shape}]`}</td>
                          </tr>
                          <tr>
                            <td style={{ width: "30%" }}>Data Types</td>
                            <td style={{ width: "10%" }}>:</td>
                            <td style={{ width: "30%" }}>{item.dtype} </td>
                          </tr>
                          <tr>
                            <td style={{ width: "30%" }}>No. of Samples</td>
                            <td style={{ width: "10%" }}>:</td>
                            <td style={{ width: "30%" }}>
                              {item.sample_count}{" "}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default Arrayset;
