import { useState, useEffect } from "react";

let brightnessLimits = {
	min: 1,
	max: 10,
};
const defaultBrightnessLevel = 8;

const BrightnessControl = () => {
	const [brightnessLevel, setBrightnessLevel] = useState(
		defaultBrightnessLevel
	);

	const handleChangeBrightness = (type) => {
		if (type === "increase" && brightnessLevel < brightnessLimits.max)
			setBrightnessLevel((prev) => prev + 1);
		if (type === "decrease" && brightnessLevel > brightnessLimits.min)
			setBrightnessLevel((prev) => prev - 1);
	};

	useEffect(() => {
		document.body.style.filter = `brightness(${(brightnessLevel / 10).toFixed(
			1
		)})`;
	}, [brightnessLevel]);

	return (
		<div className="w-full px-4 lg:px-10">
			<h3 className="text-center mt-0 md:py-1 text-base lg:text-xl">
				Brightness
			</h3>
			<div className="brightnessControl flex justify-between">
				<button
					className="brightnessButton md:p-2 text-2xl lg:text-4xl"
					onClick={() => handleChangeBrightness("decrease")}
				>
					-
				</button>
				<button
					className="brightnessButton md:p-2 text-2xl lg:text-4xl"
					onClick={() => handleChangeBrightness("increase")}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default BrightnessControl;
