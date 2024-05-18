import React from 'react';
import {Text,View,Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function QuemsomosScreen() {
  const navigation = useNavigation();

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
        <Text style={styles.informativo}>
          {'\n'}{'\n'}
          Este aplicativo foi desenvolvido {'\n'}
          por estudantes de graduação do curso {'\n'}
          de Computação da UNIVESP como resultado {'\n'}
          da disciplina Projeto Integrador III - 2024
          {'\n'}{'\n'}

          Sob a orientação do tutor:{'\n'}
          Fernando Dobbert Sanches
          {'\n'} {'\n'}{'\n'}

          Integrantes:
          {'\n'}
          Beatriz Santos de Souza, 2104056 {'\n'}
          Lais Pereira de Paula, 2101615 {'\n'}
          Larissa Alves, 2103418 {'\n'}
          Maria Lúcia Silva, 2001421 {'\n'}
          Monise Da Silva, 2107840 {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          São Paulo - SP {'\n'}
          2024
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
        </Text>
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
});

export default QuemsomosScreen;
