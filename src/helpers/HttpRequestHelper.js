import axios from 'axios';

const API_BASE_URL = 'https://admin-api-service-dev.eks-linkqit.com/api/v1/admin';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiRequest = async (method, url, data = null,headers={}, params = null) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers,
        params,
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export default apiRequest;