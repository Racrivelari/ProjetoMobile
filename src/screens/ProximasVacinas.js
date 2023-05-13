
import {styles} from '../styles/ProximasVacinasStyle';
import { View, FlatList} from 'react-native'
import CustomButton from '../components/Button';
import React from 'react';
import {VacinaProx, listaVacinas} from "../components/ArrayVacinas";
import { useIsFocused } from '@react-navigation/native';


const ProximasVacinas = (props) => {

  const attTela = useIsFocused();

  return (

    <View style={styles.container}>

      <FlatList data={listaVacinas} extraData={attTela} renderItem={({item}) => VacinaProx({item}, props)} keyExtractor={item => item.id} numColumns={1} /> 
      
      <View style={styles.botao}>
        <CustomButton onPress={() => props.navigation.push('NovaVacina')} color="#37BD6D" width={160} height={40} text="Nova vacina" />
      </View>

    </View>

  );
};




export default ProximasVacinas

