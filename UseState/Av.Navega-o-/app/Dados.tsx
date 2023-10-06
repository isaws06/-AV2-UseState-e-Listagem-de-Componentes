import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { name: 'Isadora Wenzel da Silveira', date: '2023-10-06', time: '14:30' },
    { name: 'Breno de Souza Faria', date: '2023-10-07', time: '10:00', number: 'R$ 45,00'},
    { name: 'Marta Wenzel', date: '2023-10-08', time: '15:45', number: 'R$ 60,00' },
    { name: 'Daniel de Maria Prio', date: '2023-10-09', time: '11:15', number: 'R$ 75,00' },
    { name: 'Odete Terzinha', date: '2023-10-10', time: '16:00', number: 'R$ 80,00' },
    { name: 'Ana Maria Pereira', date: '2023-10-11', time: '09:30', number: 'R$ 95,00' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pacientes Agendados</Text>
      {data.map(item => (
        <View key={item.name} style={styles.itemList}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Data da Consulta: {item.date}</Text>
          <Text>Horário da Consulta: {item.time}</Text>
          <Text>Valor da Cosulta: {item.number}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.buttonText}>
            <Text style={styles. buttonText}>Editar</Text>
          </TouchableOpacity>
      <Link href="/Home" style={styles.buttonText}>Voltar para Home</Link>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94c0dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemList: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: '60%',
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#206794',
  },
 
  
  buttonText: {
    backgroundColor: '#ffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5190F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#5190F5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },


  
});



