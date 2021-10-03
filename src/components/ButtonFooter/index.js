import React from 'react';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'

const ButtonFooter = props => {

    return (
        
            <Pressable style={styles.buttonFooter} onPress={ props.onPress }>
                <Icon name={props.icon} size={20} styles={styles.icon}/>
                <Text style={styles.textFooter}>
                    {props.text}
                </Text>
            </Pressable>  
         
    );
};

export default ButtonFooter;