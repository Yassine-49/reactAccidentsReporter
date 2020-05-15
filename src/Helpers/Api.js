import Axios from 'axios';

const API_URL = 'http://localhost:2000';

// TODO: handle errors here as well

// Auth routes
export async function register(body)
{
    try{
        const response = await Axios.post(`${API_URL}/users/signup`, body);
        return response;
    } catch(error)
    {
        console.log('[e] api -> error:', error);
        return error;
    }
}

export async function login(body)
{
    const response = await Axios.post(`${API_URL}/users/signin`, body);
    return response;
}

// Data routes
// GET
export async function gettEntries(token)
{
    const response = await Axios.get(`${API_URL}/api/accidents`
        , {
            headers: {
                "Authorization": 'Bearer ' + token,
            }
        });
    return response;
}
// POST
export async function addEntry(body, token)
{
    const response = await Axios.post(`${API_URL}/api/accidents`
        , body
        , {
            headers: {
                "Authorization": 'Bearer ' + token,
            }
        });
    return response;
}
// DELETE
export async function deleteEntry(body, token)
{
    const response = await Axios.delete(`${API_URL}/api/accidents/${body.id}`
        , {
            data: {
                body
            },
            
            headers: {
                "Authorization": 'Bearer ' + token,
            }
        });
    return response;
}
// PUT
export async function editEntry(body, token)
{
    const response = await Axios.put(`${API_URL}/api/accidents/`
        , body
        , {
            headers: {
                "Authorization": 'Bearer ' + token,
            }
        });
    return response;
}
