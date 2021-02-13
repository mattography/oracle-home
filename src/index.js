import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Pillars from "./components/Pillars";
import Footer from "./components/Footer";
import data from "./data.json";

ReactDOM.render(
	<React.StrictMode>
		<Header data={data} />
		<Pillars data={data} />
		<Footer data={data} />
	</React.StrictMode>,
	document.getElementById("root")
);
