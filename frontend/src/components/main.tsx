import React, { useState } from 'react';
import axios from 'axios';
// import * as mi from '@magenta/image';

import '../styling/main.css';

const MainPage = () => {
    const [image, setImage] = useState<string>('')
    
    const handleChange = (e: any) => {
        setImage(e.target.files[0])
    }
    
    const sendImage = async () => {
        try {
            const url = 'http://localhost:5000/uploadImage'; //apiurl
            const config = { headers: 
                {'content-type': 'multipart/form-data' }
            };
            const formData = new FormData();
            console.log(image)
            formData.append('image', image);
            const response = await axios.post(url, formData, config);
            console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex flex-col w-full lg:flex-row pb-5">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <input type="file" className="file-input w-full max-w-xs" onChange={handleChange}/>
                    <button className="btn" onClick={sendImage}>Submit</button>
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <input type="file" className="file-input w-full max-w-xs" />
                </div> 
            </div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        </>
    )
}

export default MainPage