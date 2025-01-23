import React, { useState } from "react";



//create your first component
const TrafficLight = () => {
	const [ light, setLight] = useState('');

	const handleLight = (color) => {
		setLight(color)
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic light</h1>
			<div className="traffic-light">
				<div onClick={() => handleLight("red")} className={`light red ${(light === "red" ? "glow" : "")}`}></div>
				<div onClick={() => handleLight("yellow")} className={`light yellow ${(light === "yellow" ? "glow" : "")}`}></div>
				<div onClick={() => handleLight("green")} className={`light green ${(light === "green" ? "glow" : "")}`}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
