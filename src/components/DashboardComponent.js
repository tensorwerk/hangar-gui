import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import repo from "../assets/repo-64.png";
import repoDark from "../assets/repo-dark.png";
import commit from "../assets/commit.png";
import commitDark from "../assets/commit-dark.png";
import branch from "../assets/branch.png";
import branchDark from "../assets/branch-dark.png";
//import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {
  Tooltip,
  OverlayTrigger,
  Form,
  FormControl,
  InputGroup,
  Col,
  Row,
} from "react-bootstrap";

import { ThemeConsumer } from "../context/theme-context";

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <ThemeConsumer>
        {({ isDarkMode }) => (
          <div className="wrapper-container">
            <p className="title">REPOSITORIES</p>
            <div className="search-sec">
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search for a repository"
                    aria-describedby="inputGroupPrepend"
                  />
                </Col>

                <Col className="">
                  <Button
                    className="right"
                    onClick={() => this.props.history.push("/createrepository")}
                  >
                    + New
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="body-sec">
              <div className="row">
                <div className="col">
                  <Media>
                    <img
                      width={64}
                      height={64}
                      className="align-self-center mr-3"
                      src={isDarkMode ? repo : repoDark}
                      alt="Repo"
                    />
                    <Media.Body>
                      <h5>
                        <Link className="link-name" to="/dashboard/arrayset">
                          Hangar/example-template1
                        </Link>

                        <span className=" desc right">
                          <OverlayTrigger
                            key={2}
                            placement="top"
                            overlay={<Tooltip>Commits</Tooltip>}
                          >
                            <span className="">
                              <img
                                src={isDarkMode ? commit : commitDark}
                                alt="commit"
                              />
                              <span className="commit">2</span>
                            </span>
                          </OverlayTrigger>

                          <OverlayTrigger
                            key={1}
                            placement="top"
                            overlay={<Tooltip>Branches</Tooltip>}
                          >
                            <span className="">
                              <img
                                src={isDarkMode ? branch : branchDark}
                                alt="branch"
                              />
                              <span>3</span>
                            </span>
                          </OverlayTrigger>
                        </span>
                      </h5>
                      <p className="repo-desc">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo.
                      </p>
                      <p className="repo-update">Updated 1 day ago</p>
                    </Media.Body>
                  </Media>
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default Dashboard;
