const API = 'http://10.0.0.3:3000'

//School

export const getSchools = async () =>{
    const res = await fetch(`${API}/school`)
    return await res.json()
}

export const getUser = async (id) =>{
    const res = await fetch (`${API}/navegacion/${id}`);
    return await res.json();
}

export const getSchool = async (id) =>{
    const res = await fetch (`${API}/school/${id}`);
    return res.json();
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

export const getMessage = async(id)=>{
    const res = await fetch(`${API}/chat/message/${id}`)
    return res.json()
}

export const getChat = async(id)=>{
    const res = await fetch(`${API}/chat/${id}`)
    return res.json()
}

export const sendMessage = async (newdata) =>{
    await fetch(`${API}/chat`,{
        method: "POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    });
}

export const getSolicitud = async(id) =>{
    const res = await fetch(`${API}/navegacionSel/${id}`)
    return res.json()
}

export const uploadImg = async(obj) =>{
    const res = await fetch(`${API}/document/${obj.id}/${obj.escu}`,{
        method: "POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": 'multipart/form-data',
        },
        body: JSON.stringify(obj.pick),
    });
}

export const getDocs = async(id) =>{
    const res = await fetch(`${API}/document/:mat${id}`)
    return res.json()
}

export const ConecCargo = async() =>{
    const res = await fetch(`${API}/auth/conec/`,{
    method: "POST",
    headers:{
        Accept: 'application/json',
        "Content-Type": 'application/json',
    },    
})
}
