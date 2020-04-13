import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID 6tbJQG_BvrvEOPIuihwgOdyKFCvJN64c3K2YYzJ8dSg'
      }
});
