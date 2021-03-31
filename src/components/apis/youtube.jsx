import axios from 'axios';
const KEY = 'AIzaSyCYEY5Y0BmPZ9_pxKhGVEVmMJVztsIPYFQ';

//https://www.googleapis.com/youtube/v3/search?q=wizeline&part=snippet&key=AIzaSyCYEY5Y0BmPZ9_pxKhGVEVmMJVztsIPYFQ
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})