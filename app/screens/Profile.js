import React,{useState, useEffect}from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import {getUser} from '../../api'
import {useNavigation} from '@react-navigation/native'


const Profile = ({route}) => {
const [user, setUser] = useState({})

const navigation = useNavigation()


const loadUser = async () =>{
    const data =await getUser(route.params.id)
     setUser(data[0])
}

const signout = async () =>{
    navigation.navigate('Login')

}


useEffect(() => {
 
    loadUser()   

    
    
    
}, [])



    return (

        <View style={styles.container}>
            
                <Image style={styles.image} source={{uri:user.Foto}}/>
                            
            <Text style={styles.title}>Perfil</Text>
            <Text style={styles.text}>Nombre: {user.Nombre}</Text>
            <Text style={styles.text}>Apellido: {user.Apellido}</Text>
            <Text style={styles.text}>Email: {user.Correo}</Text>
            <Text style={styles.text}>Matricula: {user.Matricula}</Text>
            <Text style={styles.text}>Fecha de nacimiento: {user.Fecha_Nacimiento}</Text>
<TouchableOpacity onPress={signout} style={styles.button}>
<Text style={styles.buttonText}>Signout</Text>
</TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({   
 container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    },
    title: {    
        fontSize: 20,       
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }

               
})
export default Profile
