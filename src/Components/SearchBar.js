import React, { Component } from 'react';


class SearchBar extends Component {
	handleChange = (e) => {
		this.props.getValue(e.target.value)
	}

  render() {
    return (
      <span>
      	<input 
      		className="search-input"
      		type="text" 
      		placeholder={this.props.value} 
      		onChange={this.handleChange} 
      		/>
      </span>
    );
  }
}

export default SearchBar;
