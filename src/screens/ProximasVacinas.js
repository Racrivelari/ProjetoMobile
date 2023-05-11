import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import {styles} from '../styles/ProximasVacinasStyle';

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




export default ProximasVacinas

