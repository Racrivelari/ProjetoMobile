import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import CustomButton from '../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';


//TELA PRONTA, + NAVEGACAO NOS BOTOES  
//separar o stylesheet em outro arquivo tbm

const Login = (props) => {

    return (

        <View style={styles.container}>

        <ImageBackground
              style={{flex:1, position: 'absolute',width: '100%',
              height: '100%',}}
              source={require('../assets/images/imgindex.jpg')}> 
              <LinearGradient colors={[ '#d4d4d4', '#b9cdd6b3', '#d4d4d4' ]} style={{ flex: 1 }}/> 
        </ImageBackground>

            
            <View style={styles.content}>
              <Image source={require('../assets/images/icone-vacina.png')}/>
              <Text style={styles.text}>MyHealth</Text>
            </View>

            <View style={styles.content2}>
              <Text style={styles.text2}>Controle as suas vacinas e fique seguro</Text>
            </View>

            <View style={styles.login}>

                <View style ={styles.row}>
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7"/>
                </View>
                
                <View style ={styles.row}>
                  <Text style={styles.label}>Senha</Text>
                  <TextInput style={styles.input}placeholder="********" placeholderTextColor="#419ED7"/>
                </View>

                <View>
                  <Text style={{color: 'red', fontFamily: 'AveriaLibre-Regular', fontSize: 16, marginLeft: 77}}>E-mail e/ou senha inválidos.</Text>
                </View>

                <View style={styles.botoes}>
                    <CustomButton onPress={() => props.navigation.push('Home')} color= "#37BD6D" size={140} text= "Entrar"/>
                    <CustomButton onPress={() => props.navigation.push('NovaConta')} color= "#419ED7" size={190} marginTop={70} text= "Criar minha conta"/>
                    <CustomButton onPress={() => props.navigation.push('RecuperarSenha')} color= "#B0CCDE" size={190} marginTop={70} text= "Esqueci minha senha"/>
                </View>

            </View>
        </View>
      
    );
};

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
    textB:{
      fontSize: 18,
      fontFamily: 'AveriaLibre-Regular',
      color: 'white'
    }  
  });


export default Login

