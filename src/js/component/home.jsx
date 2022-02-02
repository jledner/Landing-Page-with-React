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
			<div>
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="d-flex">
				<Card
					title="Card Title123"
					text="Some quick example text to build on the card title and make up the bulk of the card's content."
					description="button"
					image="https://wallpaperaccess.com/full/24243.jpg"
				/>
				<Card
					title="Card Title123456"
					text="Some quick example text to build on the card title and make up the bulk of the card's content."
					description="button"
					image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80"
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
		</div>
	);
};
