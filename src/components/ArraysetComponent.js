import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import repo from "../assets/repo-64.png";
import { Link } from "react-router-dom";

class Arrayset extends Component {
  state = {};

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
          <Link
            to="/dashboard/arrayset/samples"
            className="breadcrumb-item"
            active="true"
          >
            Arraysets
          </Link>
        </Breadcrumb>
        <div className="title-sec">
          <span className="title">ARRAYSETS</span>
        </div>
        <div className="body-sec">
          <div className="row">
            <div className="col ">
              <div className="dataset-container">
                <h5>
                  <Link className="link-name" to="/dashboard/arrayset/samples">
                    Arrayset Example-1
                  </Link>
                </h5>
                <Table className="dataset-table">
                  <tbody>
                    <tr>
                      <td style={{ width: "30%" }}>Is shape variable</td>
                      <td style={{ width: "10%" }}>:</td>
                      <td style={{ width: "30%" }}> </td>
                    </tr>

                    <tr>
                      <td style={{ width: "30%" }}>Shape</td>
                      <td style={{ width: "10%" }}>:</td>
                      <td style={{ width: "30%" }}> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "30%" }}>Data Types</td>
                      <td style={{ width: "10%" }}>:</td>
                      <td style={{ width: "30%" }}> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "30%" }}>No. of Samples</td>
                      <td style={{ width: "10%" }}>:</td>
                      <td style={{ width: "30%" }}> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    );
  }
}

export default Arrayset;
