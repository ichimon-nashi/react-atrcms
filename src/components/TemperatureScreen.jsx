import { useState, useEffect } from "react";

const TemperatureScreen = () => {

    const [cabinTemp, setCabinTemp] = useState(23);
    
    useEffect(() => {
        const randomCelciusTemp = setInterval(()=> {
            setCabinTemp(Math.floor(Math.random() * (25 - 22 + 1) + 22))},1500);

        return () => {
            clearInterval(randomCelciusTemp)
        }
    }, []);

    let convertedFahrenheitTemp = Math.floor(cabinTemp * (9/5) + 32);

    return (
        <div className="temperatureScreen w-full max-w-lg mx-auto">
            <h1 className="centerText temp">{cabinTemp}°C</h1>
            <h1 className="centerText temp">{convertedFahrenheitTemp}°F</h1>
        </div>
    )
}

export default TemperatureScreen