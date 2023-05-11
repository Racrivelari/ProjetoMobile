import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {  
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50
    },
    content2:{
      padding: 10,
      marginTop:50,
    },
    text:{
        fontSize: 50,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
        textDecorationLine: 'underline',
    },
    text2:{
        fontSize: 32,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
        textAlign:'center'
    },
    row:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 15,
      justifyContent: 'center'
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
    botoes:{
      marginTop: 50,
      alignItems: 'center',      
    },
  });

  export {styles}