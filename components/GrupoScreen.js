import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GrupoScreen() {
  const navigation = useNavigation();

  return (
    
    <View style={styles.fundo}>
      <View style={styles.cabecario}>
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

{/* Criar grupos */}      
      <Text style={styles.fonte}> Confira os grupos {'\n'} que foram criados</Text>
      <TouchableOpacity style={styles.criargrupo}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Ou crie seu grupo aqui + {"\n"}{"\n"}</Text>
      </TouchableOpacity>

{/* Grupos criados */}
 <ScrollView >
 <View style={styles.listagrupos}>
   <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 6</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 9</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 11</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 12</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 6</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 9</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 11</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrupoScreen')}>
        <Text> Grupo 12</Text>
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
  cabecario: {
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
  button: {
    backgroundColor: '#6D9886',
    height: 100,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 4,
  },
  listagrupos: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  criargrupo: {
    margin: 5,
  },
});
