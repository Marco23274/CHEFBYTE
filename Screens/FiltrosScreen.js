import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppSettingsContext } from './AppSettingsContext';

const preferencias = ["Vegano", "Vegetariano", "Keto", "Sin gluten"];
const ingredientesNoComo = ["Cilantro", "Cebolla", "Pescado", "Ajo"];

const FiltrosScren = () => {
	const { darkMode, fontSize } = useContext(AppSettingsContext);
	const [selectedPrefs, setSelectedPrefs] = useState([true, true, true, true]);
	const [selectedNoComo, setSelectedNoComo] = useState([true, true, true, true]);
	const themeStyles = darkMode ? styles.dark : styles.light;

	// Solo visual, no funcionalidad de cambio
	return (
		<View style={[styles.container, themeStyles]}> 
			<View style={styles.header}>
				<Text style={[styles.logo, { fontSize: fontSize + 8 }]}>CHEFBYTE</Text>
				<Text style={styles.subtitle}>Recetas Sustentables</Text>
				<TouchableOpacity style={styles.profileIcon}>
					<Text style={{ fontSize: fontSize + 4 }}>👤</Text>
				</TouchableOpacity>
			</View>
			<Text style={[styles.title, { fontSize: fontSize + 6 }]}>Filtros</Text>
			<Text style={[styles.section, { fontSize }]}>Preferencias Alimentarias</Text>
			<View style={styles.box}>
				{preferencias.map((pref, idx) => (
					<View key={pref} style={styles.row}>
						<Text style={{ fontSize }}>{pref}</Text>
						<View style={styles.checkbox}>{selectedPrefs[idx] && <Text>✔️</Text>}</View>
					</View>
				))}
			</View>
			<Text style={[styles.section, { fontSize }]}>Ingredientes que NO como</Text>
			<View style={styles.box}>
				{ingredientesNoComo.map((ing, idx) => (
					<View key={ing} style={styles.row}>
						<Text style={{ fontSize }}>{ing}</Text>
						<View style={styles.checkbox}>{selectedNoComo[idx] && <Text>✔️</Text>}</View>
					</View>
				))}
			</View>
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
		marginVertical: 10,
	},
	section: {
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 5,
	},
	box: {
		borderWidth: 2,
		borderColor: '#c6e377',
		borderRadius: 8,
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#f8fff0',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	checkbox: {
		width: 24,
		height: 24,
		borderWidth: 2,
		borderColor: '#c6e377',
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
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
	dark: {
		backgroundColor: '#222',
	},
	light: {
		backgroundColor: '#fff',
	},
});

export default FiltrosScren;
