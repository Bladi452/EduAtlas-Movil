import React, { useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { View, Picker, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const RegistroC = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.vista } >
    <View style={styles.container}>
<View >
      <Image source={require('../../../assets/undraw_Scrum_board_re_wk7v.png')}
          style={styles.logo}
                resizeMode="contain"
          />
              <Text style={styles.text}>Estudiantes</Text>

        </View>

        <Text style={{ marginTop:11, marginBottom:12, fontWeight:"bold" ,fontSize: 15, color: '#EFAF4F'}}>
            Selecciona el curso al que aplicaras
        </Text>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Primero" value="1"/>
        <Picker.Item label="Segundo" value="2"/>
        <Picker.Item label="Tercero" value="3"/>
        <Picker.Item label="Cuarto" value="4"/>
        <Picker.Item label="Quinto" value="5"/>
        <Picker.Item label="Sexto" value="6"/>
      </Picker>
    </View>
<Registrar/>

</View>
  );
}


function Registrar () {

    const navigation = useNavigation();
    return(
    
    <View>

  <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
        style={[styles.sesion, {
          backgroundColor:"#EFAF4F"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Registrate</Text>
      </TouchableOpacity>
 
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
},
  logo: {
    marginTop:0, 
    width: 170,
    height: 170,
    alignSelf :"center",
  },
  text:{
    textAlign:"center",
    color: "#08D5B9",
    fontWeight: "bold",
    fontSize: 30,
  },
  sesion:{
    alignItems:"center",
    height:45,
    width:200,
    borderRadius:8,
    alignSelf:"center",
    marginTop:15
  },
  
});

export default RegistroC;