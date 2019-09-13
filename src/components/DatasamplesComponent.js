import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import repo from "../assets/repo-64.png";
import { Link } from "react-router-dom";
import * as api from "../utils/API";

class Datasamples extends Component {
  state = {
    samples: []
  };

  componentDidMount() {
    this.getSamples();
  }

  getSamples() {
    api.get("/sample?limit=1&offset=2").then(data =>
      this.setState({
        samples: data
      })
    );
  }

  render() {
    return (
      <div className="wrapper-container">
        <Breadcrumb>
          <img
            width={18}
            height={18}
            className="align-self-center mr-2"
            src={repo}
            alt="Generic placeholder"
          />
          <Link to="/dashboard" className="breadcrumb-item">
            Repositories
          </Link>
          <Link to="/dashboard/arrayset" className="breadcrumb-item">
            Arraysets
          </Link>
          <Link
            to="/dashboard/arrayset/samples"
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
              <div className="col-md-4" key={item.name}>
                <div className="dataset-container">
                  <Table className="datasample-table">
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>SHAPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: "80%" }}>{item.name}</td>
                        <td style={{ width: "20%" }}>
                          {`[${item.shape.toString()}]`}
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
    );
  }
}

export default Datasamples;
