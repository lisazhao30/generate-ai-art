import React from 'react';

import '../styling/main.css';

const MainPage = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
            <div className="divider lg:divider-horizontal"></div> 
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        </div>
    )
}

export default MainPage