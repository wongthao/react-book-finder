import React, { Component } from 'react';
import axios from 'axios';
import Books from './Components/Books';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import './App.css';


class App extends Component {
	constructor(){
		super();
		this.state = {
			books: [],
			term: "Ex. React"
		}
	}

	getBooks() {
		let { term } = this.state;
		let url = `https://www.googleapis.com/books/v1/volumes?q=${term}`;

		axios.get(url)
			.then(response => {
				this.setState({
					books: response.data.items
				})
			})
			.catch(error => {
				console.log(error)
			});
	}

	getInput = (term) => {
		this.setState({
			term
			})
	};

	handleSubmit = (e) => {
		this.getBooks();
		e.preventDefault();
	}


  render() {
		let { books } = this.state;
    return (
      <div className="container">
				<Header />
				<div className="row">
					<div className="col-sm-12">
					<form onSubmit={this.handleSubmit}>
						<SearchBar 
							getValue={this.getInput}
							value={this.state.term}
							placeholder="Enter a Book Title"
						/>
							
						<input type="submit" className="btn bnt-lg btn-success" value="Submit" />
					</form>
					</div>
				</div>
      	<Books books={books}/>
      </div>
    );
  }
}

export default App;
