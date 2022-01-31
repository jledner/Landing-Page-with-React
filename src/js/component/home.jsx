import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./card";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card
				title="Card Title123"
				text="Some quick example text to build on the card title and make up the bulk of the card's content."
				description="button"
				image="https://wallpaperaccess.com/full/24243.jpg"
			/>
			<Card
				title="Card Title123"
				text="Some quick example text to build on the card title and make up the bulk of the card's content."
				description="button"
				image="https://wallpaperaccess.com/full/24243.jpg"
			/>
			<Card
				title="Card Title123"
				text="Some quick example text to build on the card title and make up the bulk of the card's content."
				description="button"
				image="https://wallpaperaccess.com/full/24243.jpg"
			/>
			<Card
				title="Card Title123"
				text="Some quick example text to build on the card title and make up the bulk of the card's content."
				description="button"
				image="https://wallpaperaccess.com/full/24243.jpg"
			/>
		</div>
	);
};
