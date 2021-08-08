// src/CitySearch.js

import React, { Component } from "react";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({ 
      query: value,
      suggestions,    
    });
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });

    this.props.updateEvents(suggestion, this.props.displayCount);
  }

  render() {
    return (
      <div className="CitySearch">
        <label>Location: </label>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder="Enter a city..."
          onFocus={() => { this.setState({ showSuggestions: true }) }}
          onBlur={() => setTimeout(() => {this.setState({showSuggestions: undefined })}, 250 )}
        />
        <div className="suggestions-container">
          <ul className="suggestions" style={this.state.showSuggestions ? {}: {display: "none"}}>
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            ))}
            <li 
              key="all"
              onClick={() => this.handleItemClicked("all")}
              >
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;