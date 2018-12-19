import React from 'react';

const BookItem = (props) => {
	let { 
		title = "no title",
		subTitle,
		authors = ["No author"],
		averageRating,
		description,
		canonicalVolumeLink,
	} = props.book.volumeInfo;
	let smallThumbnail;

	if(!props.book.volumeInfo.imageLinks) {
		props.book.slice(props.key,1);
	} else {
		smallThumbnail = props.book.volumeInfo.imageLinks.smallThumbnail;
	}

	let shortDescription;
	if ( description) {
		shortDescription = description.split(' ', 50).join(' ') + "..."
	}

	return (
		<div className="well">
			<div className="row">
				<div className="col-xs-4">
					<a href={canonicalVolumeLink}><img className="book-photo" alt={title} src={smallThumbnail} /></a>
				</div>
				<div className="col-xs-4">
					<h3>{title}</h3>
					<span>{subTitle}</span>
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