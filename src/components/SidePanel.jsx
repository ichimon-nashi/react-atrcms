import seatbeltSignImageOff from "../assets/images/seatbeltOff.png";
import seatbeltSignImageOn from "../assets/images/seatbeltOn.png";
import pedSignImageOff from "../assets/images/pedSign-off.png";
import pedSignImageOn from "../assets/images/pedSign-on.png";
import lavSignImageOff from "../assets/images/lavSign-off.png";
import lavSignImageOn from "../assets/images/lavSign-on.png";

const SidePanel = ({ cabinSign, handleCabinSign }) => {
	return (
		<div className="sidePanel flex flex-col h-[68dvh]">
			<div className="grid grid-rows-2 h-[45%] divide-y-2 divide-theme-gray-dark">
				<button
					onClick={() => handleCabinSign("seatbeltSign")}
					className="row-span-1"
				>
					<img
						className="sidePanelImg h-full mx-auto"
						src={
							cabinSign["seatbeltSign"]
								? seatbeltSignImageOn
								: seatbeltSignImageOff
						}
					/>
				</button>

				<button
					onClick={() => handleCabinSign("pedSign")}
					className="row-span-1"
				>
					<img
						className="sidePanelImg h-full mx-auto"
						src={cabinSign["pedSign"] ? pedSignImageOn : pedSignImageOff}
					/>
				</button>
			</div>
			<button className="h-[55%]" onClick={() => handleCabinSign("lavSign")}>
				<img
					className="sidePanelImg lavSignImg w-full h-full"
					src={cabinSign["lavSign"] ? lavSignImageOn : lavSignImageOff}
				/>
			</button>
		</div>
	);
};

export default SidePanel;
