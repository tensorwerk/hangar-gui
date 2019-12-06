import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import repo from "../assets/repo-64.png";
import repoDark from "../assets/repo-light-theme-64.png";
import close from "../assets/close.png";
// import sample from "../assets/sample.png";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context/theme-context";
import * as api from "../utils/API";
import { Form, Col, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

class Datasamples extends Component {
  state = {
    samples: [],
    isPreview: false,
    previewInfo: []
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

  previewSample(index) {
    this.setState({
      isPreview: true,
      previewInfo: this.state.samples[index]
    });
  }

  render() {
    const previewInfo = this.state.previewInfo;
    return (
      <ThemeConsumer>
        {({ isDarkMode }) => (
          <Row className="wrapper-container ml-0 mr-0 sampleContainer">
            <div className="pl-0 col-md-9">
              <div className="row ml-auto mr-auto wrapper-row">
                <Breadcrumb className="col pl-0 pr-0">
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
                <div className="title-sec col-12 pl-0 pr-0">
                 <span className="title">SAMPLES</span>
                </div>
                <Dropdown className="select-branch">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-dark">
                  <b>Branch</b> : master
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">master</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">dev-2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">dev-3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                <div className="search-sec col-md-12">
                  <Row>
                    <Col className="col-md-6">
                      <Form.Control 
                        class="form-search"
                        type="text"
                        placeholder="Search for a sample"
                        aria-describedby="inputGroupPrepend"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="datasamples-container body-sec col-md-12 pl-0 pr-0 samplesContainer">
                  <div className="dataset-container p-0">
                    <Table className="datasample-table" hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>NAME</th>
                          <th>CREATED ON</th>
                          <th>SHAPE</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.samples.map((item, index) =>
                        <tr key={item.sampleName}>
                          <td>{index+1}</td>
                          <td><span onClick={() => this.previewSample(index)}>{item.sampleName}</span></td>
                          <td>{item.createdOn}</td>
                          <td>{`[${item.shape}]`}</td>
                        </tr>
                      )}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
            { this.state.isPreview &&
            <div className="col-md-3 sideBar">  
                <img
                  width={24}
                  height={24}
                  className="align-self-right ml-auto mr-2 d-block mt-2"
                  src={close}
                  alt="Generic placeholder"
                  draggable= 'false'
                  onClick={ () => this.setState({isPreview: false}) }
                />
                { previewInfo.type === 'image' &&
                <img
                  className="align-self-center sampleImg"
                  src={ previewInfo.url }
                  alt="Generic placeholder"
                  draggable= 'false'
                />
                }
                { previewInfo.type === 'video' &&
                <video
                  controls
                  className="align-self-center sampleImg">
                    <source src={ previewInfo.url } type="video/mp4"></source>
                </video>
                }
                { previewInfo.type === 'audio' &&
                <audio
                  controls
                  className="align-self-center sampleImg"
                  src={ previewInfo.url }>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                }
                <h1>{ previewInfo.sampleName }</h1>
                <h2>Shape</h2><p>{`[${previewInfo.shape}]`}</p>
                <h2>Created On</h2><p>{ previewInfo.createdOn }</p>
                <h2>Size</h2><p>{ previewInfo.size }</p>
            </div>
            }
          </Row>
          
           
        )}
      </ThemeConsumer>
    );
  }
}

export default Datasamples;
