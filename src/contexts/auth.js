import { createContext, useEffect, useState } from 'react'
import React from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({signed: true});

export const AuthProvider = ({children}) =>  {

    const [signed, setSigned] = useState(false);

    useEffect( () => {
            async function loadStorageData()
            {
                const storagedToken = await AsyncStorage.getItem('token');

                if(storagedToken)
                    setSigned(true);   
            } 
            
            loadStorageData();
        }, []);

    const SignIn = (dadosRetorno) =>{
        
        setSigned(true);
        AsyncStorage.setItem('token',dadosRetorno);
    }

    const SignOut = async() =>
    {
        await AsyncStorage.clear();
        setSigned(false);
    }

    return(
        <AuthContext.Provider value={{signed, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    );;

}

export default AuthContext;
