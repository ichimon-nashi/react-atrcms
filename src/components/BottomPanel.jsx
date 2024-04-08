import BrightnessControl from "./BrightnessControl";

const BottomPanel = ({ menuList, isActiveMenu, handleActiveMenu }) => {

	return (
		<div className="bottomPanel flex h-[12vh]">
			<div className="flex divide-x-2 divide-gray-300 w-[80vw]">{menuList}</div>
			<div className="brightness_container mt-auto h-full w-[20vw] flex items-center justify-center">
				<BrightnessControl />
			</div>
		</div>
	);
};

export default BottomPanel;
