import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppSettingsContext } from './AppSettingsContext';

const ConfiguracionScreen = () => {
	const navigation = useNavigation();
	const {
		darkMode,
		fontSize,
		toggleDarkMode,
		increaseFontSize,
		decreaseFontSize,
	} = useContext(AppSettingsContext);

	const themeStyles = darkMode ? styles.dark : styles.light;

	return (
		<View style={[styles.container, themeStyles]}> 
			<View style={styles.header}>
				<Text style={[styles.logo, { fontSize: fontSize + 8 }]}>CHEFBYTE</Text>
				<Text style={styles.subtitle}>Recetas Sustentables</Text>
				<TouchableOpacity style={styles.profileIcon}>
					<Text style={{ fontSize: fontSize + 4 }}>👤</Text>
				</TouchableOpacity>
			</View>
			<Text style={[styles.title, { fontSize: fontSize + 6 }]}>Ajustes</Text>
			<Text style={[styles.section, { fontSize }]}>Personalización visual</Text>
			<View style={styles.row}>
				<Text style={{ fontSize }}>Modo oscuro</Text>
				<Switch value={darkMode} onValueChange={toggleDarkMode} />
			</View>
			<View style={styles.row}>
				<Text style={{ fontSize }}>Tamaño de fuente</Text>
				<View style={styles.fontButtons}>
					<Button title="A-" onPress={decreaseFontSize} />
					<Button title="A+" onPress={increaseFontSize} />
				</View>
			</View>
			<Text style={[styles.section, { fontSize }]}>Información de la aplicación</Text>
			<TouchableOpacity onPress={() => navigation.navigate('AcercaScreen')}>
				<Text style={styles.link}>Acerca de CHEFBYTE</Text>
			</TouchableOpacity>
			<Text style={{ fontSize }}>Versión 1.1</Text>
			<TouchableOpacity onPress={() => navigation.navigate('PoliticasScreen')}>
				<Text style={styles.link}>Políticas de privacidad</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('TerminosScreen')}>
				<Text style={styles.link}>Términos de uso</Text>
			</TouchableOpacity>
			<Text style={[styles.section, { fontSize }]}>Sugerencias</Text>
			<TouchableOpacity onPress={() => navigation.navigate('ComentariosScreen')}>
				<Text style={styles.link}>Enviar comentarios</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('ReportarScreen')}>
				<Text style={styles.link}>Reportar receta incorrecta</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.link}>Calificar la app</Text>
			</TouchableOpacity>
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
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	fontButtons: {
		flexDirection: 'row',
		gap: 5,
	},
	link: {
		color: '#388e3c',
		textDecorationLine: 'underline',
		marginBottom: 5,
		fontSize: 16,
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

export default ConfiguracionScreen;
