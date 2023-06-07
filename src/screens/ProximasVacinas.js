import {styles} from '../styles/ProximasVacinasStyle';
import { View, FlatList} from 'react-native'
import CustomButton from '../components/Button';
import React, { useState , useEffect} from 'react';
import {VacinaProx} from "../components/CrudVacinas";
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { db } from '../firebase/config'
import { onSnapshot, query, collection , where} from 'firebase/firestore'

const ProximasVacinas = (props) => {

  const [listaVacinas, setListaVacinas] = useState([])

  const uid = useSelector((state) => state.slices.uid)

    useEffect(() => {
        const q = query(collection(db, "vacinas"), where ("uid", "==", uid))

        onSnapshot(q, (snapshot) => {
            const vacinas = []

            snapshot.forEach((doc) => {
                vacinas.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    dose: doc.data().dose,
                    dateVac: doc.data().dateVac,
                    dateProx: doc.data().dateProx,
                    urlImagem: doc.data().urlImagem
                })
                console.log("Documento: " + JSON.stringify(doc.data()))
            })

            setListaVacinas(vacinas)
        })
    }, [])

  const attTela = useIsFocused();

  return (

    <View style={styles.container}>

      <FlatList 
          data={listaVacinas} 
          extraData={attTela} 
          renderItem={({item}) => VacinaProx({item}, props)} 
          keyExtractor={item => item.id} 
          numColumns={1} 
      /> 
      
      <View style={styles.botao}>
        <CustomButton onPress={() => props.navigation.push('NovaVacina')} color="#37BD6D" width={160} height={40} text="Nova vacina" />
      </View>

    </View>

  );
};

export default ProximasVacinas

