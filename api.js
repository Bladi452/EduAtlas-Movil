//const API = 'http://tecnodiaz.es/server-edu'
    const API = 'http://10.0.0.37:3000/server-edu'
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

export const getEvents = async (id) =>{
    const res = await fetch (`${API}/events/${id}`);
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

export const getSchoolLenght = async (id) =>{
    const res = await fetch(`${API}/school/length/${id}`)
    return res.json()
}

export const getSolicitud = async(id) =>{
    const res = await fetch(`${API}/navegacionSel/${id}`)
    return res.json()
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
