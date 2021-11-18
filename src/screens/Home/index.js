import React, {useContext} from 'react';
import {View, Pressable, Text} from 'react-native';
import AuthContext from '../../contexts/auth';
import LottieView from 'lottie-react-native';

import styles from './styles';

const Home = ({navigation}) => {
  const {SignOut} = useContext(AuthContext);
  return (

    <View style={styles.centralizar}>

      <LottieView source={require('../../assets/lf20_mfhfqbag.json')} autoPlay/>

      <Pressable
            style={styles.espaco_deslogar}
            onPress={() => SignOut()}>
            <Text>Deslogar</Text>
           <LottieView style={styles.icon_logout} source={require('../../assets/68582-log-out.json')} autoPlay loop/>
        </Pressable>
     

    </View>

  );
};

export default Home;
