import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  //This Method passes the term(user's input) to the search method of App where the actually searching begins
  search = () => {
    this.props.onSearch(this.state.term);
  };
  //This Method Updates 'term' property of state
  handleTermChange = (e) => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button onClick={this.search} className="SearchButton">
          SEARCH
        </button>
      </div>
    );
  }
}
