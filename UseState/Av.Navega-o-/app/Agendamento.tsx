import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link } from "expo-router";

export default function Agendamento(){

  const [ name, setName ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ dataNascimento, setDataNascimento ] = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ valor, setValor ] = useState('')

  function handleUserAdd(){
      console.log(
          "Nome Completo: " + name + "\nCPF: " + cpf + "\nData de Nascimento: " + dataNascimento + "\nEndereço: " + endereco + "\nValor da Consulta: " + valor
      )

      Alert.alert(
          "Nome Completo: " + name + "\nCPF: " + cpf + "\nData de Nascimento: " + dataNascimento + "\nEndereço: " + endereco + "\nValor da Consulta: " + valor
      )
  }

  return(
  <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/Logo.png')}></Image>
      <Text style={styles.text}>Preencha os Dados</Text>

      <TextInput 
          style={styles.input}
          placeholder="Nome Completo"

          value={ name }
          onChangeText={ setName }
      />
      
      {/* <Text style={styles.txt}>{ name }</Text> */}

      <TextInput 
          style={styles.input}
          placeholder="CPF"

          value={ cpf }
          onChangeText={ setCpf }

      />


      <TextInput 
          style={styles.input}
          placeholder="Data de Nascimento"

          value={ dataNascimento }
          onChangeText={ setDataNascimento }

      />

      <TextInput 
          style={styles.input}
          placeholder="Endereço"

          value={ endereco }
          onChangeText={ setEndereco }

      />

<TextInput 
          style={styles.input}
          placeholder="Valor da Consulta"

          value={ valor }
          onChangeText={ setValor }

      />

      

      <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
          <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Link href="/Home" style={styles.buttonText}>Voltar para a Home</Link>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  title:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },

  input: {
    fontSize: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#2883bb',
    borderRadius: 15,
    width: '60%',
  },

  

  buttonText: {
  
    backgroundColor: '#47a4e2',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#2883bb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    color: '#fff',
    
  },



  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#206794',
    marginBottom: 30
  },

  image:{
    width: 350,
    height: 350,
  }
});
