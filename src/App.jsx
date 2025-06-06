import { useState, useRef, useEffect } from "react";
import { menuData } from "./components/menuData";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import BottomPanel from "./components/BottomPanel";
import CenterPanel from "./components/CenterPanel";
import audio from "./assets/audio/cabinChime.mp3";
import useLongPress from "./hooks/useLongPress";
import useAudio from "./hooks/useAudio";

function App() {
	const [cabinSign, setCabinSign] = useState({
		seatbeltSign: false,
		pedSign: false,
		lavSign: false,
	});

	const [isActiveMenu, setIsActiveMenu] = useState("home");
	
	// Audio state moved to App level to persist across screen changes
	const audioControls = useAudio();
	
	// Create a ref to store the preloaded audio
	const cabinChimeRef = useRef(null);

	// Preload the audio file when component mounts
	useEffect(() => {
		cabinChimeRef.current = new Audio(audio);
		cabinChimeRef.current.volume = 0.3;
		cabinChimeRef.current.preload = 'auto';
	}, []);

	const defaultOptions = {
		shouldPreventDefault: true,
		delay: 3000,
	};
	const longPressEventForParameters = useLongPress(
		() => handleActiveMenu("parameter"),
		() => {},
		defaultOptions
	);
	const longPressEventForMaintenance = useLongPress(
		() => handleActiveMenu("maintenance"),
		() => {},
		defaultOptions
	);

	const menuList = menuData.map((item) => {
		if (item.name === "parameter")
			return (
				<button
					className="menuButton h-full w-full"
					key={item.id}
					{...longPressEventForParameters}
				>
					<img
						className="aspect-square h-full w-full"
						src={isActiveMenu === item.name ? item.srcActive : item.src}
					/>
				</button>
			);

		if (item.name === "maintenance")
			return (
				<button
					className="menuButton h-full w-full"
					key={item.id}
					{...longPressEventForMaintenance}
				>
					<img
						className="aspect-square h-full w-full"
						src={isActiveMenu === item.name ? item.srcActive : item.src}
					/>
				</button>
			);

		return (
			<button
				className="menuButton h-full w-full"
				key={item.id}
				onClick={() => handleActiveMenu(item.name)}
			>
				<img
					className="aspect-square h-full w-full"
					src={isActiveMenu === item.name ? item.srcActive : item.src}
				/>
			</button>
		);
	});

	// Side Panel Cabin Sign
	function handleCabinSign(pressedSign) {
		setCabinSign((prevCabinSign) => {
			return {
				...prevCabinSign,
				[pressedSign]: !cabinSign[pressedSign],
			};
		});
		
		// Play chime audio file during sign toggle (except lavSign)
		if (pressedSign !== "lavSign" && cabinChimeRef.current) {
			// Reset the audio to the beginning and play
			cabinChimeRef.current.currentTime = 0;
			cabinChimeRef.current.play().catch(error => {
				console.warn('Audio play failed:', error);
			});
		}
	}

	// sets Bottom Menu as active/selected
	function handleActiveMenu(clickedMenu) {
		setIsActiveMenu(clickedMenu);
	}

	return (
		<main>
			<Header />
			<div className="outerWrapper flex flex-col h-[80dvh]">
				<div className="topPortion flex h-[d68vh]">
					<div className="innerWrapper">
						<CenterPanel isActiveMenu={isActiveMenu} audioControls={audioControls} />
					</div>
					<SidePanel cabinSign={cabinSign} handleCabinSign={handleCabinSign} />
				</div>
				<BottomPanel
					menuList={menuList}
					isActiveMenu={isActiveMenu}
					handleActiveMenu={handleActiveMenu}
				/>
			</div>
		</main>
	);
}

export default App;