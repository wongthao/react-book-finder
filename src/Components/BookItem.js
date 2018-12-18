import React from 'react';

const BookItem = (props) => {
	let { 
		title,
		subTitle,
		authors,
		averageRating,
		description,
		canonicalVolumeLink,
		imageLinks: {
			thumbnail
		}
	} = props.book.volumeInfo

	let shortDescription;
	if ( description) {
		shortDescription = description.split(' ', 50).join(' ') + "..."
	}

	return (
		<div className="well">
			<div className="row">
				<div className="col-xs-4">
					<a href={canonicalVolumeLink}><img className="book-photo" alt={title} src={thumbnail} /></a>
				</div>
				<div className="col-xs-4">
					<h2>{title}</h2>
					<h4>{subTitle}</h4>
				</div>
				<div className="col-xs-4">
					<p>{shortDescription ? shortDescription : "Sorry, no description provided"}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-4">
					<small>By: {authors[0]}</small>
					<h3>Rating: {averageRating ? averageRating : "Not Available" }</h3>
				</div>
			</div>
		</div>
	)
}

export default BookItem;