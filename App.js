import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppSettingsProvider } from './Screens/AppSettingsContext';

import ConfiguracionScreen from './Screens/ConfiguracionScren';
import FiltrosScren from './Screens/FiltrosScreen';
import AcercaScreen from './Screens/AcercaScreen';
import PoliticasScreen from './Screens/PoliticasScreen';
import TerminosScreen from './Screens/TerminosScreen';
import ComentariosScreen from './Screens/ComentariosScren';
import ReportarScreen from './Screens/ReportarScreen';
import PerfilScreen from './Screens/PerfilScreen';
import RecetaScreen from './Screens/RecetaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppSettingsProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Receta" component={RecetaScreen} />
          <Stack.Screen name="ConfiguracionScreen" component={ConfiguracionScreen} />
          <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
          <Stack.Screen name="AcercaScreen" component={AcercaScreen} />
          <Stack.Screen name="PoliticasScreen" component={PoliticasScreen} />
          <Stack.Screen name="TerminosScreen" component={TerminosScreen} />
          <Stack.Screen name="ComentariosScreen" component={ComentariosScreen} />
          <Stack.Screen name="ReportarScreen" component={ReportarScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppSettingsProvider>
  );
}