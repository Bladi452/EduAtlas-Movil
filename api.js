const API = 'http://10.0.0.14:3000'

export const signup =  async(newdata) =>{
    await fetch(API,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    });
};