import React from "react";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';


import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
			<div className="col-md-4 d-flex align-items-center">
				<span className=" mx-4 text-muted">© 2021 Play MX</span>
				
			</div>

			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
				<Link
					to="/"
					className="mx-4 mb-md-0  text-decoration-none lh-1"
					
					>
				<AiFillInstagram style={{fontSize:20,color:"orange"}} />
				</Link>
				<Link
					to="/"
					className="mb-3 mx-4 mb-md-0 text-muted text-decoration-none lh-1"
				>
				<AiFillFacebook style={{fontSize:20,color:"orange"}} />
					
				</Link>
				<Link
					to="/"
					className="mb-3 mx-4 mb-md-0 text-muted text-decoration-none lh-1"
				>
				
				</Link>
			</ul>
		</footer>
	);
};

export default Footer;
