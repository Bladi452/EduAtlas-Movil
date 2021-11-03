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

                <Image style={styles.image} source={require('../../assets/avatar.png')}/>
                <Text style={styles.title}>Perfil</Text>
<View style={styles.Vista}>
            
            <Text style={styles.text}>Nombre: {user.Nombre}</Text>
            <Text style={styles.text}>Apellido: {user.Apellido}</Text>
            <Text style={styles.text}>Email: {user.Correo}</Text>
            <Text style={styles.text}>Matricula: {user.Matricula}</Text>
            <Text style={styles.text}>Fecha de nacimiento: {user.Fecha_Nacimiento}</Text>
            </View>
            
<TouchableOpacity onPress={signout} style={styles.button}>
<Text style={styles.buttonText}>Cerrar Sesion</Text>
</TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({   
 container: {  
    flex: 1,
  alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
            

    },
    title: {    
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',

},
    button: {
        backgroundColor: '#000',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',



    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
                
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        textAlign: 'left',
 },
    Vista:{
        width:"90%",
        alignSelf:"center",
        marginTop:10,
        marginBottom:10,
        backgroundColor:"#ffffff",
        borderRadius:10,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
      
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'center',
    
    }

               
})
export default Profile
