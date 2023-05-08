import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
// import Button from '../components/Button/Button'

//TELA PRONTA, + NAVEGACAO NOS BOTOES + INVES DE USAR TOUCHABLEOPACITY AQUI, CRIAR UM COMPONENT BUTTON COM PARAMETRO DE TEXTO E CORE MARGIN

const ProximasVacinas = () => {

    return (

        <View style={styles.container}>
            
            <View style={styles.forms}>

                <View style ={styles.li}>
                  <Text style={styles.label}>BCG</Text>
                  <Text style={styles.label2}>20/09/2024</Text>
                </View>

                <View style ={styles.li}>
                  <Text style={styles.label}>DTpa</Text>
                  <Text style={styles.label2}>20/09/2024</Text>
                </View>

                <View style ={styles.li}>
                  <Text style={styles.label}>Sarampo</Text>
                  <Text style={styles.label2}>03/04/2026</Text>
                </View>
                
                <View style ={styles.botao}>
                    <TouchableOpacity style={styles.button}><Text style={styles.textB}>Nova vacina</Text></TouchableOpacity>
                </View>

            </View>

        </View>
      
    );
};

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
      paddingTop:30,
      alignItems: 'center',
    //   paddingLeft:30
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
      marginTop: 300,
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


export default ProximasVacinas

