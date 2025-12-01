
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { AppSettingsContext } from './AppSettingsContext';

const ReportarScreen = () => {
  const { darkMode, fontSize } = useContext(AppSettingsContext);
  const themeStyles = darkMode ? styles.dark : styles.light;
  const [causa, setCausa] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleEnviar = () => {
    Alert.alert('Reporte', 'El reporte ha sido enviado');
    setCausa('');
    setDescripcion('');
  };

  return (
    <View style={[styles.container, themeStyles]}>
      <Text style={[styles.title, { fontSize: fontSize + 4 }]}>Reportar Receta Incorrecta</Text>
      <Text style={{ fontSize }}>Causa del reporte</Text>
      <TextInput
        style={[styles.input, { fontSize }]} 
        placeholder="Escribe la causa"
        value={causa}
        onChangeText={setCausa}
      />
      <Text style={{ fontSize, marginTop: 10 }}>Descripción del reporte</Text>
      <TextInput
        style={[styles.input, { fontSize, height: 80 }]} 
        placeholder="Describe el problema"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Enviar" onPress={handleEnviar} />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#c6e377',
    borderRadius: 6,
    padding: 8,
    marginTop: 5,
    backgroundColor: '#fff',
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

export default ReportarScreen;
