import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
	return (
		<div
			className="card"
			style={{ width: "18rem", display: "flex", margin: "auto" }}>
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.description}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
};
