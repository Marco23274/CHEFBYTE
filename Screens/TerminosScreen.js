import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppSettingsContext } from './AppSettingsContext';

const TerminosScreen = () => {
  const { darkMode, fontSize } = useContext(AppSettingsContext);
  const themeStyles = darkMode ? styles.dark : styles.light;
  return (
    <View style={[styles.container, themeStyles]}>
      <Text style={[styles.title, { fontSize: fontSize + 4 }]}>Términos de Uso</Text>
      <Text style={{ fontSize }}>
        ChefByte

ChefByte es una aplicación creada para apoyar a estudiantes y principiantes en la cocina. Al usar esta app aceptas los siguientes puntos:

La información y las recetas son solo con fines educativos y no sustituyen asesoría profesional.

Eres responsable del uso seguro de utensilios, temperaturas y manejo de alimentos.

ChefByte no se hace responsable por errores en recetas, accidentes en la cocina o daños derivados del uso de la app.

No está permitido copiar, modificar o distribuir el contenido de la aplicación sin permiso.

Si aportas recetas, fotos o comentarios, estos deben ser respetuosos y no infringir derechos de autor.

La app puede actualizarse o cambiar funciones sin previo aviso.

El uso de ChefByte es bajo tu propio riesgo.
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

export default TerminosScreen;
