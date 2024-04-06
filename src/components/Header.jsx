import dcacw from "../assets/images/DCACW.png";
import cabinLayout from "../assets/images/cabinLayout.png";

const Header = () => {
	return (
		<div className="topPanel flex flex-col h-[20vh] md:h-[fit-content]">
			<h3 className="headerTitle gradientTitleColor h-[5vh] flex items-center text-base">
				SERVICE BUS
			</h3>
			<div className="headerImg_container flex justify-between py-2 pl-8 pr-2 h-[15vh]  md:h-[12vh]">
				<img src={dcacw} className="dcacwImg h-full" />
				<img
					src={cabinLayout}
					className="hidden sm:block cabinLayoutImg max-w-sm md:max-w-md lg:max-w-full lg:h-full"
				/>
			</div>
		</div>
	);
};

export default Header;
