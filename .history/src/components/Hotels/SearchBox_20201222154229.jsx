import React from "react";
import { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="search"
        className="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
export default SearchBox;
