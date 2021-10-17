import React from 'react';
import {View, Pressable, Text} from 'react-native';

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.centralizar}>

      {/* <Pressable
        style={{backgroundColor: 'lightblue', width: 100, height: 30}}
        onPress={() => navigation.navigate('Posts')}>
        <Text>Ir para os posts</Text>
      </Pressable> */}

      <Text style={styles.textoInicial}>Tela Inicial</Text>

    </View>
  );
};

export default Home;
