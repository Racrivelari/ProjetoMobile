import { addDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'
import { db, storage } from '../firebase/config'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
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

export const cadastrarVacina = async (nome, dose, dateVac, dateProx, urlFoto, uid, props) => {
    const colecao = collection(db, "vacinas")

    const uidd = () => {
        const id = Date.now().toString(16) + Math.random().toString(16);
        return id.replace('.', '').replace('0', '');
    };

    const imagem = "images/" + uidd(); 

    const imageRef = ref(storage, imagem)

    const file = await fetch(urlFoto)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
        .then((result) => {
            console.log("Arquivo foi enviado com sucesso.")
            getDownloadURL(imageRef)
                .then((url) => {

                    const documento = {
                        nome: nome,
                        dose: dose,
                        dateVac: dateVac,
                        dateProx: dateProx,
                        urlImagem: url,
                        uid: uid
                    }

                    addDoc(colecao, documento)
                        .then((refDoc) => {
                            console.log("Documento inserido com sucesso: " + JSON.stringify(refDoc))
                            props.navigation.goBack();
                        })
                        .catch((error) => {
                            console.log("Error: " + JSON.stringify(error))
                        })

                })
        })
        .catch((error) => {
            console.log("Erro ao enviar arquivo: " + JSON.stringify(error))
        })
}

export const excluirVacina = (id, props) => {

    const refDoc = doc(db, "vacinas", id)

    deleteDoc(refDoc)
        .then(() => {
            console.log("Documento excluído com sucesso!!!")
            props.navigation.pop()
        })
        .catch((error) => {
            console.log("Erro ao excluir o documento: " + error)
        })
}

export const editarVacina = async (id, nome, dose, dateVac, dateProx, urlImagem, props) => {

    const refDoc = doc(db, "vacinas", id)

    const imageRef = ref(storage, "images/" + id)

    const file = await fetch(urlImagem)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
        .then((result) => {
            console.log("Arquivo foi enviado com sucesso.")
            getDownloadURL(imageRef)
                .then((url) => {

                    updateDoc(refDoc, {
                        nome: nome,
                        dose: dose, 
                        dateVac: dateVac,
                        dateProx: dateProx,
                        urlImagem: url
                    })
                        .then(() => {
                            console.log("Documento atualizado com sucesso!!!")
                            props.navigation.pop()
                        })
                        .catch((error) => {
                            console.log("Erro ao atualizar o documento: " + JSON.stringify(error))
                        })


                })
                .catch((error) => {
                    console.log("Error ao pegar a URL da imagem: " + JSON.stringify(error))
                })

        })
        .catch((error) => {
            console.log("Erro ao enviar arquivo: " + JSON.stringify(error))
        })


}

// Card Vacina
export const Vacina = ({item}, props) => {
    return (
        <View style={stylesVacinas.view}>
            <TouchableOpacity style={stylesVacinas.card}  onPress={() => props.navigation.navigate('EditarVacina', {item})}> 
                {/* <Text style={stylesVacinas.id}>{item.id}</Text> */}
                <Text style={stylesVacinas.nome}>{item.nome}</Text>
                <Text style={stylesVacinas.dose}>{item.dose}</Text>
                <Text style={stylesVacinas.data}>{item.dateVac}</Text>
                <View>
                    {item.urlImagem ? <Image source={{ uri: item.urlImagem }} style={stylesVacinas.imagem} />:null}
                </View>
                {item.dose !== 'Dose única' ?
                  <Text style={stylesVacinas.proxima}>Próxima dose em: {item.dateProx}</Text> :
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
                      <Text style={stylesProximas.proximas}>{item.dateProx}</Text>
                  </View>
                ): ""}
        </View>
    )
  }
  




