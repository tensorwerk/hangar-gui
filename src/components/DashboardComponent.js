import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import repo from "../assets/repo-64.png";
import repoDark from "../assets/repo-light-theme-64.png";
import commit from "../assets/commit.png";
import commitDark from "../assets/commit-light-theme-16.png";
import branch from "../assets/branch.png";
import branchDark from "../assets/branch-light-theme-16.png";
import * as api from "../utils/API";
import { Tooltip, OverlayTrigger, Col, Row } from "react-bootstrap";
import timeago from "epoch-timeago";
import { ThemeConsumer } from "../context/theme-context";
import Search from "../components/SearchComponent";

class Dashboard extends Component {
  constructor() {
    super();
    this.generateUpdateList = this.generateUpdateList.bind(this);
  }
  state = {
    repositories: [],
    searchedList: []
  };
  componentDidMount() {
    this.getRepositories();
  }

  getRepositories() {
    api.get("/repository").then(data => {
      this.setState({
        repositories: data,
        searchedList: data
      });
    });
  }

  generateUpdateList(event) {
    var updatedList = this.state.repositories;
    updatedList = updatedList.filter(item => {
      debugger;
      let itemName = item.repo_name.toLowerCase();
      let searchString = event.target.value.toLowerCase();
      return itemName.search(searchString) === 0; //'0' when strings match, and '-1' when they don't match
    });
    this.setState({ searchedList: updatedList });
  }
  render() {
    const TimeAgo = ({ time }) => (
      <time dateTime={new Date(time).toISOString()}>{`Updated ${timeago(
        time
      )}`}</time>
    );
    return (
      <ThemeConsumer>
        {({ isDarkMode }) => (
          <div className="wrapper-container">
            <p className="title">REPOSITORIES</p>
            <div className="search-sec">
              <Row>
                <Search
                  placeholder="Search for repositories"
                  searchItem={this.generateUpdateList}
                ></Search>

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
              {this.state.searchedList.length !== 0 ? (
                this.state.searchedList.map(item => (
                  <div className="row" key={item.repo_name}>
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
                            <Link
                              className="link-name"
                              to={`/dashboard/${item.repo_name}`}
                            >
                              {item.repo_name}
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
                                  <span className="commit">
                                    {item.total_commit_count}
                                  </span>
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
                                  <span>{item.branch_count}</span>
                                </span>
                              </OverlayTrigger>
                            </span>
                          </h5>
                          <p className="repo-desc">{item.desc}</p>
                          <p className="repo-update">
                            <TimeAgo time={item.last_commit_time * 1000} />
                          </p>
                        </Media.Body>
                      </Media>
                    </div>
                  </div>
                ))
              ) : (
                <div className="not-found-block">
                  Sorry, we couldn't find any matches!
                </div>
              )}
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default Dashboard;
