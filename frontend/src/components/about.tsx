import React from 'react';

const AboutPage = () => {
    return (
        <>
        <div className="flex flex-col gap-y-5 items-center">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-4/5">
                <div className="collapse-title text-xl font-medium">
                    Inspiration
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-4/5">
                <div className="collapse-title text-xl font-medium">
                    How It Was Created
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutPage