import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Signup</Text>
        <Button
          title="Go to SignIn"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
