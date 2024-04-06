import { useState } from "react";
import { BsFillSquareFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import useAudio from "../hooks/useAudio";
import { AudioData } from "./menuData";
import AudioVolumeController from "./AudioVolumeController";

const AudioScreen = () => {
	const [activeControlBtn, setActiveControlBtn] = useState("stop");
	const {
		playing,
		changeAudio,
		volume,
		changeAudioVolume,
		resetAudio,
		playAudio,
		pauseAudio,
		audioInfo,
	} = useAudio();

	const handleClickPlay = () => {
		setActiveControlBtn("play");
		playAudio();
	};

	const handleClickPause = () => {
		setActiveControlBtn("pause");
		pauseAudio();
	};

	const handleClickStop = () => {
		setActiveControlBtn("stop");
		resetAudio();
	};

	const audioListByCategory = (category) => {
		return AudioData.filter((audio) => audio.category === category).map(
			(item) => {
				const activeTrack = audioInfo?.id === item.id;
				return (
					<li
						className={`flex items-center justify-between p-3 cursor-pointer ${
							activeTrack ? "bg-white text-gray-800" : ""
						}`}
						key={item.id}
						onClick={() => changeAudio(item)}
					>
						<span className="truncate">{item.trackname}</span>
						{activeTrack && playing && (
							<span className="playing-animation relative -right-3 scale-75 lg:scale-100"></span>
						)}
					</li>
				);
			}
		);
	};

	return (
		<div className="audioPanel w-full flex flex-col justify-evenly gap-y-2">
			<div className="grid grid-cols-2 gap-2">
				<div className="col-span-1 bg-theme-gray">
					<h3 className="gradientTitleColor text-2xl p-4 text-center">ANNOUNCEMENT SELECTION</h3>
					<ul className="scrollbar text-2xl audioList max-h-[32vh] divide-y-2 divide-theme-gray-light overflow-y-auto">
						{audioListByCategory("pa")}
					</ul>
				</div>
				<div className="col-span-1 bg-theme-gray">
					<h3 className="gradientTitleColor text-2xl p-4 text-center">MUSIC SELECTION</h3>
					<ul className="scrollbar text-2xl audioList max-h-[32vh] divide-y-2 divide-theme-gray-light overflow-y-auto">
						{audioListByCategory("music")}
					</ul>
				</div>
			</div>
			<div className="flex items-stretch justify-between">
				<div className="flex h-full items-stretch gap-2 ml-28">
					<button
						className={`text-3xl xl:text-5xl h-full aspect-square p-2 flex items-center justify-center ${
							activeControlBtn === "play"
								? "bg-white text-theme-gray"
								: "gradientTitleColor"
						}`}
						onClick={handleClickPlay}
						disabled={!(audioInfo && !playing)}
					>
						<BsPlayFill />
					</button>
					<button
						className={`text-3xl xl:text-5xl h-full aspect-square p-2 flex items-center justify-center ${
							activeControlBtn === "pause"
								? "bg-white text-theme-gray"
								: "gradientTitleColor"
						}`}
						onClick={handleClickPause}
						disabled={!playing}
					>
						<BsPauseFill />
					</button>
					<button
						className={`text-3xl xl:text-4xl h-full aspect-square p-2 flex items-center justify-center ${
							activeControlBtn === "stop"
								? "bg-white text-theme-gray"
								: "gradientTitleColor"
						}`}
						onClick={handleClickStop}
					>
						<BsFillSquareFill className="text-xl xl:text-3xl" />
					</button>
				</div>

				<div className="max-w-md flex items-stretch">
					<AudioVolumeController
						title="Volume"
						volume={volume}
						volumeLevels={4}
						changeAudioVolume={changeAudioVolume}
					/>
				</div>
			</div>
		</div>
	);
};

export default AudioScreen;
