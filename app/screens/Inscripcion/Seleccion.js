import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function Seleccion (){
    return(

        <View style={styles.Vista}>

<Text style={[styles.letero, {   fontSize:80,
      }]}>EduAtlas</Text> 

<Text style={[styles.letero,{ fontSize:15, marginTop:20
}]}>Aqui tenemos las escuelas para ti</Text>

           <TouchableOpacity
           style={styles.Molde}
           >
               <Image source="../../../assets/Grupo.png" style={styles.logo} />
    <Text style={styles.let}>Politecnico Max Henriquez</Text>
           </TouchableOpacity>


        </View>
    )
}



const styles = StyleSheet.create({

    Molde:{
        backgroundColor:"#EBEBEB",
     width:"90%",
     height:40,
     borderRadius:11,
     alignItems: "center",
     marginLeft:20,
     marginTop:12
    },

    Vista:{
        height:"100%",
  backgroundColor:"#08D5B9"        
    },
  
    letero:{
        fontWeight:"bold",
        color:"#ffffff",
        textAlign:"center"
    },
  
    let:{
        marginTop:9
    },
    logo:{    
        marginTop:0, 
        width: 5,
        height: 5,
        alignSelf :"center",}
    
})