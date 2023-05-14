import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    nav: {  
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#C1E7E3',
    },
    forms:{
      backgroundColor: '#ADD5D0',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    li:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 60,
    },
    label: {
      color: 'white',
      marginRight: 5,
      fontSize: 20,
      fontFamily: 'AveriaLibre-Regular',
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: 300,
      marginLeft: 5,
      fontSize: 18,
      fontFamily: 'AveriaLibre-Regular',
    },
    botao:{
      marginTop: 60,
    },
  });

export {styles}