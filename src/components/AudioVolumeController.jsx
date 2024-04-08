import { Fragment } from "react";
import { BsFile, BsFileFill } from "react-icons/bs";

const AudioVolumeController = ({
	title = "",
	volume,
	volumeLevels,
	changeAudioVolume,
}) => {
    const isVolumeLevelActive = (level) => {
        return level <= (volume / (100 / volumeLevels));
    }

	return (
		<div className="gradientTitleColor flex items-center justify-center md:gap-2 lg:gap-16 w-full bg-theme-gray p-4">
			<button
				onClick={() => changeAudioVolume("decrease", volumeLevels)}
				className="bg-transparent controlBtn decreaseLightLevelBtn p-2 lg:px-4"
				disabled={volume <= 0}
			>
				-
			</button>
			<div className="flex flex-col gap-y-3 items-center">
				<p className="">{title}</p>
				<div className="audioLevelWrapper">
					<div className="flex">
						{Array.from({ length: volumeLevels }, (_, i) => i + 1).map(
							(level) => (
								<Fragment key={level}>
									{isVolumeLevelActive(level) ? (
										<BsFileFill className="w-4 h-4 lg:w-6 lg:h-6" />
									) : (
										<BsFile className="w-4 h-4 lg:w-6 lg:h-6" />
									)}
								</Fragment>
							)
						)}
					</div>
				</div>
			</div>
			<button
				onClick={() => changeAudioVolume("increase", volumeLevels)}
				className="bg-transparent controlBtn increaseLightLevelBtn p-2 lg:px-4"
				disabled={volume >= 100}
			>
				+
			</button>
		</div>
	);
};

export default AudioVolumeController;
