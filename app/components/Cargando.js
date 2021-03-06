import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements';

const Cargando = (props) => {

const { isVisible, text} = props;

    return (
        <Overlay
        isVisible={isVisible}
      windowBackgroundColor="rgba(0, 0, 0, 0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
      >
<View style={styles.view}>
       
    <ActivityIndicator size="large" color="#00a680" />
    {text && <Text>{text}</Text>}
</View>

        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height: 100,
        width: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#00a680"
    },
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
    color:"#00a680",
    textTransform: "uppercase",
    marginTop: 10
}
})

export default Cargando
