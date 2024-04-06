import { Fragment } from "react";
import { BsFile, BsFileFill } from "react-icons/bs";

const LightLevelController = ({
	title,
	type,
	lightLevel,
	updateLightLevel,
}) => {
	const handleIncreaseCabinLightLevel = () => {
		updateLightLevel((prev) => ({
			...prev,
			[type]: { ...prev[type], current: prev[type].current + 1 },
		}));
	};

	const handleDecreaseCabinLightLevel = () => {
		updateLightLevel((prev) => ({
			...prev,
			[type]: { ...prev[type], current: prev[type].current - 1 },
		}));
	};

	return (
		<div className="gradientTitleColor flex items-center justify-center gap-4 lg:gap-6 w-full bg-theme-gray px-4 py-4">
			<button
				onClick={handleDecreaseCabinLightLevel}
				className="bg-transparent controlBtn decreaseLightLevelBtn p-2 lg:px-4"
				disabled={lightLevel[type].current === lightLevel[type].min}
			>
				-
			</button>
			<div className="flex flex-col gap-y-3 items-center">
				<p className="">{title}</p>
				<div className="lightLevelWrapper">
					<div className="flex">
						{Array.from({ length: lightLevel[type].max }, (_, i) => i + 1).map(
							(level) => (
								<Fragment key={level}>
									{level <= lightLevel[type].current ? (
										<BsFileFill className="w-6 h-6" />
									) : (
										<BsFile className="w-6 h-6" />
									)}
								</Fragment>
							)
						)}
					</div>
				</div>
			</div>
			<button
				onClick={handleIncreaseCabinLightLevel}
				className="bg-transparent controlBtn increaseLightLevelBtn p-2 lg:px-4"
				disabled={lightLevel[type].current === lightLevel[type].max}
			>
				+
			</button>
		</div>
	);
};

export default LightLevelController;
