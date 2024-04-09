import dcacw from "../assets/images/DCACW.png";
import cabinLayout from "../assets/images/cabinLayout.png";

const Header = () => {
	return (
		<div className="flex flex-col h-[20dvh] ">
			<h3 className="headerTitle gradientTitleColor max-h-[5dvh] flex items-center">
				SERVICE BUS
			</h3>
			<div className="headerImgContainer flex justify-between">
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
