import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <span>© Copyrights 2019.All rights reserved.</span>
        <span className="icon-group">
          <a
            href="https://join.slack.com/t/hangarusergroup/shared_invite/enQtNjQ0NzM5ODQ1NjY1LWZlYmIzNTQ0ODZmOTAwMmNmOTgzZTAzM2NhMWE2MTNlMTRhMzNhN2Y3YmJmMjcwZDgxNDIyMDM1MzVhYzk4MjU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-slack-hash" />
          </a>
          <a
            href="https://twitter.com/tensorwerk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://twitter.com/tensorwerk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" />
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
