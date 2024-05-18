import React, { useState, useEffect } from 'react';
import {Text,View,Button,StyleSheet,TouchableOpacity,ScrollView, TextInput} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function GrupocriadoScreen() {
const navigation = useNavigation();
  const route = useRoute(); // Usando useRoute para acessar os parâmetros da rota
  const { grupo } = route.params; // Obtendo o grupoId dos parâmetros da rota
  const [text, setText] = useState('');
  const [integrantes, setIntegrantes] = useState([]);
  
useEffect(() => {
    // Função para buscar os integrantes do grupo
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch(`http://3.144.174.81/integrantes/${grupo.id}`);
        const data = await response.json();
        setIntegrantes(data); // Define os integrantes retornados da API
      } catch (error) {
        console.error('Erro ao buscar integrantes do grupo:', error);
      }
    };

    fetchIntegrantes(); // Chama a função para buscar os integrantes quando o componente é montado
  }, [grupo]); // Executa sempre que o grupoId mudar

  return (
    <View style={styles.fundo}>
      <View style={styles.retangulo}>
        <Text style={styles.fonte}>PI </Text>
        <Text style={styles.fonte}>Temas e grupos</Text>
      </View>

      {/* Menu principal */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('GrupoScreen')}>
          <Text> Grupos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text> Regras</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PesquisaScreen')}>
          <Text> Pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('QuemsomosScreen')}>
          <Text> Quem {'\n'} Somos</Text>
        </TouchableOpacity>
      </View>


{/* Area de scrow com identificação do grupo */}
      <ScrollView>
      <View style={styles.centralizar} >
        <Text style={styles.informativo}>
          {'\n'}
          {grupo.nome}
          {'\n'}{'\n'}
          Tema: {grupo.tema}
          {'\n'}{'\n'}
          Resumo: {grupo.resumo}
          {'\n'}{'\n'}
          Participantes: {integrantes.length}/8
          {'\n'}{'\n'}
          Integrantes:
        </Text> 
          
        
        {integrantes.map((integrante, index) => (
              <View key={index}>
                <Text>Nome: {integrante.nome}</Text>
                <Text>Email: {integrante.email}</Text>
                <Text>Função: {integrante.funcao}</Text>
                <Text>Eixo: {integrante.eixo}</Text>
                {/* Adicione mais informações conforme necessário */}
              </View>
            ))}


        <TextInput style={styles.pesquisa}
            placeholder="Digite seu nome e/ou e-mail "
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('#')}>
          <Text> Participar</Text>
        </TouchableOpacity>

          <Text> {'\n'}Chat do grupo </Text>
          <View style={styles.chat}>
            <Text style={styles.bolinha}>F</Text>
            <Text> Fulano de tal falou isso isso isso blA bla bla bla </Text>
          </View>
          <View style={styles.chat}>
            <Text style={styles.bolinha}>F</Text>
            <Text> Fulano de tal falou isso isso isso blA bla bla bla </Text>
          </View>
          <View style={styles.chat}>
            <Text style={styles.bolinha}>F</Text>
            <Text> Fulano de tal falou isso issoisso blA bla bla bla </Text>
          </View>
          <View style={styles.chat}>
            <Text style={styles.bolinha}>F</Text>
            <Text> Fulano de tal falou isso isso isso blA bla bla bla </Text>
          </View>
          <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#F2E7D5',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  retangulo: {
    width: '100%',
    height: 120,
    backgroundColor: '#6D9886',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#F7F7F7',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  fonte: {
    fontSize: 24,
  },

  informativo: {
    marginTop: '10%',
    textAlign: 'center',
  },
   pesquisa: {
    width: '70%',
    height: 90,
    borderRadius: 50,
    paddingLeft: 15,
    color: '#6D9886',
    backgroundColor: '#F7F7F7',
    marginBottom: 20,
  },
    button: {
    width: '70%',
    height: '7%',
    borderRadius: 50,
    color: '#6D9886',
    backgroundColor: '#6D9886',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centralizar: {
    alignItems: 'center',
  },
  chat: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  bolinha: {
    backgroundColor: '#6D9886',
    borderRadius: 50,
    width: 30,
    height:30,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 6,
    marginRight: 3,
  },

});

export default GrupocriadoScreen;
