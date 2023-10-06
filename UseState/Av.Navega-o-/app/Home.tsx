import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/Logo.png')}></Image>
    <Text style={styles.text}>Bem-vindo ao Pronto Socorro!</Text>
    <br />
    
    <Link href="/Agendamento" style={styles.buttonText}>Agende sua consulta</Link>
    <Link href="/Dados" style={styles.buttonText}>Dados dos Pacientes</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  buttonText: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#47a4e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#2883bb',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#206794',
  },

  titulo1:{
    fontSize: 14,
    textAlign: 'center',
    color: '#563126',
  },

  image:{
    
    width: 400,
    height: 400,
  }
});
