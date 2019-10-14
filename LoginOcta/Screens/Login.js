import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/image/logo.png')}
        />
        <View style={styles.content}>
          <TextInput></TextInput>
        </View>
        <View style={styles.content}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: 350,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
  },
});
