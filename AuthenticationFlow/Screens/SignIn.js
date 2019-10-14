import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';


const data = {
    email: 'ninh',
    password: '12345678'
}
export default class SignIn extends Component {

  state = {
    email: '',
    password: '',
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  onSignIn = async () => {
    const {email, password} = this.state;
    try {
      if (data.email == email && data.password == password && email.length > 0 && password.length > 0 ) {
        this.props.navigation.navigate('Home');
      }
      else{
          alert('Please enter Email or Password')
      }
    } catch (error) {
      alert(error);
    }
  };

  goToSignUp = () => this.props.navigation.navigate('SignUp');

  render() {
    const {email, password} = this.state;
    return (
      <View style={StyleSheet.container}>
        <View style={{margin: 10}}>
          <TextInput
            name="email"
            value={email}
            placeholder="Enter Email"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{margin: 10}}>
          <TextInput
            name="password"
            value={password}
            placeholder="Enter Password"
            autoCapitalize="none"
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <Button title="SignIn" onPress={this.onSignIn} />
        <Button title="SignUp" onPress={this.goToSignUp} />
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
