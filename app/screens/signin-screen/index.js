import React from 'react';
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
import {Images, Size, Colors} from '@theme';
import styles from './styles';

export const SignInScreen = (props) => {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.HeaderImg}>
        <Text style={styles.HeaderText}>ONLINE LIBRARY</Text>
        <Image style={styles.HeadImg} source={Images.loginImage} />
      </View>
      <View style={styles.BookImg}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image style={styles.backBtn} source={Images.backBtn} />
        </TouchableOpacity>
        <Text style={styles.AccText}>Welcome Back</Text>
        <View
          style={{
            justifyContent: 'space-between',
            height: 200,
          }}>
          <TextInput style={styles.PlaceHolder} placeholder="Email" />
          <TextInput style={styles.PlaceHolder} placeholder="Password" />
          <TouchableOpacity
            style={styles.BtnSignUp}
            onPress={() => props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.BtnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
