import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSum = () => {
    try {
      // Converter os valores dos inputs para números
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      if (isNaN(num1) || isNaN(num2)) {
        setResultado('Por favor, insira números válidos.');
      } else {
        const result = num1 + num2;
        setResultado(result.toString());
      }  
    } catch (error) {
      setResultado(error.toString());
    }
  };

  const handleClean = () => {
    try {
      // Converter os valores dos inputs para números
      
      setNumber1('');
      setNumber2('');
      setResultado('');
    } catch (error) {
      setResultado(error.toString());
    }
  };




  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        value={number1}
        onChangeText={setNumber1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        value={number2}
        onChangeText={setNumber2}
        keyboardType="numeric"
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSum}
      >
        <Text style={styles.buttonText}>Somar</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.buttonClean}
        onPress={handleClean}
      >
        <Text style={styles.buttonTextClean}>Limpar</Text>
      </TouchableOpacity>


      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.resultado}>{resultado !== '' ? `${resultado}` : 'Aguardando cálculo...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultado: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    width: '80%',
    marginBottom: 20,
    
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonClean: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: 'white',
    borderColor: 'black', // Altere para 'black' para cor preta
    borderWidth: 1, // Adicione uma borda com tamanho 1
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextClean: {
    color:'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
