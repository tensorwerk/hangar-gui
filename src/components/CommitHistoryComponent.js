import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import repo from "../assets/repo-64.png";
import repoDark from "../assets/repo-light-theme-64.png";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context/theme-context";
import * as api from "../utils/API";
import Dropdown from 'react-bootstrap/Dropdown';
import commit from "../assets/commit.png";
import commitdark from  "../assets/commit-light-theme-16.png";
import clip from "../assets/clipboard.png";
import clipDark from "../assets/clipboardDark.png";

class Datasamples extends Component {
  state = {
    commits: []
  };

  componentDidMount() {
    this.getSamples();
  }

  getSamples() {
    api
      .get(
        `/commits?repo_name=${this.props.match.params.repoId}&branch_name=master&limit=4&offset=50`
      )
      .then(data => {
        this.setState({
          commits: data
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
                draggable= 'false'
              />
              <Link to="/dashboard" className="breadcrumb-item">
                Repositories
              </Link>
              <Link
                to={`/dashboard/${this.props.match.params.repoId}`}
                className="breadcrumb-item"
              >
                Arraysets
              </Link>
              <Link
                to={`/dashboard/${this.props.match.params.repoId}/${this.props.match.params.arraysetId}/samples`}
                className="breadcrumb-item"
                active="true"
              >
                Samples
              </Link>
            </Breadcrumb>
            <div className="title-sec">
              <span className="title">COMMITS</span>
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
            { this.state.commits.map(commitsOnDate => (           
            <div className="row commit-container"> {/* Repeat this for different date commits */}
              <div className="col-1">
                <div className="row">
                  <div className="col-12 pl-0 pr-0">
                  <img
                    className="align-self-center commit-icon"
                    src={isDarkMode ? commit : commitdark}
                    alt="Generic placeholder"
                    draggable='false'
                  />
                  </div>
                </div>
              </div>
              <div className="col-11">
                <div className="row commit-date">
                  <h1>Commits on { commitsOnDate.dateString }</h1>
                </div>
              </div>
              <div className="col-1">
                  <div className="w-50 commit-line"> &nbsp;</div>
              </div>
              <div className="col-11">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                    { commitsOnDate.commits.map(commit => (                    
                    <div className="col-12 commit-list">{/*Repeat this for same day commits*/}
                      <div className="row ml-auto mr-auto">
                        <div className="col-xl-9 col-md-8 col-sm-6 col-12">
                          <h1>{ commit.message }</h1>
                        </div>
                        <div className="col-xl-2 col-md-2 col-sm-3 col-6 pl-0 pr-0">
                          <h1>{ commit.id }</h1>
                        </div>
                        <div className="col-xl-1 col-md-2 col-sm-3 col-6 copy-commit">
                          <img
                            className="align-self-center commit-clip"
                            src={isDarkMode ? clip : clipDark}
                            alt="Generic placeholder"
                            draggable= 'false'
                          />
                        </div>
                      </div>
                    </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}            
          </div>
          
        )}
      </ThemeConsumer>
    );
  }
}

export default Datasamples;
