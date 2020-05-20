import React, { Component } from "react";
import SearchInput from "./SearchInput";
import filterCountries from "./filterCountries"
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      data,
      filteredCountry: filterCountries("", 20)
    };
  };
  handleSearchChange = event => {
    this.setState({
      filteredCountry: filterCountries(event.target.value, 20)
    });
  };
  render() {
    return (
      <header className="component-header">
        <SearchInput textChange={this.handleSearchChange} />
      </header>
    );
  }
}

export default Header;
