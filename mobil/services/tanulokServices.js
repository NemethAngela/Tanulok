const host = 'http://localhost:8000/';
const endpoint = "students";  

export async function getTanulok() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
