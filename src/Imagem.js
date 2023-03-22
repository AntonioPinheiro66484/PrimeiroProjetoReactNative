import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});

const DisplayAnImageWithStyle = () => {
  return (

      <Image
        style={styles.stretch}
        source={require('../assets/perfil.png')}
      />
 
  );
};
 
export default DisplayAnImageWithStyle