import { cabinLightData } from "./menuData";
import { useState } from "react";
import LightLevelController from "./LightLevelController";

const LightingScreen = () => {
	const [cabinLight, setCabinLight] = useState({
		Galley: false,
		"Rear Entrance": false,
		Lavatory: false,
		"Rear Cargo": false,
		"Reading Light": false,
		"PSU Ambient White": false,
		"PSU Ambient Blue": false,
	});
	const [cabinLightLevel, setCabinLightLevel] = useState({
		lateral: {
			min: 0,
			max: 4,
			current: 2,
		},
		ceiling: {
			min: 0,
			max: 4,
			current: 2,
		},
	});

	function handleCabinLight(selectedLight) {
		setCabinLight((prevSelectedLight) => {
			return {
				...prevSelectedLight,
				// Toggle PSU lights
				"PSU Ambient White": selectedLight === "PSU Ambient Blue" ? false : prevSelectedLight["PSU Ambient White"],
				"PSU Ambient Blue": selectedLight === "PSU Ambient White" ? false : prevSelectedLight["PSU Ambient Blue"],
				[selectedLight]: !cabinLight[selectedLight],
			};
		});
	}

	const cabinLightButton = cabinLightData.map((item) => {
		return (
			<button
				key={item.id}
				className={`cabinLightButton text-xs md:text-[0.7rem] lg:text-lg p-2 lg:p-4 ${
					cabinLight[item.name] ? "cabinLightOn" : "gradientTitleColor "
				}`}
				onClick={() => handleCabinLight(item.name)}
			>
				{item.name}
			</button>
		);
	});

	return (
		<div className="cabinLightScreen lg:px-4 text-xs md:text-base lg:text-xl xl:text-xl">
			<div className="flex flex-col gap-5">
				<div className="grid grid-cols-7 gap-2 md:gap-4 lg:gap-5 items-stretch">
					{cabinLightButton}
				</div>

				<div className="grid grid-cols-7 gap-2 md:gap-4 lg:gap-5">
					<div className="flex col-span-3">
						<LightLevelController
							title="Cabin Lateral"
							type="lateral"
							lightLevel={cabinLightLevel}
							updateLightLevel={setCabinLightLevel}
						/>
					</div>
					<div className="flex col-span-3">
						<LightLevelController
							title="Cabin Ceiling"
							type="ceiling"
							lightLevel={cabinLightLevel}
							updateLightLevel={setCabinLightLevel}
						/>
					</div>
				</div>

				<div className="grid grid-cols-7 gap-2 md:gap-4 lg:gap-5">
					<div className="gradientTitleColor placeholderBox py-6"></div>
					<div className="gradientTitleColor placeholderBox py-6"></div>
					<div className="gradientTitleColor placeholderBox py-6"></div>
					<div className="gradientTitleColor placeholderBox py-6"></div>
					<div className="gradientTitleColor placeholderBox py-6"></div>
					<div className="gradientTitleColor placeholderBox py-6"></div>
				</div>
			</div>
		</div>
	);
};

export default LightingScreen;
