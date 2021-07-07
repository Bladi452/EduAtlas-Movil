import {useNavigation} from '@react-navigation/native'
const API = 'http://10.0.0.14:3000'

const verificar = token => {
    fetch(`${API}/auth/private`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        
    }).then(async res =>{
        try {
            const jsonRes = await res.json();
            if (res.status === 200) {

                navigate.navigate("Seleccion")
            }
        } catch (err) {
            console.log(err);
        };
    }).catch(err =>{
        console.log(err)
    })
}

export const signIn = async (newdata) =>{
      await  fetch(`${API}/auth/login`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newdata),
        }).then(async res =>{
      try {
          const jsonRes = await res.json();
          if (res.status !==200) {
              let err = jsonRes.message;
              console.log(err)
          }else{
              verificar(jsonRes.token);
          }
      } catch (error) {
          console.log(err)
      };
    })
    .catch(err =>{
        console.log(err)
    })
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