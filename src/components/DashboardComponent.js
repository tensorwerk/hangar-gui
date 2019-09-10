import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import repo from "../assets/repo-64.png";
import commit from "../assets/commit.png";
import branch from "../assets/branch.png";
import * as api from "../utils/API";
import { Tooltip, OverlayTrigger, Form, Col, Row } from "react-bootstrap";

class Dashboard extends Component {
  state = {
    repositories: []
  };

  componentDidMount() {
    this.getRepositories();
  }

  getRepositories() {
    api.get("/repository").then(data => {
      this.setState({
        repositories: data
      });
      console.log(this.state.repositories);
    });
  }
  render() {
    return (
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
          {this.state.repositories.map(item => (
            <div className="row" key={item.name}>
              <div className="col">
                <Media>
                  <img
                    width={64}
                    height={64}
                    className="align-self-center mr-3"
                    src={repo}
                    alt="Repo"
                  />
                  <Media.Body>
                    <h5>
                      <Link
                        className="link-name"
                        to={`/dashboard/${item.name}`}
                      >
                        {item.name}
                      </Link>

                      <span className=" desc right">
                        <OverlayTrigger
                          key={2}
                          placement="top"
                          overlay={<Tooltip>Commits</Tooltip>}
                        >
                          <span className="">
                            <img src={commit} alt="commit" />
                            <span className="commit">{item.commit_count}</span>
                          </span>
                        </OverlayTrigger>

                        <OverlayTrigger
                          key={1}
                          placement="top"
                          overlay={<Tooltip>Branches</Tooltip>}
                        >
                          <span className="">
                            <img src={branch} alt="branch" />
                            <span>{item.branch_count}</span>
                          </span>
                        </OverlayTrigger>
                      </span>
                    </h5>
                    <p className="repo-desc">{item.desc}</p>
                    <p className="repo-update">Updated 1 day ago</p>
                  </Media.Body>
                </Media>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
