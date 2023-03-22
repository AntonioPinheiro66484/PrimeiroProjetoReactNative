import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Texto from './src/Texto'
import Input from './src/Input'
import Perfil from './src/Imagem'
export default function App() {
  return (
    <View style={styles.container}>
       {/* componente de image importado*/}
      <Perfil></Perfil>
      {/* componente de texto */}
      <Texto></Texto>
      {/* componente de input*/}
      <Input></Input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
