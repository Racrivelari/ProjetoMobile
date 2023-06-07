import { View, Image, FlatList, TextInput } from 'react-native'
import CustomButton from '../components/Button';
import { styles } from '../styles/HomeStyle';
import React, { useState , useEffect} from 'react';
import { Vacina } from "../components/CrudVacinas";
import { useIsFocused } from '@react-navigation/native';
import { auth, db} from '../firebase/config'
import { useSelector } from 'react-redux'

import { onSnapshot, query, collection, where } from 'firebase/firestore'

const Home = (props) => {

    const [listaVacinas, setListaVacinas] = useState([])

    const uid = useSelector((state) => state.slices.uid)

    useEffect(() => {

      auth.onAuthStateChanged(user => {   
        if (user) {

          const q = query(collection(db, "vacinas"), where ("uid", "==", uid))

          // where ("uid", "==", user.uid))

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
        }
      }

    )
  }, [])


  const [searchText, setSearchText] = useState('');
  const attTela = useIsFocused();

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredVacinas = listaVacinas.filter(documento => documento.nome.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <View style={styles.container}>

      <View style={styles.pesquisa}>
        <Image style={styles.img} source={require('../assets/images/icon-pesquisa.png')}/>
        <TextInput placeholder="PESQUISAR VACINA..." style={styles.textoPesquisa} onChangeText={handleSearch}/>
      </View>

      <FlatList data={filteredVacinas}
        extraData={attTela}
        renderItem={({ item }) => Vacina({ item }, props)}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      <View style={styles.botao}>
        <CustomButton onPress={() => props.navigation.push('NovaVacina')} color="#37BD6D" width={160} height={40} text="Nova vacina"/>
      </View>
      
    </View>
  );
};

export default Home;
