import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

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
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Regras</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Pesquisa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Quem {"\n"} Somos</Text>
      </TouchableOpacity>

      </View>
      
{/* regras do PI*/}
      <Text style={styles.informativo}>O propósito deste aplicativo é facilitar aos alunos da UNIVESP a busca por grupos para Projetos Interdisciplinares (PIs), levando em conta variáveis como tema, região e habilidades.
        {"\n"}

        É importante ressaltar que o uso deste aplicativo não substitui o SEI para a escolha de grupos, conforme estabelecido pelas normas acadêmicas regulatórias da UNIVESP</Text>


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
    marginTop: '10%',
    textAlign: 'center',

  },
});

export default HomeScreen;
