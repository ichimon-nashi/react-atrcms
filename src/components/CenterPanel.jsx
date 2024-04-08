import { menuData } from "../components/menuData";
import HomeScreen from "./HomeScreen";
import WelcomeScreen from "./WelcomeScreen";
import LightingScreen from "./LightingScreen";
import TemperatureScreen from "./TemperatureScreen";
import AudioScreen from "./AudioScreen";
import ParameterScreen from "./ParameterScreen";
import MaintenanceScreen from "./MaintenanceScreen";

const CenterPanel = ({ isActiveMenu }) => {

    let contentPage;

    if (isActiveMenu === "lighting") {
        contentPage = (
            <>
                <div className="flex justify-center max-h-[5.31rem] items-center">
                    <h1 className="contentTitle items-center flex">CABIN LIGHTING</h1>
                    <img className="contentImg" src={menuData[2].src} />
                </div>
                <LightingScreen />
            </>
        )
    } else if (isActiveMenu === "temperature") {
        contentPage = (
            <>
                <div className="flex justify-center max-h-[5.31rem] items-center">
                    <h1 className="contentTitle items-center flex">{isActiveMenu.toUpperCase()}</h1>
                    <img className="contentImg" src={menuData[3].src} />
                </div>
                <TemperatureScreen />
            </>
        )
    } else if (isActiveMenu === "audio") {
        contentPage = (
            <>
                <div className="flex justify-center max-h-[5.31rem] items-center">
                    <h1 className="contentTitle items-center flex">{isActiveMenu.toUpperCase()}</h1>
                    <img className="contentImg" src={menuData[4].src} />
                </div>
                <AudioScreen />
            </>
        )
    } else if (isActiveMenu === "parameter") {
        contentPage = (
            <>
                <div className="flex justify-center max-h-[5.31rem] items-center">
                    <h1 className="contentTitle items-center flex">{isActiveMenu.toUpperCase()}</h1>
                    <img className="contentImg" src={menuData[7].src} />
                </div>
                <ParameterScreen />
            </>
        )
    } else if (isActiveMenu === "maintenance") {
        contentPage = (
            <>
                <div className="flex justify-center max-h-[5.31rem] items-center">
                    <h1 className="contentTitle items-center flex">{isActiveMenu.toUpperCase()}</h1>
                    <img className="contentImg" src={menuData[8].src} />
                </div>
                <MaintenanceScreen />
            </>
        )
    } else if (isActiveMenu === "home") {
        contentPage = (
            <>
                <HomeScreen />
            </>
        )
    } else if (isActiveMenu === "welcome") {
        contentPage = (
            <>
                <WelcomeScreen />
            </>
        )
    } 

    return (
        <section className="centerPanel p-4">
            {contentPage}
        </section>
    )
}

export default CenterPanel;