import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "./Logo";

export default function StartPage() {
	const navigate = useNavigate();

	const handleStartButtonClick = () => {
		navigate("/game");
	};

	return (
		<div className="start-page">
			<Helmet>
				<title>Simon Game</title>
			</Helmet>
			<div className="text-center">
				<Logo />
				<h2 className="main-title">Do What Simon Says...</h2>
				<h5>
					Follow along by repeating the sound and light patterns you
					see and hear.
				</h5>
				<button
					type="button"
					onClick={handleStartButtonClick}
				>
					Play the Game
				</button>
			</div>
		</div>
	);
}
