const API = 'http://10.0.0.14:3000'

//School

export const getSchools = async () =>{
    const res = await fetch(`${API}/school`)
    return await res.json()
}

export const getSchool = async (id) =>{
    const res = await fetch (`${API}/school/${id}`);
    return await res.json();
}

export const signup =  async(newdata) =>{
    await fetch(`${API}/auth/regis`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    });
};

export const solicitud = async (newdata) =>{
    await fetch(`${API}/school/req`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    });
}