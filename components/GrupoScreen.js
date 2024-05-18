import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

export default function GrupoScreen() {
  const navigation = useNavigation();
  const [dados, setDados] = useState([]);

useEffect(() => {
        // Função para chamar o endpoint da API e definir os dados
        const fetchData = async () => {
            try {
                const response = await fetch('http://3.144.174.81/grupos');
                const data = await response.json();
                setDados(data); // Define os dados retornados da API
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData(); // Chama a função para buscar os dados quando o componente é montado

        // Limpa os dados quando o componente é desmontado para evitar vazamentos de memória
        return () => setDados([]);
    }, []);


  return (

        <View style={styles.fundo}>
            <View style={styles.cabecario}>
                <Text style={styles.fonte}>PI</Text>
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

            {/* Criar grupos */}
            <Text style={styles.fonte}> Confira os grupos {'\n'} que foram criados</Text>
            <TouchableOpacity style={styles.criargrupo}
                              onPress={() => navigation.navigate('CriargrupoScreen')}>
                <Text> Ou crie seu grupo aqui + {"\n"}{"\n"}</Text>
            </TouchableOpacity>

            {/* Grupos criados */}
            <ScrollView>
                <View style={styles.listagrupos}>
                    {/* Mapeia os dados retornados da API para criar os botões dinamicamente */}
                    {dados.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => navigation.navigate('GrupocriadoScreen', { grupo: item })}>
                            <Text>{item.nome}</Text>
                        </TouchableOpacity>
                    ))}
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
