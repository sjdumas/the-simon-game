import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const SimonGame = () => {
	const [gameSequence, setGameSequence] = useState([]);
	const [userInputSequence, setUserInputSequence] = useState([]);
	const [isGameRunning, setIsGameRunning] = useState(false);
	const [isUserTurn, setIsUserTurn] = useState(false);
	const [message, setMessage] = useState("");
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(
		parseInt(localStorage.getItem("highScore") || 0, 10)
	);
	const timeouts = useRef([]);

	const colors = ["green", "red", "yellow", "blue"];

	useEffect(() => {
		if (isGameRunning && !isUserTurn) {
			playGameSequence();
		}
	}, [gameSequence, isGameRunning]);

	const startNewGame = () => {
		clearAllTimeouts();
		setGameSequence([]);
		setUserInputSequence([]);
		setIsGameRunning(true);
		setIsUserTurn(false);
		setCurrentScore(0);
		setMessage("Watch the sequence...");
		addColorToSequence();
	};

	const addColorToSequence = () => {
		const nextColor = colors[Math.floor(Math.random() * colors.length)];
		setGameSequence((prevSequence) => [...prevSequence, nextColor]);
	};

	const playGameSequence = () => {
		setMessage("Watch the sequence...");
		let delay = 600;

		if (!gameSequence) {
			throw new Error("Game sequence is null or undefined");
		}

		gameSequence.forEach((color, index) => {
			if (!color) {
				throw new Error(
					"Game sequence contains null or undefined value"
				);
			}

			const timeoutId = setTimeout(() => {
				lightUpButton(color);
				playSound(color);
			}, delay * (index + 1));
			timeouts.current.push(timeoutId);
		});

		const endTimeoutId = setTimeout(() => {
			setIsUserTurn(true);
			setMessage("Your turn...");
		}, delay * gameSequence.length);
		timeouts.current.push(endTimeoutId);
	};

	const lightUpButton = (color) => {
		const button = document.getElementById(color);
		if (!button) {
			throw new Error(`Button with id ${color} not found`);
		}

		button.classList.add("active");
		setTimeout(() => {
			button.classList.remove("active");
		}, 500);
	};

	const playSound = (color) => {
		const sound = new Audio(`./sounds/${color}.mp3`);
		if (!sound) {
			throw new Error(`Sound file for color ${color} not found`);
		}

		sound.play().catch((error) => {
			console.error(error);
		});
	};

	const playFailSound = () => {
		const failSound = new Audio("./sounds/fail.mp3");
		failSound.play().catch((error) => {
			console.error(error);
		});
	};

	const handleUserInput = (color) => {
		if (!isUserTurn) return;

		const newUserInputSequence = [...userInputSequence, color];
		setUserInputSequence(newUserInputSequence);
		lightUpButton(color);
		playSound(color);

		const currentIndex = newUserInputSequence.length - 1;
		if (newUserInputSequence[currentIndex] !== gameSequence[currentIndex]) {
			setMessage("Wrong sequence! Game over.");
			playFailSound();
			setIsGameRunning(false);
			setIsUserTurn(false);
			updateHighScore();
			return;
		}

		if (newUserInputSequence.length === gameSequence.length) {
			setMessage("Good job! Next round...");
			setUserInputSequence([]);
			setCurrentScore(currentScore + 1);
			setIsUserTurn(false);
			setTimeout(addColorToSequence, 1000);
		}
	};

	const updateHighScore = () => {
		if (currentScore > highScore) {
			setHighScore(currentScore);
			localStorage.setItem("highScore", currentScore.toString());
		}
	};

	const quitGame = () => {
		updateHighScore();
		clearAllTimeouts();
		setIsGameRunning(false);
		setIsUserTurn(false);
		setGameSequence([]);
		setUserInputSequence([]);
		setMessage("Game has been quit. Press 'Start Game' to play again.");
	};

	const clearAllTimeouts = () => {
		if (!timeouts.current) {
			throw new Error("Timeouts array is null or undefined");
		}

		timeouts.current.forEach((timeoutId) => clearTimeout(timeoutId));
		timeouts.current = [];
	};

	return (
		<div className="simon-game">
			<Helmet>
				<title>Play the Simon Game</title>
			</Helmet>
			<h1 className="main-title">Simon Game</h1>
			<p>{message}</p>
			<div className="score-container">
				<h3>Current Score: {currentScore}</h3>
				<h3>High Score: {highScore}</h3>
			</div>
			<div className="button-container">
				{colors.map((color) => (
					<div
						key={color}
						id={color}
						className={`color-button ${color}`}
						onClick={() => handleUserInput(color)}
					></div>
				))}
			</div>
			<div className="game-buttons">
				<button
					className="game-button"
					onClick={startNewGame}
					disabled={isGameRunning}
				>
					Start Game
				</button>
				<button
					className="game-button"
					onClick={quitGame}
					disabled={!isGameRunning}
				>
					Quit Game
				</button>
			</div>
		</div>
	);
};

export default SimonGame;
