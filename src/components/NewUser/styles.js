import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25, // Aumentado o valor para criar um espaço maior entre os campos
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonSave: {
    width: '100%',
    height: 40,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonClear: {
    width: '100%',
    height: 40,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  errorContainer: {
    position: 'relative',
    marginBottom: 20, // Aumentado o valor para criar um espaço maior entre as mensagens de erro
  },
  errorText: {
    position: 'absolute',
    top: -20, // Posiciona a mensagem de erro acima do campo de entrada
    color: 'red',
    fontSize: 12,
  },
});

export default styles; 
