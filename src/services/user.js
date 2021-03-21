import http from "./http";

async function register(data) {
  try {
    const response = await http.post(`/users/register`, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
async function authenticate(data) {
  try {
    const response = await http.post(`/users/authenticate`, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export { register, authenticate };
