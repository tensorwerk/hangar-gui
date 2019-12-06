import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/HomeComponent";
import DashboardComponent from "./components/DashboardComponent";
import FAQComponent from "./components/FAQComponent";
import ArraysetComponent from "./components/ArraysetComponent";
import DatasamplesComponent from "./components/DatasamplesComponent";
import CreateRepoComponent from "./components/CreateRepoComponent";
import CommitHistoryComponent from "./components/CommitHistoryComponent";

import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
   <ThemeProvider>
    <Container fluid="true" className="p-0">
      <Row className="main-header">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/dashboard" component={DashboardComponent} />
            <Route
              exact
              path="/dashboard/:repoId"
              component={ArraysetComponent}
            />
            <Route
              exact
              path="/dashboard/:repoId/:arraysetId/:samplesId"
              component={DatasamplesComponent}
            />
            <Route exact path="/faq" component={FAQComponent} />
            <Route
              exact
              path="/createrepository"
              component={CreateRepoComponent}
            />
            <Route
              exact
              path="/dashboard/:repoId/commits"
              component={CommitHistoryComponent}
            />
            <Redirect from="/" to="/home" />
          </Switch>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
  );
}

export default App;
