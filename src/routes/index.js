import React,{useContext} from 'react';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import Blog from '../screens/Blog';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthContext from '../contexts/auth';
import AuthRoutes from './auth.routes';

// const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () =>
{
    const {signed} = useContext(AuthContext);

    if(!signed)
    {
        return <AuthRoutes/>;
    }
    else
    {

        return(
            // <AppStack.Navigator  initialRouteName="Home">
            //     <AppStack.Screen name="Home" component={Home}/>
            //     <AppStack.Screen name="Posts" component={Posts}/>
            // </AppStack.Navigator>
    
            <Drawer.Navigator initialRouteName="Login">        
                      
                <Drawer.Screen name="Home" component={Home} />        
                <Drawer.Screen name="Posts" component={Posts} />   
                <Drawer.Screen name="Profile" component={Profile} />    
                <Drawer.Screen name="Blog" component={Blog} />  

            </Drawer.Navigator>
        );

    } 
}

export default Routes;
