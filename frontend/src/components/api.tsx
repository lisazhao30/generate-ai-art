import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch'

export interface Location {
    name: string;
    city: string;
    country: string;
}
export interface URL {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

export interface Link {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface User{
    name: string;
    total_likes: number;
}
export interface Photo {
    alt_description: string;
    current_user_collections: string[];
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    downloads: number;
    likes: number;
    liked_by_user: boolean;
    description: string;
    location: Location;
    urls: URL;
    links: Link;
    user: User;
}

export interface RandomParam {
    callback: (error: string | null, response: Photo[] | null) => void;
    max: number;
  }

export const unsplash = createApi({
  accessKey: 'GpNpY3FuMd9cf0JIpNdkpB9PASeAd0Nn3Ch7vLrqjAA',
  fetch: nodeFetch.default as unknown as typeof fetch,
});

export const browserApi = createApi({
    apiUrl: 'urn:ietf:wg:oauth:2.0:oob',
});

export const getRandomPhoto = async () => {
    try {
        const result: any = await fetch('https://api.unsplash.com/photos/random/' + 
        `?client_id=$GpNpY3FuMd9cf0JIpNdkpB9PASeAd0Nn3Ch7vLrqjAA`);
        console.log(result.response.urls.regular)
        const photoUrl: string = result.response.urls.regular
        return photoUrl;
    }
    catch (error) {  
        console.log(error);
    }

}


