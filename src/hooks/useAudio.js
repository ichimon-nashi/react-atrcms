import { useState, useEffect } from "react";

const parseAudioInfo = (audioFile) => {
	const info = audioFile
		? {
				id: audioFile.id,
				category: audioFile.category,
				trackname: audioFile.trackname,
		  }
		: null;
	return info;
};

const parseAudioVolume = (percentage) => {
	return (percentage / 100).toFixed(1);
};

let audioVolumeLimits = {
	min: 0,
	max: 100,
};
const defaultAudioVolumeLevel = 50;

const parseAudio = (audioFile) => {
	return audioFile?.src ? new Audio(audioFile.src) : null;
};

const isValidVolumeLevel = (volume) => {
	return volume >= audioVolumeLimits.min && volume <= audioVolumeLimits.max;
};

const useAudio = (audioFile, autoPlay = false) => {
	const [audio, setAudio] = useState(parseAudio(audioFile));
	const [volume, setVolume] = useState(defaultAudioVolumeLevel);
	const [playing, setPlaying] = useState(false);
	const [audioInfo, setAudioInfo] = useState(parseAudioInfo(audioFile));

	const changeAudio = (file) => {
		if (file.src) {
			pauseAudio();
			setAudio(parseAudio(file));
			setAudioInfo(parseAudioInfo(file));
		}
	};

	const changeAudioVolume = (type, volumeLevels) => {
		const diff = 100 / volumeLevels;

		setVolume((prev) => {
			let updatedVolume = prev;
			if (type === "increase") updatedVolume += diff;
			if (type === "decrease") updatedVolume -= diff;
			return isValidVolumeLevel(updatedVolume) ? updatedVolume : prev;
		});
	};

	const resetAudio = () => {
		if (audio) {
			pauseAudio();
			setAudio(null);
			setAudioInfo(null);
		}
	};

	const reloadAudio = () => {
		pauseAudio();
		audio.load();
	};

	const togglePlay = () => {
		playing ? pauseAudio() : playAudio();
	};

	const playAudio = () => {
		if (audio) {
			audio.play();
			setPlaying(true);
		}
	};

	const pauseAudio = () => {
		if (audio) {
			audio.pause();
			setPlaying(false);
		}
	};

	useEffect(() => {
		if (audio && autoPlay) {
			playAudio();
		}

		if (audio) {
			audio.addEventListener("ended", reloadAudio);
			return () => {
				audio.removeEventListener("ended", reloadAudio);
			};
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audio]);

	useEffect(() => {
		if (audio) {
			audio.volume = parseAudioVolume(volume);
		}
	}, [audio, volume]);

	return {
		playing,
		playAudio,
		pauseAudio,
		changeAudio,
		volume,
		changeAudioVolume,
		resetAudio,
		togglePlay,
		audioInfo,
	};
};

export default useAudio;
