import { useState, useEffect } from 'react'

const MaintenanceScreen = () => {
    
    const [cpuTemp, setCpuTemp] = useState(40);
    const [cabinTempReception, setCabinTempReception] = useState(2500);

    useEffect(() => {
        const generateRandomCpuTemp = setInterval(()=> {
            setCpuTemp(Math.floor(Math.random() * (78 - 40 + 1) + 40))},1500);

        return () => {
            clearInterval(generateRandomCpuTemp)
        }
    }, []);

    useEffect(() => {
        const generateRandomCabinTemp = setInterval(()=> {
            setCabinTempReception(Math.floor(Math.random() * (20000 - 2000 + 1) + 2000))},1000);

        return () => {
            clearInterval(generateRandomCabinTemp)
        }
    }, []);

    return (
        <div className="flex flex-row justify-center">
            <ul className='maintenanceList'>
                <li>PRODUCT TYPE:</li>
                <li>PART NUMBER:</li>
                <li>SERIAL NUMBER:</li>
                <li>BSP REVISION:</li>
                <li>APPL REVISION:</li>
                <li>PINPROG CONFIG:</li>
                <li>FORWARD FAP:</li>
                <li>CPU TEMPERATURE:</li>
                <li>IFE MEMORY USAGE:</li>
                <li>NETWORK LINK STATUS:</li>
                <li>CABIN TEMP. RECEPTION:</li>
            </ul>
            <ul className='maintenanceList md:ml-20 lg:ml-32'>
                <li>CMS FAP</li>
                <li>046-10641-990</li>
                <li>10261415001</li>
                <li>1.0.4</li>
                <li>1.0.2 (PIC 1.4)</li>
                <li>0</li>
                <li>Disabled</li>
                <li>{cpuTemp}°C</li>
                <li>0%</li>
                <li>GbE: 0 _ CDU: 0 0 0</li>
                <li>OK ({cabinTempReception})</li>
            </ul>
            <button className="maintenanceButton gradientTitleColor absolute px-[2.5rem] py-[1.7rem] m-[1.3rem] right-[20%] bottom-[15%]">Advanced...</button>
        </div>
    )
}

export default MaintenanceScreen