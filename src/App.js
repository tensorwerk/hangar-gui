import React from "react";
//import "./App.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/HomeComponent";
import DashboardComponent from "./components/DashboardComponent";
import FAQComponent from "./components/FAQComponent";
import ArraysetComponent from "./components/ArraysetComponent";
import DatasamplesComponent from "./components/DatasamplesComponent";

function App() {
  return (
    <Container fluid="true" className="p-0">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={DashboardComponent} />
          <Route
            exact
            path="/dashboard/:arraysetId"
            component={ArraysetComponent}
          />
          <Route
            exact
            path="/dashboard/:arraysetId/:samplesId"
            component={DatasamplesComponent}
          />
          <Route exact path="/faq" component={FAQComponent} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
