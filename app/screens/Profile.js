import React,{useState, useEffect}from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {getUser} from '../../api'
import {useNavigation} from '@react-navigation/native'


const Profile = ({route}) => {
const [user, setUser] = useState([])

const navigation = useNavigation()


const loadUser = async () =>{
    const data =await getUser(route.params.id)
    console.log(data)
}


useEffect(() => {
 
    loadUser()   

    
    
    
}, [])


    return (

        <View style={styles.container}>
            <Text>profile</Text>

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

               
})
export default Profile
