import React from 'react'

const ParameterScreen = () => {
    return (
        <div className="w-full flex flex-row justify-around gap-y-2">
            <div className="flex flex-col ml-16">
                <button className='parameterButton gradientTitleColor'>AIRLINE LOGO</button>
                <button className='parameterButton gradientTitleColor'>FLIGHT NUMBER</button> 
                <button className='parameterButton gradientTitleColor'>SCREEN SAVER</button> 
                <button className='parameterButton gradientTitleColor'>ANNOUNCEMENT</button>
            </div>
            <div className="flex flex-col mr-16">
                <button className='parameterButton gradientTitleColor'>WELCOME MESSAGE</button> 
                <button className='parameterButton gradientTitleColor'>DESTINATION</button> 
                <button className='parameterButton gradientTitleColor'>MUSIC</button>
            </div>
        </div>
    )
}

export default ParameterScreen