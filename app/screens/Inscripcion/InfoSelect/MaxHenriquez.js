import React from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Image,StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
export default function MaxHenriquez (){
   const navigate = useNavigation()
    

 return(
    <ScrollView>
        <View>
            
<Image source={require("../../../../assets/Imagen.png")}
    style={styles.logo}
/>
            
        <Text style={styles.textsec}>Politécnico Max Henriquez Ureña</Text>
    
            
        </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
textsec:{
    alignSelf:"center",
    marginTop:11,
    marginBottom:20,
    fontWeight:"bold",
    fontSize:25,
  },

  logo: {
    marginTop:0, 
    width:50 ,
    height: 50,
    alignSelf :"center",
  },
})