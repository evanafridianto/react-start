import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  state = {
    curYear: "",
  };

  componentDidMount() {
    this.getCurYear();
  }

  getCurYear = () => {
    var today = new Date(),
      curYear = today.getFullYear();

    this.setState({ curYear });
  };
  render() {
    return (
      <div className="footer">
        <p className="copyright">
          {" "}
          Copyright &copy; {this.state.curYear} ReactStart
        </p>
      </div>
    );
  }
}
