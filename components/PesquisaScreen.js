import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function PesquisaScreen() {
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
      <TouchableOpacity
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text> Regras</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('PesquisaScreen')}>
        <Text> Pesquisa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('QuemsomosScreen')}>
          <Text> Quem {"\n"} Somos</Text>
        </TouchableOpacity>

      </View>

      {/* Icone de pesquisa */}
      <Text style={styles.informativo}>
        pagina pesquisa screen {"\n"}{"\n"}
      </Text>

      <TextInput style={styles.pesquisa}
        placeholder="Ex.: Polo...tema..."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />


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
    width: "100%",
    height: 120,
    backgroundColor: '#6D9886',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    width: "100%",
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
    width: '100%',
    marginTop: '10%',
    textAlign: 'center',

  },
  pesquisa: {
    width: '70%',
    height: '7%',
    borderRadius: 50,
    paddingLeft: 15,
    color: '#6D9886',
    backgroundColor: '#F7F7F7',
  },
});

export default PesquisaScreen;
