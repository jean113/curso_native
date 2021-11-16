import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';

const AuthRoutes = () =>{
    const AuthStack  = createNativeStackNavigator();

    return(
        <AuthStack.Navigator screenOptions={{headerShown:false}} >
            <AuthStack.Screen name="Login" component={Login}/>
        </AuthStack.Navigator>
    );
}


export default AuthRoutes;