import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  SwitchComponent,
} from 'react-native';
import {Images, Size, Colors, Validator} from '@theme';
import styles from './styles';
import {ScrollView, Switch} from 'react-native-gesture-handler';

export const SignUpScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, SetConfPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confPasswordError, setConfPasswordError] = useState('');

  const SignUpHandler = () => {
    let nameError = Validator('name', name);
    setNameError(nameError);
    let emailError = Validator('email', email);
    setEmailError(emailError);
    let passwordError = Validator('password', password);
    setPasswordError(passwordError);
    let confPasswordError = Validator('confPassword', confPassword, password);
    setConfPasswordError(confPasswordError);
    if (nameError || emailError || passwordError) {
      console.log('callled');
      return false;
    } else {
      console.log('not callled');
      props.navigation.navigate('SignInScreen');
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.HeaderImg}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image style={styles.HeadImg} source={Images.backBtn} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.HeaderText}>Create Account</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.BookImg}>
          <View style={styles.MainPlaceHolder}>
            <TextInput
              style={styles.PlaceHolder}
              placeholder="Full Name"
              value={name}
              onChangeText={(name) => setName(name)}
              onBlur={() => setNameError(Validator('name', name))}
            />
            {nameError ? (
              <Text style={{color: Colors.Red}}>{nameError}</Text>
            ) : null}

            <TextInput
              style={styles.PlaceHolder}
              placeholder="Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              onBlur={() => setEmailError(Validator('email', email))}
            />
            {emailError ? (
              <Text style={{color: Colors.Red}}>{emailError}</Text>
            ) : null}
            <TextInput
              style={styles.PlaceHolder}
              placeholder="Password"
              value={password}
              secureTextEntry={false}
              maxLength={8}
              onChangeText={(password) => setPassword(password)}
              onBlur={() => setPasswordError(Validator('password', password))}
            />
            {passwordError ? (
              <Text style={{color: Colors.Red}}> {passwordError}</Text>
            ) : null}
            <TextInput
              style={styles.PlaceHolder}
              placeholder="Confirm Password"
              value={confPassword}
              secureTextEntry={false}
              maxLength={8}
              onChangeText={(confPassword) => SetConfPassword(confPassword)}
              onBlur={() =>
                setConfPasswordError(
                  Validator('confPassword', confPassword, password),
                )
              }
            />
            {confPasswordError ? (
              <Text style={{color: Colors.Red}}>{confPasswordError}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.BtnSignUp}
              onPress={() => SignUpHandler()}>
              <Text style={styles.BtnText}>Sign up </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
