import { useState } from "react";
import { menuData } from "./components/menuData";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import BottomPanel from "./components/BottomPanel";
import CenterPanel from "./components/CenterPanel";
import audio from "./assets/audio/cabinChime.mp3";
import useLongPress from "./hooks/useLongPress";

function App() {
	const [cabinSign, setCabinSign] = useState({
		seatbeltSign: false,
		pedSign: false,
		lavSign: false,
	});

	const [isActiveMenu, setIsActiveMenu] = useState("home");

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
		// plays chime audio file during sign toggle (except lavSign)
		const cabinChime = new Audio(audio);
		cabinChime.volume = 0.3;
		{
			pressedSign !== "lavSign" && cabinChime.play();
		}
	}

	// sets Bottom Menu as active/selected
	function handleActiveMenu(clickedMenu) {
		setIsActiveMenu(clickedMenu);
	}

	return (
		<main>
			<Header />
			<div className="outerWrapper flex flex-col h-[80vh]">
				<div className="flex h-[70vh] lg:h-[67vh]">
					<div className="innerWrapper">
						<CenterPanel isActiveMenu={isActiveMenu} />
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
