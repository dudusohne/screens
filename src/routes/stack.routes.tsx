import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Itens } from '../pages/Itens';
import { StorageItens } from '../pages/StorageItens';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.black,
            }
        }}
    >
        <stackRoutes.Screen
            name="Home"
            component={Home}
        />
        <stackRoutes.Screen
            name="Itens"
            component={Itens}
        />
        <stackRoutes.Screen
            name="StorageItens"
            component={StorageItens}
        />
    </stackRoutes.Navigator>
)
export default AppRoutes;