import { API_URL } from '../utils/constants';

const registerApi = async (formData) => {
  try {
    const url = `${API_URL}/auth/local/register`; //Endpoint used by Strapi to create users

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

const loginApi = async (formData) => {
  try {
    const url = `${API_URL}/auth/local`; //Endpoint used by Strapi to login users
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }
    const response = await fetch(url, params);
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  registerApi,
  loginApi
}