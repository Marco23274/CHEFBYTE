import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppSettingsContext } from './AppSettingsContext';

const AcercaScreen = () => {
  const { darkMode, fontSize } = useContext(AppSettingsContext);
  const themeStyles = darkMode ? styles.dark : styles.light;
  return (
    <View style={[styles.container, themeStyles]}>
      <Text style={[styles.title, { fontSize: fontSize + 4 }]}>Acerca de CHEFBYTE</Text>
      <Text style={{ fontSize }}>
        ChefByte es una aplicación móvil desarrollada para ayudar a las personas dentro del área gastronómica, especialmente a quienes están aprendiendo o no tienen tanta experiencia en la cocina.

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dark: {
    backgroundColor: '#222',
    color: '#fff',
  },
  light: {
    backgroundColor: '#fff',
    color: '#222',
  },
});

export default AcercaScreen;
