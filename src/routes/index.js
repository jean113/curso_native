import React from 'react';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () =>
{
    return(
        // <AppStack.Navigator  initialRouteName="Home">
        //     <AppStack.Screen name="Home" component={Home}/>
        //     <AppStack.Screen name="Posts" component={Posts}/>
        // </AppStack.Navigator>

        <Drawer.Navigator initialRouteName="Home">        
            <Drawer.Screen name="Home" component={Home} />        
            <Drawer.Screen name="Posts" component={Posts} />      
        </Drawer.Navigator>
    );
}

export default Routes;
