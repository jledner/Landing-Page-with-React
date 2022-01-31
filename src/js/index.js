//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Home
			title="Card Title123"
			text="Some quick example text to build on the card title and make up the bulk of the card's content."
			description="Some quick example text to build on the card title and make up the bulk of the card's content."
			about="about"
			contact="contact"
			action="action"
			anotheraction="anotheraction"
			something="something"
		/>
		;
	</div>,
	document.querySelector("#app")
);
