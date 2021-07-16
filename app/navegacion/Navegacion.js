import {useIsFocused } from '@react-navigation/native';
import React,{ useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import Cuenta from '../screens/Cuenta/Cuenta'
import Selec from '../components/navegacion/Selec'

const Navegacion = (({route})=>{

    const [Mat, setMat] = useState(true)

    const isFocused = useIsFocused()

useEffect(() => {
    verificar()
},[isFocused])


const verificar = (()=>{
if ( route.params === undefined ) {
    setMat(true)
}else{
    setMat(false)
    }
})

return(
    (Mat ? <Cuenta/> : <Selec id ={route.params.id}/> )
    )

})

export default Navegacion