import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const NovaVacina = (props) => {

    const [dateVac, setDateVac] = useState(new Date())
    const [dateProx, setDateProx] = useState(new Date())
    const [openVac, setOpenVac] = useState(false)
    const [openProx, setOpenProx] = useState(false)
    const [value, setValue] = useState('1Dose');
    
    const handleDateVacSelect = (dateVac) => {
        setDateVac(dateVac);
        setOpenVac(false);
    };
    
    const handleDateProxSelect = (dateProx) => {
        setDateProx(dateProx);
        setOpenProx(false);
    };

    const formatDate = (date) =>{
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${day}/${month}/${year}`;
    }

    return (

        <View style={styles.container}>

          

            <View style={{ marginTop: 70 }}></View>

            <View style={styles.row}>
                <Text style={styles.label}>Data de vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenVac(true)}  >
                    
                    <Text style={styles.textD}> {formatDate(dateVac)} </Text>
                </TouchableOpacity>
                <DatePicker modal open={openVac} date={dateVac} mode='date' 
                    onConfirm={handleDateVacSelect} 
                    onCancel={() => setOpenVac(false)}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Vacina</Text>
                <TextInput style={styles.input} placeholder="Hepatite B" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Dose</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.containerRadio}>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="1Dose" color='#3F92C5'  />
                            <Text style={styles.textI}>1a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="2Dose" color='#3F92C5' />
                            <Text style={styles.textI}>2a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="3Dose" color='#3F92C5' />
                            <Text style={styles.textI}>3a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="DoseUnica" color='#3F92C5' />
                            <Text style={styles.textI}>Dose única </Text>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.label}>Comprovante</Text>
                <CustomButton color= "#419ED7" width={170} height={30} text= "Selecione imagem..."/>
            </View>
            <Image style ={{width: 180, height: 90, marginLeft:160}} source={require('../assets/images/image-comprovante.png')} />

            <View style={[styles.row, {marginTop:15}]}>
                <Text style={styles.label}>Próxima vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenProx(true)}  >
                    <Text style={styles.textD}> {formatDate(dateProx)} </Text>
                </TouchableOpacity>
                <DatePicker modal open={openProx} date={dateProx} mode='date' 
                    onConfirm={handleDateProxSelect} 
                    onCancel={() => setOpenProx(false)}
                />
            </View>

            <View style={styles.botoes}>
                <CustomButton onPress={() => props.navigation.pop()} color= "#37BD6D" width={160} height={40} text= "Cadastrar"/>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    textD: {
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#C1E7E3',
        width: "100%",
    },
    text: {
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    textB: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
 
    botoes: {
        justifyContent: 'center',
        flex: 1
    },
    button: {
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        shadowColor: 'black',
        elevation: 10,
    },
   
    input: {
        backgroundColor: 'white',
        width: 160,
        height: 30,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: '#419ED7',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 8,
        color: 'white',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        width: 140,
    },
    containerRadio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textI: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
});


export default NovaVacina

