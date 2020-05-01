import Axios from 'axios';

const API_URL = 'http://localhost:2000';

// Auth routes
export async function register(body)
{
    const response = await Axios.post(`${API_URL}/users/signup`, body);
    return response;
}

export async function login(body)
{
    const response = await Axios.post(`${API_URL}/users/signin`, body);
    return response;
}

// Data routes
export async function gettEntries(token)
{
    const response = await Axios.get(`${API_URL}/api/accidents`, { headers: {'Authorization': `Basic ${token}`} });
    return response;
}

export async function addEntry(body, token)
{
    const response = await Axios.post(`${API_URL}/api/accidents`, body, { headers: {'Authorization': `Basic ${token}`} });
    return response;
}

export async function deleteEntry(body, token)
{
    const response = await Axios.delete(`${API_URL}/api/accidents/${body.id}`, body, { headers: {'Authorization': `Basic ${token}`} });
    return response;
}

export async function editEntry(body, token)
{
    const response = await Axios.put(`${API_URL}/api/accidents/`, body, { headers: {'Authorization': `Basic ${token}`} });
    return response;
}
