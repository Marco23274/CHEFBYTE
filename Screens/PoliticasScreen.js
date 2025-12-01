import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppSettingsContext } from './AppSettingsContext';

const PoliticasScreen = () => {
  const { darkMode, fontSize } = useContext(AppSettingsContext);
  const themeStyles = darkMode ? styles.dark : styles.light;
  return (
    <View style={[styles.container, themeStyles]}>
      <Text style={[styles.title, { fontSize: fontSize + 4 }]}>Políticas de Privacidad</Text>
      <Text style={{ fontSize }}>
ChefByte

ChefByte respeta tu privacidad. Al usar la aplicación aceptas lo siguiente:

ChefByte puede recopilar datos básicos como información de uso, preferencias y rendimiento de la app para mejorar la experiencia.

No recopilamos información personal sensible a menos que tú la proporciones voluntariamente.

Tus datos no se comparten con terceros, excepto cuando sea necesario para el funcionamiento de la app o por requerimiento legal.

La información que proporciones (como recetas, comentarios o fotos) será utilizada únicamente dentro de la app.

Puedes desinstalar la aplicación en cualquier momento para dejar de compartir datos.

En caso de un apocalipsis zombie cualquier solicitud de devolucion sera rechazada

ChefByte utiliza herramientas analíticas que pueden almacenar información técnica del dispositivo (modelo, versión del sistema, idioma, etc.).

Nos reservamos el derecho de actualizar esta política sin previo aviso.      </Text>
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

export default PoliticasScreen;
