import React,{useState, useEffect}from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {getUser} from '../../api'

const Profile = ({route}) => {
const [user, setUser] = useState([])
useEffect(() => {
 
        setUser(route.params.id)
    
    
}, [])

    return (

        <View style={styles.container}>
            <Text>{user}</Text>

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
