import BrightnessControl from "./BrightnessControl";

const BottomPanel = ({ menuList, isActiveMenu, handleActiveMenu }) => {

	return (
		<div className="bottomPanel flex h-[14dvh]">
			<div className="flex divide-x-2 divide-gray-300 w-[80dvw]">{menuList}</div>
			<div className="brightness_container mt-auto h-full w-[20dvw] flex items-center justify-center">
				<BrightnessControl />
			</div>
		</div>
	);
};

export default BottomPanel;
