import http from "./http";

async function getParty(id) {
  try {
    const response = await http.get(`/api/parties/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
async function getParties(offset, limit) {
  try {
    const response = await http.get(`/api/parties`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
async function createParty(party) {
  try {
    const response = await http.post(`/parties`, party);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
async function updateParty(id, party) {
  try {
    const response = await http.put(`/parties/${id}`, party);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
async function deleteParty(id) {
  try {
    const response = await http.delete(`/parties/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export { getParty, getParties, createParty, updateParty, deleteParty };
