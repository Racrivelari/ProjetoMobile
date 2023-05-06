import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import  CustomButton from '../components/Button/Button'

//TELA PRONTA, + NAVEGACAO NOS BOTOES + INVES DE USAR TOUCHABLEOPACITY AQUI, CRIAR UM COMPONENT BUTTON COM PARAMETRO DE TEXTO E CORE MARGIN

const RecuperarSenha = (props) => {

    return (

        <View style={styles.container}>
            
            <View style={styles.nav}>
              <Image source={require('../assets/images/icone-vacina.png')}/>
              <Text style={styles.text}>MyHealth</Text>
            </View>

            <View style={styles.forms}>

                <View style ={styles.li}>
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7"/>
                </View>
                
                <View style ={styles.botao}>
                    <CustomButton onPress={() => props.navigation.push('Login')} color= "#37BD6D" size={160} text= "Recuperar senha"/>
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


export default RecuperarSenha

