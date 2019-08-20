import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import bgimage from "../assets/hangar1.png";
class Home extends Component {
  render() {
    return (
      <Col>
        <div
          className="row home-container"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh"
          }}
        >
          <div className="col content">
            <h1 className="title">Hangar</h1>
            <p className="desc">
              A Version Control for Tensor Data. Commit, branch, merge, revert,
              and collaborate in the data-defined software era.
            </p>
            <Button
              variant="primary"
              className="btn-large"
              onClick={() => {
                window.open(
                  "https://hangar-py.readthedocs.io/en/latest/index.html",
                  "_blank"
                );
              }}
            >
              Explore
            </Button>
          </div>
        </div>
      </Col>
    );
  }
}

export default Home;
