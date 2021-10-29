//const API = 'http://tecnodiaz.es/server-edu'
    const API = 'http://10.0.0.37:3000/server-edu'
//School

export const getSchools = async () =>{
    const res = await fetch(`${API}/school`)
    const data = await res.json()
    return data
   
}

export const getMat = async () =>{
    const res = await fetch(`${API}/auth/getmat`)
    const data = await res.json()
    return data
}

export const getUser = async (id) =>{
    const res = await fetch (`${API}/navegacion/${id}`);
    const data = await res.json()
    return data
}

export const getEvents = async (id) =>{
    const res = await fetch (`${API}/events/${id}`);
    const data = await res.json()
    return data
}

export const getSolicitudes = async (id) =>{
    const res = await fetch (`${API}/solicitudes/${id}`);
    const data = await res.json()
    return data
}
export const approveReq = async (id) =>{
    const res = await fetch (`${API}/apro/${id}`,{
        method: "PUT",
         }
        );
    const data = await res.json()
    return data
      
    };

export const denyReq = async (id) =>{
    const res = await fetch (`${API}/dene/${id}`,{
        method: "PUT",
         });
    const data = await res.json()   
    return data
}

export const getSchool = async (id) =>{
    const res = await fetch (`${API}/school/${id}`);
    return res.json();
}


export const solicitud = async (newdata) =>{
  const res = await fetch(`${API}/school/req`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        
    });     const data = await res.json()
    return data

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
    return res.json()

}
