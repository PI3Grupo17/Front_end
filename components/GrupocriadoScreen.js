import React, {useState} from 'react';
import {Text,View,Button,StyleSheet,TouchableOpacity,ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GrupocriadoScreen() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
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

        <TouchableOpacity onPress={() => navigation.navigate('GrupoScreen')}>
          <Text> Regras</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GrupoScreen')}>
          <Text> Pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GrupoScreen')}>
          <Text> Quem {'\n'} Somos</Text>
        </TouchableOpacity>
      </View>


{/* Area de scrow com identificação do grupo */}
      <ScrollView>
      <View style={styles.centralizar} >
        <Text style={styles.informativo}>
          {'\n'}
          GRUPO 1
          {'\n'}{'\n'}
          Tema: .......
          {'\n'}{'\n'}
          Resumo tema: {'\n'}.........................................................{'\n'}............................................{'\n'}....................................................{'\n'}.....................................

          {'\n'}{'\n'}
          Eixo: Computação 
          {'\n'} {'\n'}
          Participantes: 5/8{'\n'}{'\n'}

          Integrantes:
          {'\n'}
          Beatriz Santos => Relatórios {'\n'}
          Lais Pereira => Programação {'\n'}
          Larissa Alves => Relatórios {'\n'}
          Maria Lúcia => Relatórios {'\n'}
          Monise Da Silva => Programação {'\n'}
          {'\n'}
          {'\n'}
          ________________________________________
          {'\n'}
          Quer Participar desse grupo?{'\n'}
          Digite seu nome e comece a interagir agora mesmo
          {'\n'}
          {'\n'}
        </Text> 
        
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
