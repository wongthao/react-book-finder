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
			term: "soccer"
		}
	}

	componentWillMount() {
		this.getBooks();
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

	getInput = (e) => {
		this.setState({
			term: e
			})
	};

	handleSubmit = (e) => {
		this.getBooks();
		e.preventDefault();
	}


  render() {
		let { books } = this.state;
		console.log(books);
    return (
      <div className="container">
				<Header />
				<div className="row">
					<div className="col-sm-12">
					<form onSubmit={this.handleSubmit}>
						<SearchBar 
							getValue={this.getInput.bind(this)}
							value={this.state.term}/>
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
