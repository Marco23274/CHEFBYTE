import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppSettingsContext } from './AppSettingsContext';

const ComentariosScreen = () => {
  const { darkMode, fontSize } = useContext(AppSettingsContext);
  const themeStyles = darkMode ? styles.dark : styles.light;
  const [causa, setCausa] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleEnviar = () => {
    Alert.alert('Comentario', 'El comentario ha sido enviado');
    setCausa('');
    setDescripcion('');
  };

  return (
    <View style={[styles.container, themeStyles]}>
      <Text style={[styles.title, { fontSize: fontSize + 4 }]}>Comentario que quiera hacer</Text>
      <Text style={{ fontSize }}>Nombre</Text>
      <TextInput
        style={[styles.input, { fontSize }]} 
        placeholder="Escriba su nombre"
        value={causa}
        onChangeText={setCausa}
      />
      <Text style={{ fontSize, marginTop: 10 }}>Comentario...</Text>
      <TextInput
        style={[styles.input, { fontSize, height: 80 }]} 
        placeholder="Escriba su comentario"
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
export default ComentariosScreen;
