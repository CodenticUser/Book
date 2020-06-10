import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {Images, Size, Colors, Validator} from '@theme';
import styles from './styles';

export const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submitForm = () => {
    let emailErr = Validator('email', email);
    let passwordErr = Validator('password', password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return false;
    } else {
      console.log('');
      props.navigation.navigate('LogInScreen');
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.HeaderImg}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image style={styles.backBtn} source={Images.backBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.MainHead}>
            <Text style={styles.HeaderText}>Welcome Back</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.BookImg}>
          <View style={styles.MainPlaceHolder}>
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
              secureTextEntry={true}
              maxLength={8}
              onChangeText={(password) => setPassword(password)}
              onBlur={() => setPasswordError(Validator('password', password))}
            />
            {passwordError ? (
              <Text style={{color: Colors.Red}}>{passwordError}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.BtnSignUp}
              onPress={() => submitForm()}>
              <Text style={styles.BtnText}>Sign In </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const onBlurEmailHandler = () => {
//   setHideEmail(false);
//   if (email == '') {
//     setEnterEmail('Not a blank');
//     setHideEmail(true);
//     return false;
//   }
//   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
//   if (reg.test(email) === true) {
//     return true;
//   } else {
//     setEnterEmail('invalid email');
//     setHideEmail(true);
//     // alert('invalid email');
//   }
// };
// const onBlurPasswordHandler = () => {
//   setHidePassword(false);
//   if (password == '') {
//     setEnterPassword('Enter a password');
//     setHidePassword(true);
//     return false;
//   }
//   const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//   if (decimal.test(password) == true) {
//     return true;
//   } else {
//     setEnterPassword('Worng password');
//     setHidePassword(true);
//     return false;
//   }
// };

// const signInHandler = () => {
//   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
//   const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

//   if (reg.test(email) === true && decimal.test(password) == true) {
//     props.navigation.navigate('WelcomeScreen');
//   }
// };
