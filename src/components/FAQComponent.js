import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class FAQ extends Component {
  state = {
    data: [
      {
        question: "What is Hangar?",
        answer: `Hangar is based off the belief that too much time is spent collecting, managing, and creating home-brewed version control systems for data. At it’s core Hangar is designed to solve many of the same problems faced by traditional code version control system (ie. Git), just adapted for numerical data:
         Time travel through the historical evolution of a dataset. 
         Zero-cost Branching to enable exploratory analysis and collaboration 
         Cheap Merging to build datasets over time (with multiple collaborators) 
         Completely abstracted organization and management of data files on disk 
        Ability to only retrieve a small portion of the data (as needed) while still maintaining complete historical record
        Ability to push and pull changes directly to collaborators or a central server (ie a truly distributed version control system)
        The ability of version control systems to perform these tasks for codebases is largely taken for granted by almost every developer today; However, we are in-fact standing on the shoulders of giants, with decades of engineering which has resulted in these phenomenally useful tools. Now that a new era of “Data-Defined software” is taking hold, we find there is a strong need for analogous version control systems which are designed to handle numerical data at large scale… Welcome to Hangar!`
      },
      {
        question: "Installation",
        answer: `Hangar is in early alpha development release!

        pip install hangar`
      }
    ]
  };
  render() {
    return (
      <div className="wrapper-container">
        <div className="title-sec">
          <span className="title">FAQs</span>
        </div>
        <div className="body-sec">
          {this.state.data.map(item => (
            <Accordion defaultActiveKey="0" key={item.question}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {item.question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{item.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </div>
      </div>
    );
  }
}

export default FAQ;
