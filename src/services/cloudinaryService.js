// src/services/cloudinaryService.js
import axios from 'axios';




const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'havencloudinary'); // Use the unsigned upload preset
    formData.append('cloud_name', 'decm244yn'); // Your Cloudinary cloud name
    formData.append('timestamp', (Date.now() / 1000) | 0); // Add a timestamp (Unix timestamp in seconds)
  
    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/decm244yn/image/upload`, formData, {
                    headers: {
                      'X-Requested-With': 'XMLHttpRequest', // Add this header to identify the request as AJAX
                    },
                    
                  });
                  
                  console.log(response.data.url, "Uploaded URL");
                  return response.data.url;
                  
    } catch (error) {
        console.error('Error uploading image to Cloudinary', error);
        throw error;
    }
};

export default uploadToCloudinary;