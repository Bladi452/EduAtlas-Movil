const API = 'http://10.0.0.49:3000'

//School

export const getSchools = async () =>{
    const res = await fetch(`${API}/school`)
    return await res.json()
}

export const getMat = async () =>{
    const res = await fetch(`${API}/auth/getmat`)
    return await res.json()
}

export const getUser = async (id) =>{
    const res = await fetch (`${API}/navegacion/${id}`);
    return await res.json();
}

export const getSolicitudes = async (id) =>{
    const res = await fetch (`${API}/solicitudes/${id}`);
    return await res.json();
}
export const approveReq = async (id) =>{
    const res = await fetch (`${API}/apro/${id}`,{
        method: "PUT",
         }
        );
      return res;
    };

export const denyReq = async (id) =>{
    const res = await fetch (`${API}/dene/${id}`,{
        method: "PUT",
         });
    return  res
}

export const getSchool = async (id) =>{
    const res = await fetch (`${API}/school/${id}`);
    return res.json();
}


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

export const getDocs = async (id) =>{
    const res = await fetch (`${API}/document/${id}`);
    return res.json();
}
export const getDownload = async (id) =>{
    const res = await fetch (`${API}/document/descarga/${id}`);
    return res;
}

export const ConecCargo = async(newData) =>{
    const res = await fetch(`${API}/auth/conec/${newData}/1`,{
    method: "POST",
    headers:{
        Accept: 'application/json',
        "Content-Type": 'application/json',
    },
})
}
