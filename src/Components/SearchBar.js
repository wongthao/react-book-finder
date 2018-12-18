import React, { Component } from 'react';


class SearchBar extends Component {
	handleSubmit = (e) => {
		this.props.getValue(e.target.value)
	}

  render() {
    return (
      <span>
      	<input 
      		className="search-input"
      		type="text" 
      		placeholder={this.props.value} 
      		onBlur={this.handleSubmit} 
      		/>
      </span>
    );
  }
}

export default SearchBar;
