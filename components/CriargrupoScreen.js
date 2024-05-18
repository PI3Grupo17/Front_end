import React, {useState} from 'react';
import {Text,View,Button,StyleSheet,TouchableOpacity,ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';

function CriargrupoScreen() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [selectedIndex, setIndex] = React.useState(0);

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
      <ScrollView style={styles.pagprinc}>
      <View style={styles.centralizar} >

      <Text style={styles.titulo}> Cadastre um novo grupo: </Text>

       <TextInput style={styles.pesquisa}
        placeholder="Nome do grupo"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

       <TextInput style={styles.pesquisa}
        placeholder="Tema"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

          <TextInput style={styles.pesquisa}
            placeholder="Resumo do tema"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <TextInput style={styles.pesquisa}
            placeholder="integrantes (maxiomo 8 pessoas"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <Text style={styles.informativo}>
            ________________________________________
            {'\n'}
            {'\n'}

            Eixo:    {'\n'}
          </Text>
          <View style={styles.pag}>
            <CheckBox
              checked={selectedIndex === 0}
              onPress={() => setIndex(0)}
              iconType="material-community"
              checkedIcon="radiobox-marked"
              uncheckedIcon="radiobox-blank"
            />
            <Text> Computação   </Text>
          </View>

          <View style={styles.pag}>
            <CheckBox
              checked={selectedIndex === 1}
              onPress={() => setIndex(1)}
              iconType="material-community"
              checkedIcon="radiobox-marked"
              uncheckedIcon="radiobox-blank"
            />
            <Text> Licenciatura    </Text>
          </View>

          <View style={styles.pag}>
            <CheckBox
              checked={selectedIndex === 3}
              onPress={() => setIndex(3)}
              iconType="material-community"
              checkedIcon="radiobox-marked"
              uncheckedIcon="radiobox-blank"
            />
            <Text> Administração </Text>
          </View>


          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('#')}>
          <Text> Criar grupo </Text>
        </TouchableOpacity>

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
    pagprinc:{
      width: '100%',
    },
    titulo:{
      marginTop: 10,
    },
  pag: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 100,
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
    height: 70,
    borderRadius: 50,
    paddingLeft: 15,
    color: '#6D9886',
    backgroundColor: '#F7F7F7',
    marginTop: 15,
  },
    button: {
    width: '70%',
    height: 50,
    borderRadius: 50,
    color: '#6D9886',
    backgroundColor: '#6D9886',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  centralizar: {
    alignItems: 'center',
  },



});

export default CriargrupoScreen;
