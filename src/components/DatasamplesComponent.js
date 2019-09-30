import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import repo from "../assets/repo-64.png";
import repoDark from "../assets/repo-dark.png";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context/theme-context";
import * as api from "../utils/API";

class Datasamples extends Component {
  state = {
    samples: []
  };

  componentDidMount() {
    this.getSamples();
  }

  getSamples() {
    api
      .get(
        `/sample?repo_name=${this.props.match.params.repoId}&arrayset_name=${this.props.match.params.arraysetId}&branch_name=master&limit=4&offset=50`
      )
      .then(data => {
        this.setState({
          samples: data
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
          <span className="title">SAMPLES</span>
        </div>
        <div className="body-sec">
          <div className="row">
            {this.state.samples.map(item => (
              <div className="col-md-4" key={item.arrayset_name}>
                <div className="dataset-container">
                  <Table className="datasample-table">
                    <thead>
                      <tr>
                        <th>NAME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: "80%" }}>{item.arrayset_name}</td>
                      </tr>
                    </tbody>
                  </Table>
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
