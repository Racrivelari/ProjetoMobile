import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import CustomButton from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/LoginStyle'


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

                    <CustomButton onPress={() => props.navigation.push('DrawerNavigation')} color= "#37BD6D" width={140} height={40} text= "Entrar"/> 
                     <CustomButton onPress={() => props.navigation.push('NovaConta')} color= "#419ED7" width={190} height={40} marginTop={70} text= "Criar minha conta"/>
                    <CustomButton onPress={() => props.navigation.push('RecuperarSenha')} color= "#B0CCDE" width={190} height={40} marginTop={70} text= "Esqueci minha senha"/>
                    {/* <CustomButton onPress={() => props.navigation.push('AddDataScreen')} color= "#419ED7" width={190} height={40} marginTop={70} text= "CRUD"/>
                     <CustomButton onPress={() => props.navigation.push('ListDataScreen')} color= "#B0CCDE" width={190} height={40} marginTop={70} text= "RENDER"/> */}
                    {/* <CustomButton onPress={() => props.navigation.push('ArrayVacinas')} color= "#419ED7" width={190} height={40} marginTop={70} text= "ARRAY"/> */}

                </View>

            </View>
        </View>
      
    );
};

export default Login

