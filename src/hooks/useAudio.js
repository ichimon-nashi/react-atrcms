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
	const [playingAudioInfo, setPlayingAudioInfo] = useState(null); // Track what's actually playing

	const changeAudio = (file) => {
		if (file.src) {
			// Always update the audioInfo to show selection
			setAudioInfo(parseAudioInfo(file));
			
			// Only change the actual audio object if nothing is currently playing
			// AND it's a different track
			if (!playing && audioInfo?.id !== file.id) {
				setAudio(parseAudio(file));
			}
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
			setPlayingAudioInfo(null); // Clear playing info when stopped
		}
	};

	const reloadAudio = () => {
		setPlaying(false);
		if (audio) {
			audio.load();
		}
		// Don't clear playingAudioInfo here since track just ended, not stopped
	};

	const togglePlay = () => {
		playing ? pauseAudio() : playAudio();
	};

	const playAudio = () => {
		if (audio && !playing && audioInfo) {
			audio.play();
			setPlaying(true);
			// Create a copy of audioInfo to avoid reference issues
			setPlayingAudioInfo({ ...audioInfo });
		}
	};

	const pauseAudio = () => {
		if (audio) {
			audio.pause();
			setPlaying(false);
			// Don't clear playingAudioInfo - just paused, not stopped
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
		playingAudioInfo,
	};
};

export default useAudio;