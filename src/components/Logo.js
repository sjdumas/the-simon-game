export default function Logo() {
	return (
		<div className="logo">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 200 200"
				className="responsive-logo"
			>
				<circle
					cx="100"
					cy="100"
					r="90"
					fill="black"
				/>

				<path
					d="M100,100 L100,10 A90,90 0 0,1 190,100 Z"
					fill="blue"
				/>
				<path
					d="M100,100 L190,100 A90,90 0 0,1 100,190 Z"
					fill="green"
				/>
				<path
					d="M100,100 L100,190 A90,90 0 0,1 10,100 Z"
					fill="red"
				/>
				<path
					d="M100,100 L10,100 A90,90 0 0,1 100,10 Z"
					fill="yellow"
				/>

				<circle
					cx="100"
					cy="100"
					r="35"
					fill="black"
				/>

				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					fill="white"
					fontSize="16"
					fontFamily="Chakra Petch, Arial"
					dy=".3em"
				>
					SIMON
				</text>
			</svg>
		</div>
	);
};
