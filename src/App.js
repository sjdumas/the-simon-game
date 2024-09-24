import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./output.css";
import "./style.css";
import StartPage from "./components/StartPage";
import SimonGame from "./components/SimonGame";

function App() {
	return (
		// Change the basename to the path where your app will be hosted.
		// For GitHub Pages, set it to "/your-repo-name" (e.g., "/simon-game").
		// For a custom domain (e.g., https://my-project-name.com/game), set it to "/game".
		<Router basename="/simon-game">
			<Routes>
				{/* The "/" path will match the basename, e.g., "/simon-game" for GitHub Pages */}
				<Route
					path="/"
					element={<StartPage />}
				/>

				{/* This path will be appended to the basename, e.g., "/simon-game/game" */}
				<Route
					path="/game"
					element={<SimonGame />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
