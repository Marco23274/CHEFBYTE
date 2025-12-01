import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PerfilScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
      <View style={styles.profileIconContainer}>
        <Text style={styles.profileIcon}>👤</Text>
      </View>
      <Text style={styles.name}>[Nombre]</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.icon}>🌐</Text>
        <Text style={styles.label}>Historial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.icon}>❤️</Text>
        <Text style={styles.label}>Recetas favoritas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ConfiguracionScreen')}>
        <Text style={styles.icon}>⚙️</Text>
        <Text style={styles.label}>Ajustes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.volverBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.volverText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    fontSize: 28,
    color: '#222',
  },
  profileIconContainer: {
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 60,
    color: '#222',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    fontSize: 22,
    marginRight: 16,
  },
  label: {
    fontSize: 18,
    color: '#222',
  },
  volverBtn: {
    marginTop: 40,
    backgroundColor: '#c6e377',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  volverText: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
});

export default PerfilScreen;