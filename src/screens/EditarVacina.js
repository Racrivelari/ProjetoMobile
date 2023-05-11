import { View, Text, Modal, Image, TextInput, TouchableOpacity, Button} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import {styles} from '../styles/EditarVacinaStyle';

const NovaVacina = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

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


            <View>
                <Modal animationType="fade" transparent={true} visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: '#fff', padding: 20 , width:'90%'}}>
                            <Text style={{ color:'#FD7979', fontFamily:'AveriaLibre-Regular', fontSize: 22, marginBottom: 26, textAlign: 'center' }}>Tem certeza que deseja remover essa vacina?</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                <CustomButton onPress={() => props.navigation.push('DrawerNavigation')} color= "#FD7979" width={140} height={40} text= "SIM"/>
                                <CustomButton onPress={() => setModalVisible(false)} color= "#3F92C5" width={140} height={40} text= "CANCELAR"/>
                            </View>      
                        </View>
                    </View>
                    
                </Modal>
            </View>


            <View style={styles.botoes}>
                <CustomButton onPress={() => props.navigation.push('DrawerNavigation')} color= "#37BD6D" width={160} height={40} text= "Salvar alterações"/>
                <CustomButton onPress={() => setModalVisible(true)} color= "#FD7979" width={160} height={40} marginTop={40} text= "Excluir"/>
            </View>

        </View>

    );
};




export default NovaVacina

