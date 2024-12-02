// Bottom menu data
import homeIcon from "../assets/images/homeIcon.png";
import homeIconActive from "../assets/images/homeIcon-selected.png";
import welcomeIcon from "../assets/images/welcomeIcon.png";
import welcomeIconActive from "../assets/images/welcomeIcon-selected.png";
import lightingIcon from "../assets/images/lightingIcon.png";
import lightingIconActive from "../assets/images/lightingIcon-selected.png";
import temperatureIcon from "../assets/images/temperatureIcon.png";
import temperatureIconActive from "../assets/images/temperatureIcon-selected.png";
import audioIcon from "../assets/images/audioIcon.png";
import audioIconActive from "../assets/images/audioIcon-selected.png";
import blankIcon from "../assets/images/blankIcon.png";
import parameterIcon from "../assets/images/parameterIcon.png";
import parameterIconActive from "../assets/images/parameterIcon-selected.png";
import maintenanceIcon from "../assets/images/maintenanceIcon.png";
import maintenanceIconActive from "../assets/images/maintenanceIcon-selected.png";

export const menuData = [{
    id: 0,
    name: 'home',
    src: homeIcon,
    srcActive: homeIconActive,
}, {
    id: 1, 
    name: 'welcome',
    src: welcomeIcon,
    srcActive: welcomeIconActive,
}, {
    id: 2,
    name: 'lighting',
    src: lightingIcon,
    srcActive: lightingIconActive,
}, {
    id: 3, 
    name: 'temperature',
    src: temperatureIcon,
    srcActive: temperatureIconActive,
}, {
    id: 4, 
    name: 'audio',
    src: audioIcon,
    srcActive: audioIconActive,
}, {
    id: 5,
    name: 'blank',
    src: blankIcon,
    srcActive: blankIcon,
}, {
    id: 6, 
    name: 'blank',
    src: blankIcon,
    srcActive: blankIcon,
}, {
    id: 7,
    name: 'parameter',
    src: parameterIcon,
    srcActive: parameterIconActive,
}, {
    id: 8,
    name: 'maintenance',
    src: maintenanceIcon,
    srcActive: maintenanceIconActive,
}];

// Light panel data
export const cabinLightData = [{
    id: 0,
    name: "Galley",
}, {
    id: 1,
    name: "Rear Entrance",
}, {
    id: 2,
    name: "Lavatory",
}, {
    id: 3,
    name: "Rear Cargo",
}, {
    id: 4,
    name: "Reading Light",
}, {
    id: 5,
    name: "PSU Ambient White",
}, {
    id: 6,
    name: "PSU Ambient Blue",
}];

// Audio panel data
import pa_mazhu from "../assets/audio/paappendix4.mp3"
import pa_atpcs from "../assets/audio/pa0510.mp3";
import pa_paxBoarding from "../assets/audio/pa0101.mp3";
import pa_paxBoardingMilitary from "../assets/audio/pa0101m.mp3";
import pa_afterDoorClose from "../assets/audio/pa0102.mp3";
import pa_demoFemale from "../assets/audio/pa0202f.mp3";
import pa_demoMale from "../assets/audio/pa0202m.mp3";
import pa_approach from "../assets/audio/pa0402.mp3";
import pa_approachMilitary from "../assets/audio/pa0402m.mp3";
import pa_afterLanding from "../assets/audio/pa0501.mp3";
import pa_cppLandA from "../assets/audio/pa0607a.mp3";
import pa_cppLandB from "../assets/audio/pa0607b.mp3";
import pa_cppWaterA from "../assets/audio/pa0608a.mp3";
import pa_cppWaterB from "../assets/audio/pa0608b.mp3";
import pa_cppWaterC from "../assets/audio/pa0608c.mp3";
import music_boardingA from "../assets/audio/boardinga.mp3";
import music_boardingB from "../assets/audio/boardingb.mp3";
import cny_music from "../assets/audio/cnymusic.mp3";
import xmas_music from "../assets/audio/xmasmusic.mp3";

export const AudioData = [{
    id: 0,
    trackname: "!App4Matsu After Demo.mp3",
    category: "pa",
    src: pa_mazhu,
},{
    id: 1,
    trackname: "!PA-05-10 ATPCS.mp3",
    category: "pa",
    src: pa_atpcs,
},{
    id: 2,
    trackname: "1_PA-01-01 PAX Boarding.mp3",
    category: "pa",
    src: pa_paxBoarding,
},{
    id: 3,
    trackname: "2_PA-01-01 (M)_PAX Boarding.mp3",
    category: "pa",
    src: pa_paxBoardingMilitary,
},{
    id: 4,
    trackname: "3_PA-01-02 Door is closed.mp3",
    category: "pa",
    src: pa_afterDoorClose,
},{
    id: 5,
    trackname: "4_PA-02-02a DEMO(f).mp3",
    category: "pa",
    src: pa_demoFemale,
},{
    id: 6,
    trackname: "4_PA-02-02a DEMO(m).mp3",
    category: "pa",
    src: pa_demoMale,
},{
    id: 7,
    trackname: "5_PA-04-02 Final Approach.mp3",
    category: "pa",
    src: pa_approach,
},{
    id: 8,
    trackname: "5_PA-04-02 (M)_Final Approach.mp3",
    category: "pa",
    src: pa_approachMilitary,
},{
    id: 9,
    trackname: "6_PA-05-01 After Landing.mp3",
    category: "pa",
    src: pa_afterLanding,
},{
    id: 10,
    trackname: "7a_PA-06-7 CPP Land.mp3",
    category: "pa",
    src: pa_cppLandA,
},{
    id: 11,
    trackname: "7b_PA-06-07 CPP Land.mp3",
    category: "pa",
    src: pa_cppLandB,
},{
    id: 12,
    trackname: "8a_PA-06-08 CPP Water.mp3",
    category: "pa",
    src: pa_cppWaterA,
},{
    id: 13,
    trackname: "8b_PA-06-08 CPP Water.mp3",
    category: "pa",
    src: pa_cppWaterB,
},{
    id: 14,
    trackname: "8c_PA-06-08 CPP Water.mp3",
    category: "pa",
    src: pa_cppWaterC,
},{
    id: 15,
    trackname: "Boarding Music A.mp3",
    category: "music",
    src: music_boardingA,
},{
    id: 16,
    trackname: "Boarding Music B.mp3",
    category: "music",
    src: music_boardingB,
},{
    id: 17,
    trackname: "Chinese New Year Music.mp3",
    category: "music",
    src: cny_music,
},{
    id: 18,
    trackname: "Christmas Music.mp3",
    category: "music",
    src: xmas_music,
}]