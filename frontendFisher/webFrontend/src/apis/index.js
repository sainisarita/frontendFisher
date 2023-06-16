// import axios from 'axios';
// import { endpoints } from '../util/endpoints';

// export const handleApiCall = async (method = '', url = '', data = {}) => {
// 	let axiosConfig = {
// 		method,
// 		url: `${endpoints.baseUrl}${url}`,
// 		headers: {
// 			token: `${localStorage.getItem('token')}`
// 		}
// 	};
// 	console.log("***"+method+url+"data"+data)
// 	if (method !== 'get') axiosConfig['data'] = data;
// 		try {
// 		let response = await axios(axiosConfig);
// 		return response;
// 	} catch (error) {
// 		console.warn(error.response.data.message);
// 	}
// };

import axios from 'axios';
import { endpoints } from '../util/endpoints';

export const handleApiCall = async (method = '', url = '', data = {}) => {
  let axiosConfig = {
    method,
    url: `${endpoints.baseUrl}${url}`,
    headers: {
      token: localStorage.getItem('token')
    }
  };
  
  console.log("***" + method + url + "data", data);
  
  if (method !== 'get') {
    axiosConfig.data = data; // Assign the 'data' object directly to 'axiosConfig.data'
  }
  
  try {
    let response = await axios(axiosConfig);
    return response;
  } catch (error) {
    console.warn(error.response.data.message);
    throw error; // Re-throw the error to handle it in the component
  }
};
