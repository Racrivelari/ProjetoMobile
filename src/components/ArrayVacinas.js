import {Image, Text,TouchableOpacity, View} from 'react-native'
import {stylesVacinas} from '../styles/CardVacina';
import {stylesProximas} from '../styles/CardProximaVacina'

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate
}

export let listaVacinas = [];

export const cadastrarVacina = (nome, dataVac, dataProx, dose, props) => {
  listaVacinas.push({
      //verifica se é o primeiro elemento, se for, id: 0, senão id: id +1
      id: listaVacinas.length === 0 ? 0 : listaVacinas[listaVacinas.length - 1].id + 1,
      nome: nome,
      dataVac: dataVac,
      dataProx: dataProx,
      dose: dose,
  });
  props.navigation.goBack();
}

export const editarVacina = (id, nome, dataVac, dataProx, dose, props) => {
  const vacinaIndex = listaVacinas.findIndex((v) => v.id === id);
    listaVacinas[vacinaIndex] = {
        ...listaVacinas[vacinaIndex],
        nome,
        dataVac,
        dataProx,
        dose,
    };
  props.navigation.goBack();
};

export const excluirVacina = (id, props) => {
    const vacinaIndex = listaVacinas.findIndex((v) => v.id === id);
    listaVacinas.splice(vacinaIndex, 1);
    props.navigation.goBack();
};

// Card Vacina
export const Vacina = ({item}, props) => {
  return (
      <View style={stylesVacinas.view}>
          <TouchableOpacity style={stylesVacinas.card}  onPress={() => props.navigation.navigate('EditarVacina', {item})}> 
              <Text style={stylesVacinas.id}>{item.id}</Text>
              <Text style={stylesVacinas.nome}>{item.nome}</Text>
              <Text style={stylesVacinas.dose}>{item.dose}</Text>
              <Text style={stylesVacinas.data}>{item.dataVac}</Text>
              <View>
                  <Image style={stylesVacinas.imagem} source={require('../assets/images/image-comprovante.png')} />
              </View>
              {item.dose !== 'Dose única' ?
                <Text style={stylesVacinas.proxima}>Próxima dose em: {item.dataProx}</Text> :
                <Text style={stylesVacinas.proxima}>Não há próxima dose!</Text>
              }
          </TouchableOpacity >
      </View>
  )
}

//Card Próximas Vacinas
export const VacinaProx = ({item}) => {
  return (
      <View style={stylesProximas.view}>
             {item.dose != 'Dose única' ? (
                <View style={stylesProximas.card}>
                    <Text style={stylesProximas.nome}>{item.nome}</Text>
                    <Text style={stylesProximas.proximas}>{item.dataProx}</Text>
                </View>
              ): ""}
      </View>
  )
}

