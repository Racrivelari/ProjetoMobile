import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0',
        padding: 10,
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
      paddingTop:30,
      alignItems: 'center',
    },
    text:{
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    li:{
      marginBottom: 10,
      backgroundColor: 'white',
      width:'90%',
      height: 50,
      borderRadius: 6,
      paddingLeft:3,
      paddingTop:3
    },
    label: {
      color: '#3F92C5',
      marginRight: 5,
      paddingLeft: 4,
      fontSize: 20,
      fontFamily: 'AveriaLibre-Regular',
    },
    label2:{
        color: 'gray',
        marginRight: 5,
        fontSize: 14,
        paddingLeft: 9,

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
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#37BD6D',
        elevation: 3,
        marginBottom: 50,
    },
    textB:{
      fontSize: 18,
      fontFamily: 'AveriaLibre-Regular',
      color: 'white'
    },
    button: {
      width: 160, 
      height: 40, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#37BD6D', 
      shadowColor: 'black', 
      elevation: 10,
    }
  });
  
export {styles}