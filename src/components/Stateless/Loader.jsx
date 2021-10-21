import React from "react";

const Loader = ({ text }) => {
	return (
		<div className="d-flex justify-content-evenly ">
			<strong className="">Loading...{text}</strong>
			<div className="spinner-grow ms-auto"></div>
		</div>
	);
};

export default Loader;
