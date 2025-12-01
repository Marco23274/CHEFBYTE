import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecetaScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CHEFBYTE</Text>
        <Text style={styles.subtitle}>Recetas Sustentables</Text>
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('PerfilScreen')}>
          <Text style={{ fontSize: 28 }}>👤</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Pay de limón</Text>
      <Image
        source={{ uri: 'https://www.gourmet.cl/wp-content/uploads/2022/11/Pay-de-limon-1.jpg' }}
        style={styles.image}
      />
      <Text style={styles.section}>Instrucciones:</Text>
      <Text style={styles.step}>Paso 1: Preparar la base</Text>
      <Text style={styles.instructions}>
        1. En un tazón, mezclar las galletas trituradas, la mantequilla derretida y el azúcar hasta obtener una mezcla homogénea.{"\n"}
        2. Presionar la mezcla en el fondo de un molde para pie, formando una base compacta.{"\n"}
        3. Refrigerar mientras preparas el relleno.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>Buscar</Text>
        <Text style={styles.footerIcon}>Guardados</Text>
        <Text style={styles.footerIcon}>Filtros</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c6e377',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  logo: {
    fontWeight: 'bold',
    color: '#1b5e20',
    flex: 1,
    fontSize: 22,
  },
  subtitle: {
    color: '#1b5e20',
    fontSize: 12,
    flex: 1,
  },
  profileIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  section: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
  },
  step: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  instructions: {
    fontSize: 15,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#c6e377',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
  },
  footerIcon: {
    color: '#1b5e20',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RecetaScreen;